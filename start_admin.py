import http.server
import socketserver
import urllib.request
import json
import os

PORT = 8080

class SecureAdminServer(http.server.SimpleHTTPRequestHandler):
    def do_POST(self):
        if self.path == '/api/generate_payment_link':
            content_length = int(self.headers['Content-Length'])
            post_data = self.rfile.read(content_length)
            req_data = json.loads(post_data)
            
            # Read local secure key
            try:
                with open('.yoco_key', 'r') as f:
                    secure_key = f.read().strip()
            except FileNotFoundError:
                self.send_response(500)
                self.send_header('Content-type', 'application/json')
                self.end_headers()
                self.wfile.write(json.dumps({'error': 'The .yoco_key file is missing on the server.'}).encode())
                return

            # Proxies the request securely to Yoco, bypassing browser CORS
            yoco_req = urllib.request.Request('https://api.yoco.com/v1/payment_links', data=json.dumps(req_data['payload']).encode())
            yoco_req.add_header('Authorization', f"Bearer {secure_key}")
            yoco_req.add_header('Content-Type', 'application/json')
            
            try:
                with urllib.request.urlopen(yoco_req) as response:
                    self.send_response(200)
                    self.send_header('Content-type', 'application/json')
                    self.end_headers()
                    self.wfile.write(response.read())
            except urllib.error.HTTPError as e:
                self.send_response(e.code)
                self.send_header('Content-type', 'application/json')
                self.end_headers()
                self.wfile.write(e.read())
            except Exception as e:
                self.send_response(500)
                self.send_header('Content-type', 'application/json')
                self.end_headers()
                self.wfile.write(json.dumps({'error': str(e)}).encode())
        else:
            self.send_response(404)
            self.end_headers()

if __name__ == "__main__":
    # Ensure we are in the correct directory
    os.chdir(os.path.dirname(os.path.abspath(__file__)))
    
    with socketserver.TCPServer(("", PORT), SecureAdminServer) as httpd:
        print(f"🚀 VRL Secure Admin Server running at http://localhost:{PORT}")
        print(f"This server acts as a secure local bridge for the Yoco API.")
        print(f"Press Ctrl+C to stop.")
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nShutting down server.")
