/* =====================================================================
   VRL BUSINESS MAPS — DATA
   Every business model is one entry in MAPS. Each map has multiple VIEWS
   (lenses). A view is a set of nodes (x,y,w,h,kind,label,sub,detail) plus
   edges (from,to,label,dashed). Add a map = add data here. Never touch the
   renderer.  Built with Hampton · 2026-06-26.
   ===================================================================== */

const MAPS = {

/* =====================================================================
   MAP 1 — SOUTH AFRICAN MUSIC PUBLISHING (the VRL Publishing model)
   Source: visio-publishing/VRL_PUBLISHING_MODEL_END_TO_END.md
           vrl-africa/VRL_PUBLISHING_PROPOSAL.md
   ===================================================================== */
"sa-publishing": {
  title: "South African Music Publishing",
  subtitle: "The VRL Publishing model — find the money, advance the writer, collect forever",
  status: "live",
  defaultView: "flow",
  views: {

    /* ---------- VIEW A: THE 10-STEP END-TO-END FLOW ---------- */
    flow: {
      label: "The Machine",
      blurb: "The end-to-end flow: from finding unclaimed money to collecting it forever. Each deal walks these 10 steps. On recoup it loops — that's the compounding annuity.",
      canvas: [1260, 620],
      nodes: [
        { id:"f1",  x:30,  y:50,  kind:"step", n:1,  label:"Risk Analysis",        sub:"Ingest + predict",  detail:"VRL ingests society statements + market / airplay / usage data and runs the predictive engine → verified + projected income and a 5-factor risk score. This is the fuel for everything downstream." },
        { id:"f2",  x:275, y:50,  kind:"step", n:2,  label:"Underwrite",           sub:"Size the deal",     detail:"The engine sizes the deal: advance (a haircut of verified/projected income), term, admin %, recoupment. Outputs 3 views — writer offer, funder view, insurer view — off ONE set of numbers." },
        { id:"f3",  x:520, y:50,  kind:"step", n:3,  label:"Insure",               sub:"1.6–3% premium",    detail:"Take the underwriting to a trade-credit insurer. Because VRL collects DIRECTLY (controlled account = low realized loss) the premium is low (1.6–3% of deal value). This is the capital unlock — an insured receivable is institutional-grade." },
        { id:"f4",  x:765, y:50,  kind:"step", n:4,  label:"Fund",                 sub:"Capital committed", detail:"Take the INSURED deal to the funder. Downside is wrapped, so they commit capital at an above-market but de-risked return. VRL deploys ZERO of its own capital." },
        { id:"f5",  x:1010,y:50,  kind:"step", n:5,  label:"Offer",                sub:"Writer accepts",    detail:"VRL makes the writer the offer; the writer accepts. For never-collected writers this is found money on income they got R0 of." },
        { id:"f6",  x:1010,y:330, kind:"rail", n:6,  label:"The Rail",             sub:"One signing session", detail:"One signing session: the writer nominates the controlled collection account on the SAMRO/CAPASSO banking form + signs a cession + Letter of Direction + admin POA / authorized-agent (admin + Hermes). The member just nominates where their OWN money lands — we are not asking SAMRO to bless a 3rd-party cession." },
        { id:"f7",  x:765, y:330, kind:"step", n:7,  label:"Disburse",            sub:"Cash to writer",    detail:"The funder's capital flows to the writer. This is a non-recourse TRUE PURCHASE of a capped future-royalty slice at a discount — never a loan. That keeps it outside the NCA: VRL is not a fintech." },
        { id:"f8",  x:520, y:330, kind:"step", n:8,  label:"Administer & Grow",    sub:"Hermes, ongoing",   detail:"Hermes registers the works everywhere, fixes splits, files black-box claims, switches on CAPASSO / SAMPRA / international + sync. Income RISES after we take over — that growth is pure upside." },
        { id:"f9",  x:275, y:330, kind:"step", n:9,  label:"Collect & Recoup",     sub:"Controlled account",detail:"Royalties land in the controlled account. We recoup the advance and take the admin fee (20–30%, shared with the funder during the term) throughout." },
        { id:"f10", x:30,  y:330, kind:"step", n:10, label:"Revert & Renew",       sub:"Compounds",         detail:"On recoup the slice reverts — the writer keeps everything, still administered (recurring fee). Renew / top-up against now-larger income. This is the compounding annuity." },
      ],
      edges: [
        {from:"f1",to:"f2"},{from:"f2",to:"f3"},{from:"f3",to:"f4"},{from:"f4",to:"f5"},
        {from:"f5",to:"f6"},{from:"f6",to:"f7"},{from:"f7",to:"f8"},{from:"f8",to:"f9"},{from:"f9",to:"f10"},
        {from:"f10",to:"f1",label:"renew · compounds",dashed:true,curve:-160},
      ],
    },

    /* ---------- VIEW B: THE MONEY (4-party model) ---------- */
    money: {
      label: "The Money",
      blurb: "Four parties, one set of numbers, zero VRL capital. Figures are Hampton's real verified deal (R258,433/yr income, de-lumped). Click any party to see their position.",
      canvas: [1100, 660],
      nodes: [
        { id:"cat", x:430, y:280, kind:"hub",     label:"The Catalogue", sub:"R258,433 / yr verified", detail:"Hampton's writer's-share income, de-lumped: R258,433/yr verified. The advance is a haircut on this. (Never-collected writer variant: R120K projected found money → R60K now.)" },
        { id:"writer",  x:80,  y:50,  kind:"party",  label:"Writer",  sub:"R206,746 cash now", detail:"Gets R206,746 cash now, KEEPS 75% of income, slice reverts after 2 years. Cash today + grown income + ownership kept. The never-collected writer gets R60,000 on money they were collecting R0 of." },
        { id:"vrl",     x:790, y:50,  kind:"party",  label:"VRL",     sub:"R77,530 + R0 capital", detail:"Earns R77,530 admin share over the term + FULL admin fee after + sync — on R0 of its own capital. Plus extra lines: sync licensing, black-box recovery share, publisher share where applicable. This is the recurring annuity." },
        { id:"funder",  x:790, y:500, kind:"party",  label:"Funder",  sub:"11.3% / yr insured", detail:"Out R210,881 → back R258,433 = 11.3%/yr, insured / near-guaranteed. (Never-collected variant: 18.0%/yr.) Return = capital back + their share of the admin fee — an aligned JV, not interest." },
        { id:"insurer", x:80,  y:500, kind:"party",  label:"Insurer", sub:"R4,135 premium (2%)", detail:"Earns a low premium (R4,135 = 2%; 3% on the riskier deal) on a low-loss, controlled-collection book. Wraps the receivable → turns it into an institutional-grade asset that unlocks cheap capital." },
      ],
      edges: [
        {from:"cat",to:"writer", label:"haircut → cash",   curve:-40},
        {from:"funder",to:"cat", label:"funds the advance",curve:-40},
        {from:"cat",to:"funder", label:"collections recoup",curve:60},
        {from:"cat",to:"vrl",    label:"admin fee 20–30%", curve:40},
        {from:"insurer",to:"cat",label:"wraps downside",   curve:40},
        {from:"vrl",to:"insurer",label:"underwriting",dashed:true,curve:-260},
      ],
    },

    /* ---------- VIEW C: TRACKING — THE DEAL PIPELINE ---------- */
    tracking: {
      label: "How We Track",
      blurb: "Every song/writer is a deal moving through these stages. The GATE on each stage is what counts as 'moved' — the metric we track. Live registry: 38 works · 222 open claims.",
      canvas: [1240, 640],
      nodes: [
        { id:"t1",  x:30,   y:50,  kind:"stage", n:1,  label:"Found",        sub:"GATE: claim in registry",      detail:"The engine identifies a work + the unclaimed / under-collected money on it, and links it to the writers, publishers and master owner.",
          meta:[
            {k:"Found from where",v:"Society portals & statements (SAMRO · CAPASSO · SAMPRA), the US/intl pools (MLC · SoundExchange · HFA · PRS/MCPS · foreign CMOs), DSP usage (Spotify/Apple/YouTube), and society black-box / unclaimed lists."},
            {k:"Where we're looking for proof",v:"VRL Echo monitors radio + TV airplay (audio-fingerprinting), cross-checked against what each society actually paid — that mismatch IS the gap."},
            {k:"Data we pull",v:"The work, its IDs (ISWC / ISRC / IPI), the splits, registration status per society, and collected-vs-owed per territory."},
            {k:"Engine / who",v:"AI Matching → Master Registry (autonomous). Reconciles broken or missing chains itself."},
            {k:"Output (the GATE)",v:"A Master Registry row with an estimated gap = a claim. 222 open claims today."},
          ],
          tools:[
            {name:"VRL Echo",t:"vrl"},{name:"Royalty Desk · hunter/matching/signal",t:"vrl"},{name:"ATLAS rates DB",t:"vrl"},
            {name:"Master Registry · registry.mjs",t:"visio"},{name:"Visio Radio · Shazam airplay",t:"visio"},
            {name:"Chartmetric",t:"3p"},{name:"Shazam / ACRCloud",t:"3p"},{name:"BWARM unmatched data",t:"3p"},{name:"Society portals · SAMRO/CAPASSO/MLC/SoundExchange",t:"3p"},
          ] },
        { id:"t2",  x:250,  y:50,  kind:"stage", n:2,  label:"Reached",      sub:"GATE: writer responded",       detail:"VRL Outbound finds and contacts the writer to open the conversation.",
          meta:[
            {k:"Reached how / where",v:"WhatsApp first, then voice call, video call, email — on the writer's own channels."},
            {k:"Contact found from",v:"Lead-gen + social profiles + PRO/society contact data, attached to the registry claim."},
            {k:"Engine / who",v:"VRL Outbound AI runs it; a human steps in only on escalation."},
            {k:"Output (the GATE)",v:"Two-way contact established — the writer has responded."},
          ],
          tools:[
            {name:"VRL Outbound · Royalty Desk campaigns",t:"vrl"},
            {name:"V-prai · lead-gen",t:"visio"},{name:"VisioCalls",t:"visio"},{name:"Duardo · Label OS",t:"visio"},
            {name:"WhatsApp API",t:"3p"},{name:"ElevenLabs (voice)",t:"3p"},{name:"Deepgram (transcribe)",t:"3p"},{name:"Resend (email)",t:"3p"},
          ] },
        { id:"t3",  x:470,  y:50,  kind:"stage", n:3,  label:"Qualified",    sub:"GATE: ⚠ you define this",      detail:"Decide whether this writer/song is worth spending a deal on. This gate decides what we chase.",
          meta:[
            {k:"What we check",v:"Projected income (from the rates engine), rights status (encumbered or free?), splits clarity, and recoupability."},
            {k:"Where we look",v:"The registry claim + rates-engine projection + the writer's contract/PRO status."},
            {k:"⚠ TODO(Hampton)",v:"Define the qualifying bar — e.g. minimum projected income, must be unencumbered, never-collected/found-money first. Tell me the rule and I'll wire it in."},
            {k:"Output (the GATE)",v:"A go / no-go decision on the claim."},
          ],
          tools:[
            {name:"Royalty Desk · diligence/signal",t:"vrl"},{name:"ATLAS rates DB",t:"vrl"},
            {name:"Visio Artist Passport",t:"visio"},{name:"Visio Intel / Charts",t:"visio"},
            {name:"Chartmetric",t:"3p"},
          ] },
        { id:"t4",  x:690,  y:50,  kind:"stage", n:4,  label:"Underwritten", sub:"GATE: offer sized",            detail:"The underwriting engine prices the deal off one set of numbers.",
          meta:[
            {k:"Inputs / where from",v:"Society statements + tracked usage (Echo + DSP + SoundExchange) + the rates engine, run through the predictive model."},
            {k:"What it produces",v:"Advance size (a haircut of verified/projected income), term, admin %, recoupment + a 5-factor risk score."},
            {k:"Engine / who",v:"Underwriting AI — outputs writer / funder / insurer views simultaneously."},
            {k:"Output (the GATE)",v:"A priced offer exists."},
          ],
          tools:[
            {name:"VRL Underwriting Engine · underwriting.mjs",t:"vrl"},{name:"Royalty Desk · factoring/crossref/statements",t:"vrl"},{name:"ATLAS rates DB",t:"vrl"},
            {name:"Visio Artist Passport",t:"visio"},
            {name:"Chartmetric",t:"3p"},{name:"Society statements",t:"3p"},
          ] },
        { id:"t5",  x:910,  y:50,  kind:"stage", n:5,  label:"Insured",      sub:"GATE: premium quoted",         detail:"We wrap the receivable so the funder's downside is covered.",
          meta:[
            {k:"Where it goes",v:"To a trade-credit / receivables insurer (+ a title insurer for ownership risk)."},
            {k:"Why the premium is low",v:"VRL collects DIRECTLY into a controlled account = low realized loss → premium just 1.6–3% of deal value."},
            {k:"Who",v:"VRL takes the underwriting pack to the insurer."},
            {k:"Output (the GATE)",v:"A binding premium quote in hand."},
          ],
          tools:[
            {name:"VRL Underwriting pack · 3 views",t:"vrl"},{name:"Royalty Desk · crossref (case files)",t:"vrl"},
            {name:"Trade-credit / receivables insurer",t:"3p"},{name:"Title insurer",t:"3p"},
          ] },
        { id:"t6",  x:1010, y:330, kind:"stage", n:6,  label:"Funded",       sub:"GATE: capital committed",      detail:"The funder commits capital against the insured, collection-secured deal.",
          meta:[
            {k:"Where the money is",v:"The $10M advance facility (asset-backed, insured, direct-collection-secured)."},
            {k:"Why they say yes",v:"Insured receivable + controlled collection rail = an institutional-grade asset, above-market but de-risked return. VRL deploys R0 of its own."},
            {k:"Output (the GATE)",v:"A written capital commitment."},
          ],
          tools:[
            {name:"Royalty Desk · factoring (book ledger, IRR)",t:"vrl"},{name:"Money Radar · funded-radar",t:"vrl"},{name:"VRL Underwriting · funder view",t:"vrl"},
            {name:"Funder / $10M facility",t:"3p"},
          ] },
        { id:"t7",  x:790,  y:330, kind:"stage", n:7,  label:"Offered",      sub:"GATE: writer accepted",        detail:"The writer is made the offer and accepts.",
          meta:[
            {k:"Where / how",v:"Presented on the writer's channel (WhatsApp/video); agreement sent for e-signature."},
            {k:"For never-collected writers",v:"This is found money on income they were collecting R0 of."},
            {k:"Output (the GATE)",v:"Signed acceptance."},
          ],
          tools:[
            {name:"Royalty Desk · pitch (per lead)",t:"vrl"},
            {name:"VisioPitch Builder",t:"visio"},{name:"VisioCalls",t:"visio"},{name:"Duardo · Label OS",t:"visio"},
            {name:"WhatsApp API",t:"3p"},{name:"e-signature",t:"3p"},
          ] },
        { id:"t8",  x:570,  y:330, kind:"rail",  n:8,  label:"Signed (Rail)",sub:"GATE: account nominated",      detail:"One signing session sets up the collection rail VRL controls.",
          meta:[
            {k:"Where it happens",v:"On the SAMRO / CAPASSO EFT/banking form — the writer nominates the controlled collection account as where their OWN money lands."},
            {k:"Documents signed",v:"Cession + Letter of Direction + admin POA / authorized-agent (admin + Hermes). Purchase, not a loan."},
            {k:"Legal note",v:"We're not asking SAMRO to bless a 3rd-party cession — the member just nominates the destination account."},
            {k:"Output (the GATE)",v:"Account switched + docs in."},
          ],
          tools:[
            {name:"Hermes · authorized agent",t:"vrl"},{name:"Royalty Desk · cwr/registry",t:"vrl"},
            {name:"Royalty Collection · forms",t:"visio"},
            {name:"SAMRO/CAPASSO banking form",t:"3p"},{name:"e-signature",t:"3p"},
          ] },
        { id:"t9",  x:350,  y:330, kind:"stage", n:9,  label:"Disbursed",    sub:"GATE: cash sent",              detail:"The funder's capital flows to the writer.",
          meta:[
            {k:"Where the money moves",v:"Funder facility → writer's bank account."},
            {k:"What it legally is",v:"A non-recourse TRUE PURCHASE of a capped future-royalty slice at a discount — never a loan (stays outside the NCA)."},
            {k:"Output (the GATE)",v:"Payment confirmed to the writer."},
          ],
          tools:[
            {name:"Royalty Desk · factoring book ledger",t:"vrl"},
            {name:"Duardo · finance",t:"visio"},
            {name:"Bank / EFT transfer",t:"3p"},
          ] },
        { id:"t10", x:130,  y:330, kind:"stage", n:10, label:"Collecting",   sub:"GATE: money landing",          detail:"Royalties land in the controlled account while Hermes administers and GROWS the income.",
          meta:[
            {k:"Where it collects from",v:"Every pool: domestic (SAMRO/CAPASSO/SAMPRA) + international switch-on (MLC · SoundExchange · PRS/MCPS · foreign CMOs) + sync + black-box claims."},
            {k:"How it grows",v:"Hermes registers everywhere, fixes splits, files black-box claims, turns on CAPASSO/SAMPRA/intl — income RISES after takeover."},
            {k:"Tracked against",v:"Under-collection AI checks actual inflow vs the projection, per society."},
            {k:"Output (the GATE)",v:"First inflow received; run-rate tracked vs projection."},
          ],
          tools:[
            {name:"Hermes · orchestrator daemon",t:"vrl"},{name:"Royalty Desk · claims (MLC sprint)/statements",t:"vrl"},{name:"VRL Echo · ongoing tracking",t:"vrl"},
            {name:"Royalty Collection workspace",t:"visio"},{name:"Master Registry · samro-reconciliation.mjs",t:"visio"},
            {name:"Society portals + MLC + SoundExchange",t:"3p"},{name:"YouTube Content ID",t:"3p"},{name:"Meta Rights Manager",t:"3p"},
          ] },
        { id:"t11", x:130,  y:540, kind:"stage", n:11, label:"Recouped",     sub:"GATE: advance repaid",         detail:"The advance is fully repaid out of collections.",
          meta:[
            {k:"Measured where",v:"Cumulative collections in the controlled account vs the capped slice."},
            {k:"Who earns through it",v:"Funder gets capital + admin-fee share; VRL takes its admin fee throughout."},
            {k:"Output (the GATE)",v:"Cumulative collection ≥ advance + agreed share."},
          ],
          tools:[
            {name:"Royalty Desk · factoring ledger (IRR)",t:"vrl"},
            {name:"Duardo · royalty-reconciliation",t:"visio"},
            {name:"Society statements",t:"3p"},
          ] },
        { id:"t12", x:350,  y:540, kind:"good",  n:12, label:"Reverted/Renew",sub:"GATE: slice reverts",         detail:"The slice reverts to the writer — who keeps everything, still administered — then we renew against now-larger income.",
          meta:[
            {k:"What reverts",v:"The capped royalty slice returns to the writer; recurring admin continues (the annuity)."},
            {k:"Renew where",v:"A top-up offer against the now-larger, fully-collected, multi-territory income."},
            {k:"Output (the GATE)",v:"Revert recorded + renewal offer made → loops back to Found for the next slice."},
          ],
          tools:[
            {name:"VRL Underwriting Engine · top-up",t:"vrl"},{name:"Hermes · admin continues",t:"vrl"},
            {name:"Visio Artist Passport",t:"visio"},{name:"Duardo · Label OS",t:"visio"},
          ] },
      ],
      edges: [
        {from:"t1",to:"t2"},{from:"t2",to:"t3"},{from:"t3",to:"t4"},{from:"t4",to:"t5"},{from:"t5",to:"t6"},
        {from:"t6",to:"t7"},{from:"t7",to:"t8"},{from:"t8",to:"t9"},{from:"t9",to:"t10"},
        {from:"t10",to:"t11"},{from:"t11",to:"t12"},
        {from:"t12",to:"t1",label:"renew",dashed:true,curve:120},
      ],
    },

    /* ---------- VIEW D: THE ENGINES (the machine) ---------- */
    engines: {
      label: "The Engines",
      blurb: "The machine that turns scattered African royalty data into signed, collectable, financeable assets. Under VRL they read as one engine — the moat. Badges show build state.",
      canvas: [1180, 700],
      nodes: [
        { id:"e1", x:40,  y:40,  kind:"engine", label:"Master Royalty Registry", sub:"v1 built",   detail:"One source of truth: every work × IDs (IPI/ISWC/ISRC) × splits × registration status per society × collected vs owed = THE GAP = the claim list + underwriting base. 38 works, 222 open claims." },
        { id:"e2", x:40,  y:170, kind:"engine", label:"SAMRO Reconciliation",    sub:"built",      detail:"Bank vs portal truth → real run-rate + 'failure to administer' evidence. R177.5K/2mo vs R109K/3yr; R134.5K unmatched lump found." },
        { id:"e3", x:40,  y:300, kind:"engine", label:"Underwriting Engine",     sub:"v2 built",   detail:"Statements + market/airplay/usage + predictive engine → offer size, term, recoupment. Outputs 3 views: writer offer / funder / insurer." },
        { id:"e4", x:40,  y:430, kind:"engine", label:"Data / Airplay Engine",   sub:"building",   detail:"Sweeps SAMRO/CAPASSO/SAMPRA + global counterparts + radio + TV/broadcast + usage DBs + the RATES of where played → simulative calculator → defensible income projection. The underwriting engine's FUEL." },
        { id:"e5", x:40,  y:560, kind:"engine", label:"Hermes — AI Admin Agent", sub:"skeleton",   detail:"Authorized-agent admin: multi-society registration, splits, metadata, black-box recovery, international (SoundExchange/MLC/foreign), continuous portal monitoring." },
        { id:"hub",x:560, y:300, kind:"hub",    label:"VRL Publishing Console",  sub:"built · build-green", detail:"The product UI: onboard → ingest → scan → case → offer → advance → portal. Onboarding + recovery + advance flows live." },
        { id:"out",x:920, y:300, kind:"good",   label:"Signed, Collectable, Financeable Assets", sub:"the output", detail:"Offer + advance + direct collection rail = a verified, insurable, financeable receivable. This is what the $10M facility funds." },
      ],
      edges: [
        {from:"e1",to:"hub"},{from:"e2",to:"hub"},{from:"e3",to:"hub"},{from:"e4",to:"hub"},{from:"e5",to:"hub"},
        {from:"hub",to:"out",label:"deal"},
        {from:"e4",to:"e3",label:"fuels",dashed:true,curve:-30},
      ],
    },

    /* ---------- VIEW E: THE ROYALTY CHAIN (collection rail) ---------- */
    chain: {
      label: "Royalty Chain",
      blurb: "Where the money is born and how it flows to the writer — and where it leaks. THE GAP (~30% unclaimed globally; >$2.5bn in suspense) is recovered by the engine. → See GLOBAL POOLS for every society worldwide (MLC, SoundExchange, PRS, ICE, CISAC…).",
      canvas: [1240, 660],
      nodes: [
        { id:"u1", x:30,  y:30,  kind:"src", label:"Radio",            sub:"performance", detail:"Broadcast performance royalties — the largest SA stream. Tracked via station logs / BMAT-class monitoring." },
        { id:"u2", x:30,  y:140, kind:"src", label:"TV / Broadcast",   sub:"performance + sync", detail:"TV usage and synchronisation. Often under-documented = recoverable gap." },
        { id:"u3", x:30,  y:250, kind:"src", label:"Streaming / DSP",  sub:"mechanical + perf", detail:"Spotify/Apple/etc. Mechanical + performance components; international and black-box recovery live here." },
        { id:"u4", x:30,  y:360, kind:"src", label:"Live / Public",    sub:"performance", detail:"Live shows, venues, public spaces — needletime and performance." },
        { id:"u5", x:30,  y:470, kind:"src", label:"Sync",             sub:"licensing", detail:"Film/ad/game placements — a separate VRL revenue line on top of the advance." },

        { id:"p1", x:420, y:90,  kind:"pro", label:"SAMRO",   sub:"performing rights", detail:"Performing rights organisation — performance royalties. VRL holds a working relationship that facilitates the rail." },
        { id:"p2", x:420, y:250, kind:"pro", label:"CAPASSO", sub:"mechanical rights", detail:"Mechanical rights society — reproduction/mechanical royalties. Often un-switched-on for writers = found money." },
        { id:"p3", x:420, y:410, kind:"pro", label:"SAMPRA",  sub:"needletime", detail:"Needletime (recording) rights. Another commonly uncollected stream we switch on." },

        { id:"gap",x:420, y:560, kind:"warn",label:"THE GAP",sub:"~30% unclaimed", detail:"~30% of music royalties go unclaimed globally; >$2.5bn sits in suspense; ~$286M/yr uncollected in Nigeria + Kenya alone. The engine finds it and reconciles it to the right owner. This is the whole opportunity." },

        { id:"acct",x:790, y:250, kind:"hub", label:"Controlled Collection Account", sub:"the rail we own", detail:"Writer nominates this account via the SAMRO/CAPASSO banking form + LOD. ALL royalty income lands here first — domestic AND the international recovery (MLC, SoundExchange, PRS/MCPS, ICE, sub-publishing across the GLOBAL POOLS tab). Owning the inflow = the moat: we own the relationship, the data, and the money movement." },

        { id:"o1", x:1080,y:120, kind:"step", label:"Recoup Advance",  sub:"to funder", detail:"Collections first recoup the advance for the funder until the capped slice is repaid." },
        { id:"o2", x:1080,y:260, kind:"step", label:"VRL Admin Fee",   sub:"20–30%", detail:"VRL's admin fee (shared with funder during term, then VRL keeps it). The recurring annuity." },
        { id:"o3", x:1080,y:400, kind:"good", label:"Writer's Share",  sub:"keeps 75%+", detail:"The writer keeps the rest — and after recoup, keeps everything (still administered). Paid directly to the songwriter; their own right." },
      ],
      edges: [
        {from:"u1",to:"p1"},{from:"u2",to:"p1"},{from:"u3",to:"p2"},{from:"u3",to:"p1"},
        {from:"u4",to:"p3"},{from:"u5",to:"acct",label:"sync direct",dashed:true,curve:-200},
        {from:"p1",to:"acct"},{from:"p2",to:"acct"},{from:"p3",to:"acct"},
        {from:"gap",to:"acct",label:"recovered",dashed:true},
        {from:"acct",to:"o1"},{from:"acct",to:"o2"},{from:"acct",to:"o3"},
      ],
    },

    /* ---------- VIEW F: GLOBAL POOLS (comprehensive directory) ---------- */
    pools: {
      label: "Global Pools",
      blurb: "Every pool a songwriter's (and master's) money can sit in — worldwide. Income type → collection societies by territory → digital platforms → aggregators → standards → the rail → the writer. The engine finds, registers and recovers across ALL of these. Click any pool for detail. Pan right →",
      layout: "columns",
      columns: [

        { title:"Income Types", kind:"src", items:[
          { label:"Performance", sub:"broadcast + public", detail:"Public performance + broadcast of the WORK (the composition). Radio, TV, venues, retail, live. Collected by performing-rights orgs (PROs) and paid to writers + publishers. The biggest single stream in most markets." },
          { label:"Mechanical", sub:"reproduction & copies", detail:"The right to reproduce the composition — physical (CD/vinyl), downloads, and the mechanical portion of streaming. Collected by mechanical societies / agencies (CAPASSO, MLC, HFA, MCPS, Harry Fox, BIEM members)." },
          { label:"Digital / Streaming", sub:"perf + mech blend", detail:"Streaming pays BOTH a performance component (to PROs) and a mechanical component (to mechanical collectives like the MLC in the US). Splitting and matching this correctly is where most money leaks." },
          { label:"Neighbouring / Needletime", sub:"master + performer", detail:"Rights in the SOUND RECORDING (not the song): featured artist + master owner + performers. Collected by SoundExchange (US), PPL (UK), SAMPRA (SA), GVL/SENA (EU) and the SCAPR performer network. A separate pool most writers never switch on." },
          { label:"Sync", sub:"film · TV · ad · game", detail:"Licensing the song into visual media. Negotiated directly or via publishers/agents; a high-margin VRL revenue line on top of the advance. Micro-sync also flows via YouTube/Meta." },
          { label:"Black Box", sub:"unmatched & undistributed", detail:"Royalties collected but never matched to an owner — held by CMOs and then distributed by market share or written off. ~30% of royalties go unclaimed globally; >$2.5bn sits in suspense. The engine's core recovery target." },
          { label:"Private Copy Levy", sub:"blank media · devices", detail:"Statutory levies on blank media and devices (strong in the EU). Distributed via national societies (e.g. Copie France, ZPÜ). Often unclaimed by African/foreign writers." },
          { label:"Lyrics / Print", sub:"display + sheet music", detail:"Print, sheet music, and lyric-display licensing (e.g. Musixmatch, LyricFind). Small but real, and almost never collected by independent writers." },
        ]},

        { title:"South Africa (base)", kind:"pro", items:[
          { label:"SAMRO", sub:"performing rights", detail:"Southern African Music Rights Organisation — performance royalties for writers/publishers. VRL holds a working relationship that facilitates the rail. The home-base society." },
          { label:"CAPASSO", sub:"mechanical rights", detail:"Composers, Authors & Publishers Association — mechanical/reproduction royalties incl. the streaming mechanical. Frequently un-switched-on for writers = found money." },
          { label:"SAMPRA", sub:"needletime (recording)", detail:"SA Music Performance Rights Association — needletime/neighbouring rights in sound recordings (master + performer side). Another commonly uncollected SA stream." },
          { label:"RISA / SARRAL legacy", sub:"industry body · ISRC", detail:"Recording Industry of SA — issues ISRCs and represents labels. (SARRAL, the old mechanical society, collapsed — part of why recovery matters here.)" },
        ]},

        { title:"United States", kind:"pro", items:[
          { label:"MLC", sub:"digital mechanical (MMA)", detail:"The Mechanical Licensing Collective — created by the Music Modernization Act to administer the blanket licence for streaming/download MECHANICALS in the US. Pays publishers + self-administered writers; distributed a huge historical black box. Critical for any catalogue streamed in the US." },
          { label:"ASCAP", sub:"performance · PRO", detail:"American Society of Composers, Authors & Publishers — non-profit performing-rights org. US public-performance + broadcast royalties for the writer/publisher share." },
          { label:"BMI", sub:"performance · PRO", detail:"Broadcast Music, Inc. — the other major US PRO. A writer is affiliated to ONE PRO (ASCAP, BMI, SESAC or GMR); foreign writers collect US performance via their home society's reciprocal deal." },
          { label:"SESAC · GMR", sub:"for-profit PROs", detail:"SESAC and Global Music Rights — invite-only, for-profit US performing-rights orgs. Smaller rosters, often higher rates." },
          { label:"HFA", sub:"mechanical agent", detail:"Harry Fox Agency — long-standing US mechanical licensing/collection agent (now under SESAC/Blackstone). Physical + some digital mechanicals; works alongside the MLC." },
          { label:"SoundExchange", sub:"digital perf · recordings", detail:"Collects DIGITAL PERFORMANCE royalties for SOUND RECORDINGS (non-interactive: SiriusXM, Pandora radio, webcasters). Pays featured artists + master owners (+ AFM/SAG-AFTRA for non-featured). The US neighbouring-rights pool." },
          { label:"AMRA", sub:"global digital (Kobalt)", detail:"American Mechanical Rights Agency — Kobalt-owned global digital collection society; collects mechanicals + performance from DSPs across territories on a direct-licence basis." },
        ]},

        { title:"UK & Europe", kind:"pro", items:[
          { label:"PRS for Music", sub:"UK performance", detail:"UK performing-rights society for writers/publishers (performance + broadcast + online). Co-owns ICE." },
          { label:"MCPS", sub:"UK mechanical", detail:"Mechanical-Copyright Protection Society — UK mechanical royalties; administered alongside PRS." },
          { label:"PPL", sub:"UK neighbouring", detail:"Collects UK neighbouring rights for performers + recording rightsholders (the master/recording side). Reciprocal with SAMPRA/SoundExchange/GVL." },
          { label:"ICE Services", sub:"PRS·GEMA·STIM hub", detail:"Joint multi-territory licensing & processing hub owned by PRS, GEMA and STIM — handles online mechanical + performance across Europe at scale. A key reconciliation counterpart." },
          { label:"GEMA", sub:"Germany · perf+mech", detail:"German collecting society for performance + mechanical. One of the largest in the world; also administers private-copy levies (ZPÜ)." },
          { label:"SACEM", sub:"France · perf+mech", detail:"French society for performance + mechanical; strong across Francophone Africa (collects on behalf of many African works) — directly relevant to VRL's continental recovery." },
          { label:"SIAE · SGAE · SABAM", sub:"IT · ES · BE", detail:"Italy (SIAE), Spain (SGAE), Belgium (SABAM) — national authors' societies covering performance + mechanical in their territories." },
          { label:"BUMA/STEMRA · STIM · SUISA", sub:"NL · SE · CH", detail:"Netherlands (BUMA performance / STEMRA mechanical), Sweden (STIM), Switzerland (SUISA). Plus TONO (NO), KODA (DK), TEOSTO (FI), AKM (AT), ZAIKS (PL), IMRO (IE), SPA (PT)." },
          { label:"GVL · SENA · Adami", sub:"EU neighbouring", detail:"Neighbouring-rights societies for performers/recordings: GVL (Germany), SENA (Netherlands), Adami/Spedidam (France) — the European mirror of SoundExchange/PPL." },
        ]},

        { title:"Asia-Pacific", kind:"pro", items:[
          { label:"JASRAC · NexTone", sub:"Japan", detail:"Japan's authors' societies (JASRAC dominant, NexTone the challenger) — performance + mechanical in one of the largest music markets." },
          { label:"APRA AMCOS", sub:"Australia · NZ", detail:"Combined society: APRA (performance) + AMCOS (mechanical) across Australia and New Zealand." },
          { label:"KOMCA", sub:"South Korea", detail:"Korea Music Copyright Association — performance + mechanical in a fast-growing market (K-pop economy)." },
          { label:"CASH · COMPASS · MÜST", sub:"HK · SG · TW", detail:"Hong Kong (CASH), Singapore (COMPASS), Taiwan (MÜST) — authors' societies covering performance/mechanical." },
          { label:"MACP · WAMI · FILSCAP", sub:"MY · ID · PH", detail:"Malaysia (MACP), Indonesia (WAMI/LMKN), Philippines (FILSCAP) — Southeast-Asian collection societies." },
          { label:"IPRS · PPL India", sub:"India", detail:"Indian Performing Right Society (writer/publisher) + PPL India / Recorded Music Performance (recordings). India's collection is improving fast." },
        ]},

        { title:"Americas (ex-US)", kind:"pro", items:[
          { label:"SOCAN · CMRRA", sub:"Canada", detail:"SOCAN (performance + digital) and CMRRA (mechanical) cover Canadian writer/publisher royalties." },
          { label:"ECAD (UBC·ABRAMUS)", sub:"Brazil", detail:"ECAD is Brazil's central collection bureau; member societies UBC, ABRAMUS, etc. distribute. The largest Latin-American pool." },
          { label:"SACM", sub:"Mexico", detail:"Sociedad de Autores y Compositores de México — performance + mechanical for Mexican repertoire." },
          { label:"SADAIC", sub:"Argentina", detail:"Argentine authors' & composers' society — performance + mechanical." },
          { label:"SAYCO · APDAYC · SCD", sub:"CO · PE · CL", detail:"Colombia (SAYCO), Peru (APDAYC), Chile (SCD) — Andean/Southern-Cone authors' societies." },
        ]},

        { title:"Africa (continental)", kind:"pro", items:[
          { label:"ZIMURA", sub:"Zimbabwe", detail:"Zimbabwe Music Rights Association — the PRO being reformed (not replaced) under VRL's Presidential play. Govt-mandated USD-escrow clearing-house is the target structure." },
          { label:"DRC state body", sub:"ex-SOCODA (rebuilding)", detail:"SOCODA collapsed ($25M missing; only ~$35,882 ever paid to artists). Tshisekedi announced a NEW state copyright body (Dec 2025, Min. Yolande Elebe) — the strongest wedge of any VRL market." },
          { label:"MCSK · KECOBO", sub:"Kenya", detail:"MCSK (the PRO) was de-licensed; KECOBO is the regulator rebuilding the system. A July-2026 court hearing is the entry point. Kenya = hottest secondary market." },
          { label:"COSON · MCSN", sub:"Nigeria", detail:"Rival Nigerian societies (COSON, MCSN) — Africa's biggest music economy; ~$286M/yr uncollected across Nigeria + Kenya alone." },
          { label:"SODAV · BURIDA · BBDA", sub:"SN · CI · BF", detail:"Francophone West-Africa societies: Senegal (SODAV), Ivory Coast (BURIDA), Burkina Faso (BBDA). Much of their money sits at SACEM/SACEM-affiliated accounts." },
          { label:"GHAMRO · COSOTA · ZAMCOPS", sub:"GH · TZ · ZM", detail:"Ghana (GHAMRO), Tanzania (COSOTA), Zambia (ZAMCOPS) — plus COSOMA (Malawi), UPRS (Uganda). Thin collection = large recoverable gaps." },
        ]},

        { title:"Digital & UGC", kind:"engine", items:[
          { label:"YouTube Content ID", sub:"pub + master claims", detail:"Claims revenue on both the composition (publishing) and the recording (master) across all uploads + Art Tracks. A massive, continuously-growing pool that needs active asset registration to capture." },
          { label:"Meta Rights Manager", sub:"Facebook · Instagram", detail:"Monetises music used across Facebook/Instagram/Reels via licensing deals + rights-management claims." },
          { label:"TikTok", sub:"licensed catalogue deals", detail:"Pays via blanket catalogue/licensing deals (direct, or through Merlin/CMOs/distributors) rather than per-stream — correct registration is how writers get their share." },
          { label:"DSP direct", sub:"Spotify · Apple · Amazon", detail:"Direct-licensing relationships (esp. for the mechanical via MLC/AMRA and performance via PROs). The underlying usage data feeds the underwriting engine." },
          { label:"Twitch · Snap · Triller", sub:"emerging UGC", detail:"Newer UGC/streaming surfaces with evolving licensing — early, fragmented, and largely uncollected by independents." },
        ]},

        { title:"Aggregators & Admin", kind:"engine", items:[
          { label:"Hermes (VRL)", sub:"our authorized agent", kind:"hub", detail:"VRL's AI admin agent — multi-society registration, splits, metadata, black-box claims, international (SoundExchange/MLC/foreign) + continuous portal monitoring. The engine that plugs a catalogue into ALL of these pools at near-zero marginal cost." },
          { label:"AMRA (Kobalt)", sub:"global digital", detail:"Direct global digital collection — a model competitor/benchmark for VRL's recovery reach." },
          { label:"Songtrust · Sentric", sub:"publishing admin", detail:"Self-serve publishing administration — register works and collect worldwide for a fee. Admin-only (no advance) — VRL bundles admin + advance + AI + insurance." },
          { label:"Audiam · Music Reports", sub:"claiming · matching", detail:"Specialists in YouTube/DSP claiming and licence matching (MRI). The matching layer that turns usage into claimable money." },
          { label:"TuneCore · CD Baby Pro", sub:"indie admin", detail:"Distributor-attached publishing admin for independents — broad but shallow collection." },
          { label:"Exploration · Downtown", sub:"royalty services", detail:"Royalty administration / audit / catalogue services used across the industry." },
        ]},

        { title:"Standards & Networks", kind:"step", items:[
          { label:"CISAC", sub:"societies confederation", detail:"International Confederation of Societies of Authors and Composers — the network of ~225 authors' societies whose reciprocal agreements move money across borders. The backbone of global collection." },
          { label:"BIEM", sub:"mechanical societies (intl)", detail:"International organisation of mechanical-rights societies — sets the standard mechanical agreements between societies and record producers." },
          { label:"SCAPR / IPN", sub:"performer-rights network", detail:"Network linking performer/neighbouring-rights societies (PPL, SAMPRA, GVL, SoundExchange…) via the IPN performer database — how recording-side money flows internationally." },
          { label:"WIPO", sub:"treaty framework", detail:"World Intellectual Property Organization — the treaties (Berne, Rome, WPPT) that make cross-border royalty rights enforceable." },
          { label:"ISWC·ISRC·IPI·ISNI", sub:"the matching keys", detail:"The identifiers that make recovery possible: ISWC (works), ISRC (recordings), IPI/CAE (interested parties), ISNI (names). Job #1 in the Master Registry — without clean IDs, money can't be matched to the writer." },
        ]},

        { title:"The Rail", kind:"hub", items:[
          { label:"Controlled Collection Account", sub:"all income lands here", detail:"Every pool above is redirected — via banking nomination + Letter of Direction + Hermes authorized access — to ONE controlled account. Owning the inflow across all territories is the moat: the relationship, the data, and the money movement." },
        ]},

        { title:"Distribution", kind:"good", items:[
          { label:"Recoup Advance", sub:"to funder", detail:"Collections first repay the funder's capped slice until recouped (non-recourse true purchase)." },
          { label:"VRL Admin Fee", sub:"20–30%", detail:"Shared with the funder during the advance term, then VRL keeps it — the recurring annuity on a now-fully-collected, multi-territory catalogue." },
          { label:"Writer's Share", sub:"keeps 75%+", detail:"Paid directly to the songwriter; after recoup the slice reverts and the writer keeps everything, still administered. Their own right, collected from every pool on earth." },
        ]},

      ],
    },

    /* ---------- VIEW G: TRACK & AI (VRL Echo + the intelligence layer) ---------- */
    "track-ai": {
      label: "Track & AI",
      blurb: "How VRL TRACKS the money and where AI does the work. Monitoring inputs (top) → the AI engine that runs ~85–90% of the workflow (middle) → collection (bottom) → THE ECHO loop: every dollar + every writer sharpens the model (data network effect).",
      canvas: [1320, 640],
      nodes: [
        // --- monitoring / tracking inputs ---
        { id:"echo",    x:40,   y:40,  kind:"src", label:"VRL Echo",            sub:"radio + TV airplay monitor", detail:"VRL Echo — VRL's airplay & usage monitor: audio-fingerprinting of radio, TV and public performance (BMAT-class), plus streaming/UGC usage. It produces independent PROOF of where a song actually played — the truth society statements miss. Feeds the rates engine and the under-collection detector." },
        { id:"dsp",     x:300,  y:40,  kind:"src", label:"DSP Usage Feeds",     sub:"Spotify · Apple · YouTube",   detail:"Streaming usage feeds — the raw play counts + territories behind the digital mechanical + performance pools. Cross-checked against what the societies actually paid." },
        { id:"sx",      x:560,  y:40,  kind:"src", label:"SoundExchange + PPL",  sub:"neighbouring data",          detail:"SoundExchange (US) + PPL (UK) + GVL/SENA + SAMPRA neighbouring/needletime data — the recording (master + performer) side. We track what's owed there too, not just the writer's share." },
        { id:"portals", x:820,  y:40,  kind:"src", label:"Society Portals",     sub:"SAMRO · CAPASSO · MLC · foreign", detail:"Continuous monitoring of society portals — statements, registrations and distributions across SAMRO, CAPASSO, the MLC and foreign CMOs. Hermes watches these so nothing slips." },
        { id:"rates",   x:1080, y:40,  kind:"src", label:"Rates Engine",        sub:"where played × rate",        detail:"Combines WHERE a work played (Echo) with the RATE each usage pays, per society/territory → a defensible, simulative income projection. The fuel for underwriting." },

        // --- the AI engine (where AI fits) ---
        { id:"registry",x:40,   y:280, kind:"engine", label:"AI Matching / Registry", sub:"IDs · splits · THE GAP", detail:"AI reconciles every work × IDs (ISWC/ISRC/IPI) × splits × registration status × collected-vs-owed = THE GAP. Where the chain is broken or missing, the AI reconciles it autonomously — the claim list + underwriting base." },
        { id:"detect",  x:300,  y:280, kind:"engine", label:"Under-collection AI",   sub:"anomaly detection",     detail:"Compares tracked usage (Echo + DSP + SoundExchange) against what each society actually paid → flags the gap and the 'failure-to-administer' evidence (e.g. R177.5K in 2 months vs R109K booked over 3 years)." },
        { id:"under",   x:560,  y:280, kind:"hub",    label:"Underwriting AI",       sub:"predict income + risk", detail:"Statements + tracked usage + predictive model → offer size, term, admin %, recoupment and a 5-factor risk score. Outputs writer / funder / insurer views off ONE set of numbers." },
        { id:"hermes",  x:820,  y:280, kind:"hub",    label:"Hermes — AI Admin",     sub:"registers · claims · monitors", detail:"The AI admin agent: multi-society registration, split fixes, black-box claims, international switch-on (MLC/SoundExchange/foreign), and continuous portal monitoring. The margin — it does admin a human team can't do at scale." },
        { id:"outbound",x:1080, y:280, kind:"engine", label:"Outbound AI",           sub:"find · reach · close · 85–90%", detail:"Finds the writer and runs ~85–90% of the workflow — WhatsApp, voice and video outreach, reminders, scheduling, agreements, closing — sometimes on a single song, not the whole writer." },

        // --- outcome ---
        { id:"collected",x:560, y:500, kind:"good", label:"Collected + Signed", sub:"money in · writers in", detail:"Royalties collected into the controlled account + writers signed. Each deal is a verified, insured, financeable asset — and a fresh stream of tracking data that feeds the loop." },
      ],
      edges: [
        {from:"echo",to:"registry"},{from:"dsp",to:"registry"},
        {from:"sx",to:"detect"},{from:"portals",to:"detect"},
        {from:"rates",to:"under"},
        {from:"registry",to:"under"},{from:"detect",to:"under"},
        {from:"under",to:"hermes"},{from:"hermes",to:"outbound"},
        {from:"under",to:"collected"},{from:"hermes",to:"collected"},{from:"outbound",to:"collected",curve:60},
        {from:"collected",to:"echo",label:"THE ECHO · data network effect",dashed:true,curve:-150},
      ],
    },

  },
},

/* =====================================================================
   MAP 2 — THE TOOL STACK (every engine/module powering the music side)
   Source: MUSIC_STACK_TOOL_MAP.md (canonical inventory, 2026-06-16)
           + the tool chips already wired into sa-publishing > tracking.
   Owner colours match the chip language: 🟧 VRL · 🔵 Visio · ⚪ 3rd-party.
   ===================================================================== */
"tool-stack": {
  title: "The Tool Stack",
  subtitle: "Every engine, module & service powering the music side — by owner, by job, by what's actually real",
  status: "live",
  defaultView: "owner",
  views: {

    /* ---------- VIEW A: BY OWNER (the orange/navy/grey split) ---------- */
    owner: {
      label: "By Owner",
      layout: "columns",
      blurb: "Who owns each tool. 🟧 VRL = our money/recovery engines · 🔵 Visio = the product suite that feeds them · ⚪ 3rd-party = the services we rent. Click any tool for what it does. The rented layer is the only line that costs cash before revenue (~$430/mo infra + ~$350/mo Chartmetric spine).",
      columns: [
        { title:"VRL — recovery & capital engines", kind:"vrl", items:[
          { label:"VRL Echo", sub:"airplay → income", detail:"`royalty-desk/engines/placement/`. Type a song → resolve → value → leak → recover/finance. Two directions: BACKWARD (recover what leaked) + FORWARD (where to place & market it). The airplay data becomes a targeting map, not just a recovery ledger.", links:[{kind:"local",url:"file:///Users/hga/royalty-desk/engines/placement",label:"royalty-desk/engines/placement"}] },
          { label:"Royalty Desk", sub:"music-finance OS · 19 engines", detail:"`~/royalty-desk/`. The orchestrator: hunt → crossref → cwr → orchestrator → desk. 19 engines under one roof. desk.mjs = pipeline dashboard, pipeline.mjs = the runner.", links:[{kind:"local",url:"file:///Users/hga/royalty-desk",label:"~/royalty-desk (local, no GitHub repo)"}] },
          { label:"Hunter", sub:"unclaimed money → owner → lead", detail:"Royalty Desk engine. Walks BWARM unmatched data → probable owner → a lead. This is where 'found money' starts.", links:[{kind:"local",url:"file:///Users/hga/royalty-desk/engines/hunter",label:"royalty-desk/engines/hunter"}] },
          { label:"Matching", sub:"catalogs × unmatched data", detail:"Client catalogs cross-matched against unmatched datasets, scored EXACT / STRONG / REVIEW. Reconciles broken chains itself.", links:[{kind:"local",url:"file:///Users/hga/royalty-desk/engines/matching",label:"royalty-desk/engines/matching"}] },
          { label:"Claims", sub:"MLC + multi-society packages", detail:"MLC sprint + multi-society claim-package generator. Turns a registry gap into a filable claim pack. 222 open claims today.", links:[{kind:"local",url:"file:///Users/hga/royalty-desk/engines/claims",label:"royalty-desk/engines/claims"}] },
          { label:"CWR", sub:"works-registration generator", detail:"CWR v2.1 works-registration generator — validates writer shares / IPIs before filing everywhere.", links:[{kind:"local",url:"file:///Users/hga/royalty-desk/engines/cwr",label:"royalty-desk/engines/cwr"}] },
          { label:"Crossref", sub:"defensible case files", detail:"Evidence engine — multi-source corroboration → a case file that holds up. Stops fabrication.", links:[{kind:"local",url:"file:///Users/hga/royalty-desk/engines/crossref",label:"royalty-desk/engines/crossref"}] },
          { label:"Factoring", sub:"advance math · IRR ledger", detail:"Advances against FILED_VERIFIED claims only. IRR math + book ledger. The number behind every offer.", links:[{kind:"local",url:"file:///Users/hga/royalty-desk/engines/factoring",label:"royalty-desk/engines/factoring"}] },
          { label:"ATLAS rates DB", sub:"228 societies · 111 countries", detail:"`engines/atlas/` — territory_rates.json, query-atlas.mjs. The rate book that lets us value a play in any territory. Feeds VRL Echo + underwriting.", links:[{kind:"local",url:"file:///Users/hga/royalty-desk/engines/atlas",label:"royalty-desk/engines/atlas"}] },
          { label:"VRL Underwriting", sub:"advance · haircut · premium", detail:"underwriting.mjs — sizes advance, term, admin %, recoupment + 5-factor risk score. Outputs writer / funder / insurer views off ONE set of numbers.", links:[{kind:"local",url:"file:///Users/hga/hampton-music/visio-publishing/master-registry",label:"visio-publishing/master-registry/underwriting.mjs"}] },
          { label:"Hermes", sub:"the agent spine · 15-min ticks", detail:"`royalty-desk/engines/orchestrator/` + Duardo agent-os. Task queue + state machine that survives restarts; risk-gated autonomous actions, logs every decision. The brain that runs admin continuously.", links:[{kind:"local",url:"file:///Users/hga/royalty-desk/engines/orchestrator",label:"royalty-desk/engines/orchestrator"}] },
          { label:"VRL Outbound", sub:"writer outreach campaigns", detail:"Royalty Desk campaigns engine — finds & contacts the writer (WhatsApp → voice → email). Dry-run default, ledgered.", links:[{kind:"local",url:"file:///Users/hga/royalty-desk/engines/campaigns",label:"royalty-desk/engines/campaigns"}] },
          { label:"Money Radar", sub:"capital / investor radar", detail:"`~/funded-radar/` — 17-cmd CLI, 2,088 investors / 1,077 emails / 1,007 signal sources. Finds the funders for the $10M facility side.", links:[{kind:"local",url:"file:///Users/hga/funded-radar",label:"~/funded-radar (local, no GitHub repo)"}] },
        ]},
        { title:"Visio — the product suite", kind:"visio", items:[
          { label:"Master Registry", sub:"per-work 6-rights matrix", detail:"`visio-publishing/master-registry/registry.mjs`. Each work × SAMRO/CAPASSO/SAMPRA/MLC/SoundExchange/Foreign → registration status + gap map + ranked claim list. 38 works live.", links:[{kind:"local",url:"file:///Users/hga/hampton-music/visio-publishing/master-registry",label:"visio-publishing/master-registry (local)"}] },
          { label:"SAMRO Reconciliation", sub:"bank vs portal = the gap", detail:"samro-reconciliation.mjs — bank (R177.5K/2mo) vs portal (R109K/3yr). The R134.5K unmatched lump = the smoking gun that proves leakage.", links:[{kind:"local",url:"file:///Users/hga/hampton-music/visio-publishing/master-registry",label:"visio-publishing/master-registry/samro-reconciliation.mjs"}] },
          { label:"Duardo / Label OS", sub:"agent-os · 78-route suite", detail:"`~/hampton-music/duardo/`. 15-primitive agent framework + Next.js Label Suite. The cockpit — every 'missing' engine already has a UI page here calling the gateway. ⚠ GitHub `lablesuite` is an EMPTY repo — the real Label OS is the local copy.", links:[{kind:"local",url:"file:///Users/hga/hampton-music/duardo",label:"~/hampton-music/duardo (the real Label OS)"},{url:"https://github.com/Iamhamptom/lablesuite",label:"lablesuite (empty placeholder)",empty:true}] },
          { label:"Visio Intel", sub:"'Bloomberg for Africa'", detail:"`visio-intel` — Apify TikTok/IG/YT/Twitter signal. LIVE (58 pages, 115 APIs). The SIGNAL stage of the virality pipeline. Repoint collectors auto→music.", links:[{url:"https://github.com/Iamhamptom/visio-intel",label:"Iamhamptom/visio-intel"}] },
          { label:"Visio Charts / Index", sub:"SA music charts", detail:"visio-charts (LIVE: Spotify+Apple+YouTube+TikTok+Shazam+Radio) + visio-index (AI Billboard). The metrics layer; needs Chartmetric to fully light.", links:[{url:"https://github.com/Iamhamptom/visio-charts",label:"Iamhamptom/visio-charts"},{url:"https://github.com/Iamhamptom/visio-index",label:"Iamhamptom/visio-index"}] },
          { label:"V-prai", sub:"lead-gen · 137 routes / 12 verticals", detail:"`visio-lead-gen-flow-2.0` (canonical, public). The TARGET engine — finds the people. Music-vertical snapshot exists. Feeds outreach + the data spine.", links:[{url:"https://github.com/Iamhamptom/visio-lead-gen-flow-2.0",label:"Iamhamptom/visio-lead-gen-flow-2.0"},{url:"https://github.com/Iamhamptom/visio-lead-gen",label:"Iamhamptom/visio-lead-gen (v1)"}] },
          { label:"VisioPitch Builder", sub:"personalised pitch · 44 routes", detail:"`VisioPitchBUilder` (canonical) + standalone v3. Builds the per-lead pitch; has a music vertical; wired to Resend.", links:[{url:"https://github.com/Iamhamptom/VisioPitchBUilder",label:"Iamhamptom/VisioPitchBUilder"},{url:"https://github.com/Iamhamptom/visiopitch-standalone",label:"Iamhamptom/visiopitch-standalone (v3)"}] },
          { label:"VisioCalls", sub:"outreach voice arm", detail:"visiocalls + visiocalls-engine (Python, ElevenLabs/Deepgram). Multilingual ZA/NG/ZW. Dialing is STUBBED — the one piece not yet live.", links:[{url:"https://github.com/Iamhamptom/visiocalls",label:"Iamhamptom/visiocalls"},{url:"https://github.com/Iamhamptom/visiocalls-engine",label:"Iamhamptom/visiocalls-engine (Python)"}] },
          { label:"Visio Artist Passport", sub:"verified data identity", detail:"`visioartistportal` — LIVE, 914-field JSONB artist vault, ElevenLabs voice, Yoco billing. The portable identity that feeds underwriting + outreach.", links:[{url:"https://github.com/Iamhamptom/visioartistportal",label:"Iamhamptom/visioartistportal"}] },
          { label:"Visio Radio (Radio Engine)", sub:"Shazam airplay data layer", detail:"visio-radio (/radio slot) — Shazam fingerprint + airplay tracking. This is the live DATA LAYER VRL Echo needs to go from estimate to measured. ⚠ No standalone repo yet — reserved slot in Duardo's visio-products gateway.", links:[{kind:"local",url:"file:///Users/hga/hampton-music/duardo/apps/web/lib",label:"slot in duardo/.../visio-products.ts (no repo yet)",empty:true}] },
          { label:"Royalty Collection", sub:"files the registrations", detail:"`~/royalty-collection/` — the execution workspace (CAPASSO mechanicals + SAMPRA needletime, forms/). Where 'file registrations THIS WEEK' actually happens.", links:[{kind:"local",url:"file:///Users/hga/royalty-collection",label:"~/royalty-collection (local)"}] },
        ]},
        { title:"3rd-party — services we rent", kind:"tp", items:[
          { label:"Chartmetric", sub:"the data spine · ~$350/mo", detail:"NOT an engine — the dependency. Gates SIGNAL, METRICS, MEASURE and half of UNDERWRITING. The single most important rented input." },
          { label:"Shazam / ACRCloud", sub:"audio fingerprint", detail:"Identifies what's actually playing on radio/TV. The ground truth VRL Echo cross-checks against what societies paid." },
          { label:"BWARM", sub:"unmatched bulk data", detail:"The MLC's bulk unmatched-works data — raw fuel for Hunter to find unclaimed money." },
          { label:"Society portals", sub:"SAMRO·CAPASSO·MLC·SoundExchange", detail:"Where statements come from and where claims/registrations get filed. The system of record we reconcile against." },
          { label:"WhatsApp API", sub:"first-contact channel", detail:"The writer's own channel — first touch in the outreach sequence before voice/email." },
          { label:"ElevenLabs", sub:"AI voice (~$30/mo)", detail:"Voice synthesis for VisioCalls + Passport. Part of the ~$430/mo infra floor." },
          { label:"Deepgram", sub:"transcription", detail:"Speech-to-text for VisioCalls — turns calls into logged, searchable records." },
          { label:"Resend", sub:"email (~$30/mo)", detail:"Outbound email rail. Live, DNC-safe (david@visiocorp.co). Powers the email leg of outreach." },
          { label:"Content ID / Rights Manager", sub:"YouTube + Meta UGC money", detail:"YouTube Content ID + Meta Rights Manager — monetize the song on user-generated content (Engine A side)." },
          { label:"Supabase + Vercel", sub:"infra floor (~$200/mo)", detail:"Database + hosting under everything. ~$100 each. 'READY' = code ready; rails stay OFF until tokens load." },
          { label:"Insurers", sub:"trade-credit + title", detail:"Trade-credit / receivables insurer + title insurer. Wrap the receivable (1.6–3% premium) → turn it into an institutional-grade asset." },
          { label:"Funder", sub:"$10M facility", detail:"The outside capital that funds advances. VRL deploys ZERO of its own — the insured receivable unlocks their money." },
          { label:"Yoco + Paystack", sub:"fan-commerce payments", detail:"Payment processing in Ciza's Palace / fan-commerce template. The cash rail when fans buy direct." },
        ]},
      ],
    },

    /* ---------- VIEW B: BY JOB (the 5-system collapse) ---------- */
    job: {
      label: "By Job",
      layout: "columns",
      blurb: "The 5-system collapse from the master map — every tool grouped by the JOB it does, coloured by owner. This is how the stack actually divides: one job, a few tools, mixed ownership. 'Outreach' is deliberately ONE engine wearing many channels, not nine engines.",
      columns: [
        { title:"1 · Artist platform & Label OS", items:[
          { kind:"visio", label:"Duardo / Label OS", sub:"the cockpit", detail:"agent-os + 78-route Label Suite — runs the artist, the roster and the agents." },
          { kind:"visio", label:"Visio Artist Passport", sub:"verified identity", detail:"914-field artist vault — the portable data identity every other system reads." },
        ]},
        { title:"2 · Discovery & underwriting", items:[
          { kind:"visio", label:"Visio Intel", sub:"signal", detail:"social + market signal — who's rising." },
          { kind:"visio", label:"V-prai", sub:"lead-gen", detail:"finds the people behind the signal." },
          { kind:"visio", label:"Visio Charts / Index", sub:"metrics", detail:"the chart + index metrics layer." },
          { kind:"visio", label:"Master Registry", sub:"gap map", detail:"per-work rights matrix → where the money is leaking." },
          { kind:"vrl",   label:"VRL Underwriting", sub:"prices it", detail:"sizes the advance off one set of numbers." },
          { kind:"tp",    label:"Chartmetric", sub:"data spine", detail:"the rented dependency under all of it." },
        ]},
        { title:"3 · Outreach (one engine, many channels)", items:[
          { kind:"visio", label:"V-prai", sub:"who to contact", detail:"the targeting layer." },
          { kind:"visio", label:"VisioPitch Builder", sub:"the pitch", detail:"per-lead personalised pitch." },
          { kind:"tp",    label:"Resend", sub:"email rail", detail:"live, DNC-safe sending." },
          { kind:"visio", label:"VisioCalls", sub:"voice arm", detail:"multilingual calling (dial stubbed)." },
          { kind:"vrl",   label:"VRL Outbound", sub:"campaign mgr", detail:"runs the wave, ledgered, dry-run default." },
        ]},
        { title:"4 · Content & virality", items:[
          { kind:"tp",    label:"Higgsfield", sub:"content gen", detail:"image/video for releases — wire API to release trigger." },
          { kind:"build", label:"Visio Clipping", sub:"clip factory", detail:"🔴 concept — no repo yet." },
          { kind:"build", label:"Song Breaker", sub:"break detection", detail:"🔴 concept — no repo yet." },
          { kind:"build", label:"TrendWars", sub:"trend engine", detail:"🔴 UI slot exists, backend unbuilt." },
        ]},
        { title:"5 · Recovery & capital", items:[
          { kind:"vrl",   label:"VRL Echo", sub:"airplay → income", detail:"finds & values the leak." },
          { kind:"visio", label:"Master Registry", sub:"the gap map", detail:"ranks the claims." },
          { kind:"vrl",   label:"Royalty Desk", sub:"finance OS", detail:"hunt → claim → factor." },
          { kind:"vrl",   label:"Money Radar", sub:"finds funders", detail:"the capital side." },
          { kind:"tp",    label:"Insurers + Funder", sub:"the capital", detail:"wrap + fund the receivable." },
        ]},
      ],
    },

    /* ---------- VIEW C: BY READINESS (what is actually real) ---------- */
    readiness: {
      label: "What's Real",
      layout: "columns",
      blurb: "The honest status, read from code not labels (2026-06-16 deep-dive). 🟢 = the code works today · 🟡 = exists but needs config/data/token · 🔴 = no repo, build from scratch · 📄 = doc/strategy only. The money engines (Engine B) are mostly green; the virality content tools are where the red is.",
      columns: [
        { title:"🟢 Ready — code works", kind:"ready", items:[
          { label:"Royalty Desk (19 engines)", sub:"runnable", detail:"hunter, matching, claims, cwr, crossref, factoring, atlas, orchestrator, statements… all 🟢." },
          { label:"Master Registry", sub:"38 works live", detail:"registry.mjs + samro-reconciliation.mjs — the gap map is real." },
          { label:"Duardo / Label OS", sub:"78 routes live", detail:"agent-os + Label Suite deployed." },
          { label:"Visio Artist Passport", sub:"deployed", detail:"visioartistportal.vercel.app — 914-field vault, live billing." },
          { label:"Visio Charts / Intel", sub:"live", detail:"charts (31 routes) + intel (58 pages, 115 APIs)." },
          { label:"VisioPitch Builder", sub:"44 routes", detail:"live, music vertical, Resend-wired." },
          { label:"Money Radar", sub:"runnable CLI", detail:"funded-radar — 2,088 investors loaded." },
          { label:"Royalty Collection", sub:"forms ready", detail:"CAPASSO + SAMPRA filing workspace." },
          { label:"Resend outreach", sub:"DNC-safe", detail:"live sending rail." },
        ]},
        { title:"🟡 Needs config / data / token", kind:"needs", items:[
          { label:"VRL Echo", sub:"L2–L3 live tracking", detail:"Built L0–L4 + REACH. Pending: live tracking, L5 claims, L6 finance, external Shazam/ACR adapters." },
          { label:"Visio Intel", sub:"repoint auto→music", detail:"engine works; collectors aimed elsewhere." },
          { label:"Visio Charts / Index", sub:"needs Chartmetric", detail:"UI built, waiting on the data spine token." },
          { label:"V-prai", sub:"repoint to music", detail:"137 routes; music snapshot exists, needs aiming." },
          { label:"VisioCalls", sub:"dialing stubbed", detail:"voice/transcribe ready, the actual dial is a stub." },
          { label:"Visio Radio (data layer)", sub:"slot reserved", detail:"the airplay data layer Echo needs — UI slot, backend unbuilt." },
          { label:"Higgsfield", sub:"wire the API", detail:"playbooks only; connect API to a release trigger." },
        ]},
        { title:"🔴 Build — no repo yet", kind:"build", items:[
          { label:"Song Breaker", sub:"concept", detail:"break-detection — idea only, no repo." },
          { label:"Visio Clipping", sub:"concept", detail:"auto clip factory — idea only." },
          { label:"TrendWars", sub:"UI slot only", detail:"front-end + gateway slot exist; backend unbuilt." },
          { label:"Visio Ads Suite", sub:"/ads slot", detail:"paid-social engine — reserved, unbuilt." },
          { label:"Visio Bookings", sub:"/bookings slot", detail:"reserved slot, no backend." },
          { label:"Account Manager / CRM", sub:"concept", detail:"multi-account social manager — concept." },
        ]},
        { title:"📄 Doc / strategy only", kind:"dock", items:[
          { label:"Paid-social amplify", sub:"AMPLIFY stage", detail:"needs Meta/TikTok ad-API wiring — plan only." },
          { label:"Engine A monetization", sub:"TEN88 + Content ID", detail:"strategy defined; pays month 3+ on the new-release slate." },
          { label:"Touchline strategy docs", sub:"MASTER_PLAN etc.", detail:"MISSION_ARCHITECTURE, ENGINE_TEARDOWN, 30DAY_MONEY_PLAN — the written spine." },
        ]},
      ],
    },

    /* ---------- VIEW D: THE TWO-ENGINE FRAME (Touchline) ---------- */
    engines: {
      label: "Two-Engine Frame",
      blurb: "Touchline's top-level split. Engine B = clean money NOW (catalogue you own, real bank data, outside the TEN88 lock). Engine A = the compounding asset (new-release slate, pays month 3+). Both sit on a shared infra floor (~$430/mo) and the Chartmetric data spine (~$350/mo).",
      canvas: [1180, 620],
      nodes: [
        { id:"eb",  x:40,  y:60,  kind:"hub",  w:300, label:"Engine B — Publishing & Airplay Recovery", sub:"CLEAN MONEY NOW", detail:"The catalogue you already own + real bank data, outside the TEN88 lock. Recovers leaked royalties today. Tools: VRL Echo + Master Registry + Royalty Desk." },
        { id:"b1",  x:40,  y:200, kind:"vrl",  w:230, label:"VRL Echo", sub:"airplay → income", detail:"Finds & values the leak, backward + forward." },
        { id:"b2",  x:40,  y:300, kind:"visio",w:230, label:"Master Registry", sub:"the gap map", detail:"Per-work rights matrix → ranked claims." },
        { id:"b3",  x:40,  y:400, kind:"vrl",  w:230, label:"Royalty Desk", sub:"finance OS", detail:"Hunt → claim → factor → fund." },

        { id:"ea",  x:840, y:60,  kind:"hub",  w:300, label:"Engine A — Streaming Virality", sub:"COMPOUNDING ASSET", detail:"The new-release slate, TEN88-locked, pays month 3+. Tools: Visio Intel → Higgsfield → V-prai → VisioPitch → ad APIs → Duardo dashboards." },
        { id:"a1",  x:910, y:200, kind:"visio",w:230, label:"Visio Intel", sub:"1 · signal", detail:"Who's rising — TikTok/IG/YT/Twitter signal." },
        { id:"a2",  x:910, y:290, kind:"tp",   w:230, label:"Higgsfield", sub:"2 · content", detail:"Image/video content factory for the release." },
        { id:"a3",  x:910, y:380, kind:"visio",w:230, label:"V-prai → VisioPitch", sub:"3–4 · target + pitch", detail:"Find the people, build the pitch, send." },
        { id:"a4",  x:910, y:470, kind:"visio",w:230, label:"Duardo dashboards", sub:"6 · measure", detail:"UTM/pixel attribution → what worked." },

        { id:"spine", x:430, y:300, kind:"warn", w:300, label:"Chartmetric — the data spine", sub:"~$350/mo · the dependency", detail:"NOT an engine. Gates SIGNAL, METRICS, MEASURE + half of UNDERWRITING across BOTH engines. Pull this and both sides go dark." },
        { id:"floor", x:430, y:470, kind:"tp",  w:300, label:"Infra floor", sub:"~$430/mo", detail:"Supabase + Vercel + ElevenLabs + Apify + Resend + Higgsfield. 'READY' = code ready; rails stay OFF until tokens load." },
      ],
      edges: [
        {from:"eb",to:"b1"},{from:"b1",to:"b2"},{from:"b2",to:"b3"},
        {from:"ea",to:"a1"},{from:"a1",to:"a2"},{from:"a2",to:"a3"},{from:"a3",to:"a4"},
        {from:"spine",to:"eb",label:"feeds",dashed:true,curve:-40},
        {from:"spine",to:"ea",label:"feeds",dashed:true,curve:40},
        {from:"floor",to:"spine",label:"runs on",dashed:true},
      ],
    },

  },
},

/* =====================================================================
   MAP 3 — VRL ECHO · the Airplay-to-Income Engine (fully mapped)
   Source: royalty-desk/engines/placement/SUPER_ENGINE_BLUEPRINT.md + README.md
   "every play echoes back" — track the echo → value it → collect it.
   ===================================================================== */
"vrl-echo": {
  title: "VRL Echo — Airplay-to-Income Engine",
  subtitle: "Type a song name → resolve → value → leak → recover/finance. Radio · TV · digital · worldwide.",
  status: "live",
  defaultView: "layers",
  views: {

    /* ---------- VIEW A: THE 8 LAYERS (the architecture) ---------- */
    layers: {
      label: "The 8 Layers",
      blurb: "One integrated system: place catalog → track it → value it honestly → recover what's leaking → finance the forecast → sell the intelligence. The pieces are worthless apart and compounding together. L0 is the foundation — everything downstream depends on a clean ID chain. Doctrine: verify the asset → fix so it can pay → prove what's leaking → move money against it. THE NUMBER gates every capital action.",
      canvas: [1300, 560],
      nodes: [
        { id:"l0", x:40,  y:60,  kind:"rail",  w:250, n:0, label:"Identity & Registration", sub:"the wedge · THE blocker", detail:"Fix + register the chain: ISRC (recording) · ISWC (work) · IPI/IPN (party) · CWR registration → across PPL · SoundExchange · MLC · SAMPRA · home PRO. A broken link = detected-but-never-paid = a registration FIX, not a claim. Everything downstream depends on this being clean first. Engines: intake + splits + registration. Deliverable: the ID-chain audit.",
          tools:[{name:"VRL Echo · idchain.mjs",t:"vrl"},{name:"Royalty Desk · intake/splits/cwr",t:"vrl"},{name:"Society portals",t:"3p"}],
          links:[{kind:"local",url:"file:///Users/hga/royalty-desk/engines/placement",label:"royalty-desk/engines/placement · ID_CHAIN_AUDIT_SPEC.md"}] },
        { id:"l1", x:330, y:60,  kind:"stage", w:250, n:1, label:"The Map (ATLAS)", sub:"where money is worth most", detail:"territory_rates.json (pockets · both-pocket flag · census/sample · weighting · back-claim window · rails · 2024 collections) + station_master (per-station fee-weight · tier · monitored_by). Output = the heat-map: rank where to place and where a spin is worth most. Status: 6 ATLAS files built + RATE_HEATMAP_SUMMARY.",
          tools:[{name:"VRL Echo · atlas.mjs/stations.mjs",t:"vrl"},{name:"ATLAS rates DB",t:"vrl"}],
          links:[{kind:"local",url:"file:///Users/hga/royalty-desk/engines/atlas",label:"royalty-desk/engines/atlas"}] },
        { id:"l2", x:620, y:60,  kind:"stage", w:250, n:2, label:"Placement", sub:"plug for equity, never pay", detail:"Target Tier-1 both-pocket census markets (Brazil ECAD, UK, DE, FR, AU, CA). Invert the plugger model: place free, take performance-share / forecast-advance of the income generated. Engines: pitch + campaigns. Compliance: NO consideration to programmers, ever (payola = 47 USC 317/508).",
          tools:[{name:"Royalty Desk · pitch/campaigns",t:"vrl"},{name:"VisioPitch Builder",t:"visio"},{name:"VisioCalls",t:"visio"}],
          links:[{kind:"local",url:"file:///Users/hga/royalty-desk/engines/pitch",label:"royalty-desk/engines/pitch + campaigns"}] },
        { id:"l3", x:910, y:60,  kind:"stage", w:250, n:3, label:"Tracking & Digital Signal", sub:"fingerprint → OUR ISRC", detail:"License Radiomonitor/BMAT/Soundcharts; match detections to OUR ISRC registry (not the broadcast-reported one). Thin self-hosted ACRCloud layer for the African long-tail stations the big vendors miss = differentiated coverage. Tag each station census/sample + 'in the PRO's distribution basis.'",
          tools:[{name:"VRL Echo · station-master",t:"vrl"},{name:"Shazam / ACRCloud",t:"3p"},{name:"Radiomonitor / BMAT",t:"3p"},{name:"Chartmetric",t:"3p"}],
          links:[{kind:"local",url:"file:///Users/hga/royalty-desk/engines/placement",label:"royalty-desk/engines/placement · DATA_SOURCES.md"}] },
        { id:"l4", x:910, y:320, kind:"stage", w:250, n:4, label:"Valuation & Detection", sub:"ranges, never invoices", detail:"Relative fee-weight model per station; calibrate unit-value BACKWARD from ≥2–3 real statements per PRO. Output = prioritized audit list + under-reporting flags (detected spins with no statement line on census stations). We do NOT sell 'you're owed exactly R X' — the pool denominator makes that uncomputable externally. Doc: OWED_ESTIMATOR_SPEC.",
          tools:[{name:"VRL Echo · estimator.mjs",t:"vrl"},{name:"ATLAS rates DB",t:"vrl"},{name:"Society statements",t:"3p"}],
          links:[{kind:"local",url:"file:///Users/hga/royalty-desk/engines/placement",label:"royalty-desk/engines/placement · OWED_ESTIMATOR_SPEC.md"}] },
        { id:"l5", x:620, y:320, kind:"stage", w:250, n:5, label:"Recovery (Claims)", sub:"before the clock", detail:"Two collectable kinds: registration-FIX (make unmatched airplay payable) + BACK-CLAIM before the clock (MLC redistribution, NR black box ~3yr, foreign rails). Route African catalog home via PPL (113 reciprocals) · Ireland PPI · SoundExchange↔SAMPRA. Engine: claims. Best money-÷-effort = Neighbouring-Rights-Africa + MLC claim-or-lose.",
          tools:[{name:"Royalty Desk · claims",t:"vrl"},{name:"Society portals + MLC + SoundExchange",t:"3p"}],
          links:[{kind:"local",url:"file:///Users/hga/royalty-desk/engines/claims",label:"royalty-desk/engines/claims"}] },
        { id:"l6", x:330, y:320, kind:"warn",  w:250, n:6, label:"Finance", sub:"⚖ LEGAL GATE", detail:"Forecast the ~6-month receivable → advance cash as a NON-RECOURSE TRUE SALE, not a loan. Do NOT advance a single rand until: written NCA/FAIS opinion + true-sale structure + the model is calibrated (L4) on that territory/PRO. SA credit-provider threshold = R0, no grace. Engine: factoring. Gate: legal sign-off + THE NUMBER.",
          tools:[{name:"Royalty Desk · factoring",t:"vrl"},{name:"VRL Underwriting",t:"vrl"},{name:"Trade-credit insurer",t:"3p"},{name:"Funder / $10M facility",t:"3p"}],
          links:[{kind:"local",url:"file:///Users/hga/royalty-desk/engines/factoring",label:"royalty-desk/engines/factoring"}] },
        { id:"l7", x:40,  y:320, kind:"good",  w:250, n:7, label:"Data Product & Monetize", sub:"the compounding moat", detail:"Sell the heat-map + gap-intel to funds/lenders (highest willingness-to-pay, zero recovery ops). Recurring re-audit subscription (one-off recovery → annuity). Engine-as-a-service / white-label to publishers who can't build it. Lead with finance margin + data, NOT recovery commission.",
          tools:[{name:"VRL Echo · data product",t:"vrl"},{name:"Money Radar · funded-radar",t:"vrl"}],
          links:[{kind:"local",url:"file:///Users/hga/royalty-desk/engines/placement",label:"royalty-desk/engines/placement · SUPER_ENGINE_BLUEPRINT.md"}] },
      ],
      edges: [
        {from:"l0",to:"l1"},{from:"l1",to:"l2"},{from:"l2",to:"l3"},
        {from:"l3",to:"l4",curve:60},
        {from:"l4",to:"l5"},{from:"l5",to:"l6"},{from:"l6",to:"l7"},
      ],
    },

    /* ---------- VIEW B: THE FLYWHEEL (the interconnected machine) ---------- */
    flywheel: {
      label: "The Flywheel",
      blurb: "VRL Echo is the data heart of an interconnected stack — each product serves the others, compounding. The moat: a multilingual AI call that says 'you're owed money, here's the proof' is a conversion mechanism no incumbent has, and it scales to thousands of owners who've never been contacted by anyone about their royalties.",
      canvas: [1240, 560],
      nodes: [
        { id:"eng",  x:60,  y:60,  kind:"hub",   w:260, label:"Super Engine", sub:"finds the money", detail:"Royalty Desk + VRL Echo find the money: leaks, gaps, placements, value. Gives the ecosystem the money map + proof; gets back catalogs to work." },
        { id:"own",  x:400, y:60,  kind:"visio", w:240, label:"V-Prai", sub:"finds the owner", detail:"Resolves WHO owns each work + their verified contact — the owner graph. Gives the ecosystem the owner graph + contacts; gets back leak signals telling it who to call first." },
        { id:"reach",x:720, y:60,  kind:"visio", w:240, label:"VisioCalls", sub:"calls in their language", detail:"REACHES them: calls + texts/WhatsApp in their LOCAL language (isiZulu, Shona, Yoruba, Swahili…) — 'you're owed money / we can fix + place your catalogue.' The conversion layer. Gives multilingual reach + conversion; gets warm targets + a script backed by real money." },
        { id:"pub",  x:980, y:230, kind:"good",  w:240, label:"VRL Publishing", sub:"signs · recovers · places", detail:"The home that signs, administers, places and recovers for them — what the whole engine feeds and serves. Gives signed catalogues + mandates; gets a pipeline of owed-money leads." },
        { id:"data", x:720, y:400, kind:"vrl",   w:240, label:"Works the catalogue", sub:"→ more data", detail:"The engine works the signed catalogue → produces more data → a better engine → finds more money. This is the loop that compounds." },
      ],
      edges: [
        {from:"eng",to:"own",label:"leak → owner"},
        {from:"own",to:"reach",label:"who to call"},
        {from:"reach",to:"pub",label:"converts → signs",curve:50},
        {from:"pub",to:"data",label:"catalogue to work"},
        {from:"data",to:"eng",label:"more data → better engine",dashed:true,curve:90},
      ],
    },

    /* ---------- VIEW C: TWO DIRECTIONS (recover + place) ---------- */
    directions: {
      label: "Two Directions",
      blurb: "VRL Echo runs both ways off the song's own data. BACKWARD = recover what already leaked. FORWARD = aim where to place + market it next. Same airplay data becomes a targeting map, not just a recovery ledger — which is why it feeds the Touchline pipeline's SIGNAL + TARGET stages.",
      canvas: [1240, 620],
      nodes: [
        { id:"song", x:480, y:30,  kind:"hub",  w:280, label:"The Song", sub:"type a name → resolve", detail:"Front door: type a song name → resolve → fan-out → assemble dossier. From here the engine looks both backward (recover) and forward (place + market)." },
        { id:"bk1", x:120, y:190, kind:"stage", w:260, label:"Where it already played", sub:"backward · recover", detail:"Tracking + fingerprint → every detection of the song on radio/TV/digital, matched to OUR ISRC registry." },
        { id:"bk2", x:120, y:300, kind:"stage", w:260, label:"What it earned", sub:"valuation", detail:"Relative fee-weight model → a value RANGE, calibrated backward from real PRO statements." },
        { id:"bk3", x:120, y:410, kind:"warn",  w:260, label:"What's leaking", sub:"under-reporting flags", detail:"Detected spins with no matching statement line = the leak. Plus registration-fix gaps where airplay can't match a clean chain." },
        { id:"bk4", x:120, y:520, kind:"good",  w:260, label:"Claim / finance it", sub:"recover", detail:"Registration-fix + back-claim before the clock → recovered royalties; then (behind the legal gate) advance against the forecast." },
        { id:"fw1", x:860, y:190, kind:"visio", w:260, label:"Where to PLACE it", sub:"forward · place", detail:"Reads the song's own data — hot stations/territories, two-pocket value per market → tells you which stations/playlists/territories will pay AND fit." },
        { id:"fw2", x:860, y:300, kind:"visio", w:260, label:"Where to MARKET it", sub:"spend smart", detail:"Which markets to spend on for best return — the airplay/usage data as a targeting map for ad + plugging budget." },
        { id:"fw3", x:860, y:410, kind:"good",  w:260, label:"Feeds SIGNAL + TARGET", sub:"into the pipeline", detail:"The forward read plugs straight into the Touchline virality pipeline's SIGNAL + TARGET stages — recovery and growth off one data spine." },
      ],
      edges: [
        {from:"song",to:"bk1",label:"backward",curve:-40},
        {from:"bk1",to:"bk2"},{from:"bk2",to:"bk3"},{from:"bk3",to:"bk4"},
        {from:"song",to:"fw1",label:"forward",curve:40},
        {from:"fw1",to:"fw2"},{from:"fw2",to:"fw3"},
      ],
    },

    /* ---------- VIEW D: MODULES & BUILD STATUS ---------- */
    modules: {
      label: "Modules & Status",
      layout: "columns",
      blurb: "What's actually wired in code vs what's pending. Built: L0 (idchain), L1 (atlas+stations), L4 (estimator), REACH brief (outreach), front door (dossier). Pending external connectivity / capital / legal: L2 live placement, L3 live tracking, L5 claims, L6 finance, L7 data product. RULE #1: plug, never pay. No fabrication — empty/unknown beats invented.",
      columns: [
        { title:"🟢 Built — code wired", kind:"ready", items:[
          { label:"lib/idchain.mjs", sub:"L0 · leak report", detail:"catalog → leak report (REGISTRATION-FIX vs BACK-CLAIM), prioritized." },
          { label:"lib/atlas.mjs", sub:"L1 · the map", detail:"load territory_rates.json; pocket multiplier, both-pocket list, claim windows." },
          { label:"lib/stations.mjs", sub:"L1 · station master", detail:"load + validate station master; ATLAS-enrich; relative fee-weight." },
          { label:"lib/estimator.mjs", sub:"L4 · valuation", detail:"spins × weights × share → value RANGE in relative units; census=recoverable, sample=illustrative." },
          { label:"lib/dossier.mjs", sub:"front door", detail:"name → resolve → fan-out (adapters stubbed) → assemble dossier incl. reach brief." },
          { label:"lib/outreach.mjs", sub:"REACH (L2)", detail:"resolved owner + leak → VisioCalls call/text brief + script in local language; claim_alert vs onboarding. Dial STUBBED." },
          { label:"run-placement.mjs", sub:"CLI", detail:"status / audit / estimate / dossier / all. `npm run placement`." },
          { label:"CLIs", sub:"5 entry points", detail:"id-chain-audit · owed-estimator · song-dossier · station-master · send-brief." },
        ]},
        { title:"🟡 Pending — needs data / adapters", kind:"needs", items:[
          { label:"L3 Live Tracking", sub:"fingerprint feed", detail:"License Radiomonitor/BMAT/Soundcharts + thin ACRCloud for African long-tail. Match to our ISRC registry." },
          { label:"Shazam / ACRCloud adapter", sub:"digital signal", detail:"The audio-fingerprint adapter — currently a stub in the dossier fan-out." },
          { label:"V-Prai owner adapter", sub:"who owns it", detail:"Live owner-graph lookup — stubbed; wires per DIGITAL_AND_OWNER_LAYER.md." },
          { label:"VisioCalls live dial", sub:"the conversion layer", detail:"Brief generator is built; the actual dial/text needs visiocalls-engine API + key wired." },
          { label:"L2 Live Placement", sub:"plug for equity", detail:"pitch + campaigns engines exist; live placement at Tier-1 markets pending." },
          { label:"Estimator calibration", sub:"unit → currency", detail:"Relative units until anchored to ≥2–3 real PRO statements. No currency before calibration." },
        ]},
        { title:"⚖ Pending — capital & legal gate", kind:"build", items:[
          { label:"L5 Claims filing", sub:"recovery", detail:"Registration-fix + back-claim sequence across MLC / NR black-box / foreign rails. Per-writer POA mandates." },
          { label:"L6 Finance", sub:"⚖ NCA/FAIS gate", detail:"Non-recourse true-sale advance. NO rand advanced until written legal opinion + true-sale structure + calibrated model." },
          { label:"L7 Data Product", sub:"sell the intel", detail:"Heat-map / gap-intel to funds + recurring re-audit subscription + white-label. The compounding moat." },
        ]},
      ],
    },

  },
},

/* =====================================================================
   MAP 4 — THE MUSIC BUILD-UP ENGINE (the whole machine, end to end)
   Source: MUSIC_STACK_TOOL_MAP.md §0/§6 + VRL Echo blueprint + Touchline docs.
   How a song/artist is built up through the machine — virality + recovery.
   ===================================================================== */
"music-engine": {
  title: "The Music Build-Up Engine",
  subtitle: "Artist + song IN → built up through both engines → money OUT, compounding",
  status: "live",
  defaultView: "machine",
  views: {

    /* ---------- VIEW A: THE MACHINE (two-track end-to-end) ---------- */
    machine: {
      label: "The Machine",
      blurb: "The whole machine, two tracks off one input. TOP = Engine A (Streaming Virality) — the build-up that compounds, pays month 3+. BOTTOM = Engine B (Publishing & Airplay Recovery) — clean money NOW off catalogue you already own. Both land in the same money + grow the artist, which funds the next cycle.",
      canvas: [1760, 540],
      nodes: [
        { id:"in",  x:30,  y:200, kind:"hub",   w:170, label:"Artist + Song", sub:"the input", detail:"The entry point. A new release feeds Engine A (build-up) and/or an existing catalogue feeds Engine B (recovery) — the same artist runs both tracks at once, which is the whole point of building on one stack.",
          meta:[
            {k:"What enters",v:"A release (masters + metadata) and/or a catalogue of existing works the artist already owns."},
            {k:"Where it lives",v:"The artist's data sits in Visio Artist Passport — a 914-field vault that every downstream engine reads."},
            {k:"Status",v:"🟢 Passport live (visioartistportal.vercel.app)."},
            {k:"Feeds",v:"Both tracks simultaneously — Signal (A) + Recover (B)."},
          ],
          tools:[{name:"Visio Artist Passport",t:"visio"},{name:"Duardo · Label OS",t:"visio"}],
          links:[{url:"https://github.com/Iamhamptom/visioartistportal",label:"Iamhamptom/visioartistportal"}] },

        { id:"a1",  x:250, y:40,  kind:"visio", w:180, n:1, label:"Signal", sub:"Visio Intel", detail:"Scrapes TikTok / Instagram / YouTube / Twitter + chart movement to spot who and what is rising before it's obvious. This is the SIGNAL stage — the radar that aims everything downstream.",
          meta:[
            {k:"What it does",v:"Apify-powered social + chart signal on the Chartmetric data spine → ranked rising tracks/artists."},
            {k:"Where / repo",v:"`visio-intel` — 'Bloomberg for Africa'. LIVE: 58 pages, 115 APIs."},
            {k:"Status",v:"🟡 engine live; collectors aimed broad — repoint auto→music."},
            {k:"Feeds",v:"Target (who to contact) + tells Content what to make + Measure compares against it."},
          ],
          tools:[{name:"Visio Intel",t:"visio"},{name:"Visio Charts / Index",t:"visio"},{name:"Chartmetric",t:"3p"},{name:"Apify",t:"3p"}],
          links:[{url:"https://github.com/Iamhamptom/visio-intel",label:"Iamhamptom/visio-intel"},{url:"https://github.com/Iamhamptom/visio-charts",label:"Iamhamptom/visio-charts"}] },
        { id:"a2",  x:470, y:40,  kind:"tp",    w:180, n:2, label:"Content", sub:"Higgsfield", detail:"Turns one release into a 30-clip content factory — hooks, behind-the-scenes, lyric cuts, challenge clips, ad creative — image + video, on demand.",
          meta:[
            {k:"What it does",v:"AI image/video generation for the release: the 30-clip factory (Hook / BTS / Lyric / Challenge / Ad)."},
            {k:"Where",v:"Higgsfield — playbooks + prompt decks built (e.g. the EP1 Higgsfield prompt deck)."},
            {k:"Status",v:"🔴/🟡 API wiring pending — connect Higgsfield API to the release trigger in Duardo."},
            {k:"Feeds",v:"The creative Amplify spends behind + the assets the Pitch attaches."},
          ],
          tools:[{name:"Higgsfield",t:"3p"},{name:"Duardo · Label OS",t:"visio"}],
          links:[{kind:"local",url:"file:///Users/hga/hampton-music/duardo",label:"trigger lives in ~/hampton-music/duardo"}] },
        { id:"a3",  x:690, y:40,  kind:"visio", w:180, n:3, label:"Target", sub:"V-prai", detail:"Lead-gen finds the actual humans to reach — playlist curators, radio programmers, DJs, press, sync supervisors — and attaches a hook to each.",
          meta:[
            {k:"What it does",v:"Resolves WHO to contact for this release + their verified contact, with a per-target hook."},
            {k:"Where / repo",v:"`visio-lead-gen-flow-2.0` (canonical, public) — 137 routes, 12 verticals; music-vertical snapshot exists."},
            {k:"Status",v:"🟡 engine live — repoint collectors to music."},
            {k:"Feeds",v:"A contact list straight into Pitch + Outreach."},
          ],
          tools:[{name:"V-prai · lead-gen",t:"visio"},{name:"Chartmetric",t:"3p"}],
          links:[{url:"https://github.com/Iamhamptom/visio-lead-gen-flow-2.0",label:"Iamhamptom/visio-lead-gen-flow-2.0"}] },
        { id:"a4",  x:910, y:40,  kind:"visio", w:180, n:4, label:"Pitch + Outreach", sub:"VisioPitch · Resend · VisioCalls", detail:"Builds a personalised pitch per lead, then sends it across channels — email plus multilingual voice / WhatsApp. One engine wearing many channels, not nine engines.",
          meta:[
            {k:"What it does",v:"Per-lead pitch (VisioPitch) dispatched via Resend (email) + VisioCalls (voice in the target's own language)."},
            {k:"Where / repos",v:"`VisioPitchBUilder` (44 routes) + `visiocalls` / `visiocalls-engine`; Resend live (DNC-safe)."},
            {k:"Status",v:"🟢 pitch + email live; 🟡 VisioCalls dial stubbed."},
            {k:"Feeds",v:"Replies + bookings into Measure; warm relationships for the next release."},
          ],
          tools:[{name:"VisioPitch Builder",t:"visio"},{name:"VisioCalls",t:"visio"},{name:"Resend (email)",t:"3p"},{name:"WhatsApp API",t:"3p"},{name:"ElevenLabs (voice)",t:"3p"}],
          links:[{url:"https://github.com/Iamhamptom/VisioPitchBUilder",label:"Iamhamptom/VisioPitchBUilder"},{url:"https://github.com/Iamhamptom/visiocalls",label:"Iamhamptom/visiocalls"}] },
        { id:"a5",  x:1130,y:40,  kind:"stage", w:180, n:5, label:"Amplify", sub:"paid social", detail:"Puts ad spend behind the content that's ALREADY proving itself organically — never cold. Amplify what's working, kill what isn't.",
          meta:[
            {k:"What it does",v:"Meta / TikTok ad campaigns aimed at the creative + markets the organic signal validated."},
            {k:"Where",v:"Campaign records in Duardo `hm_digital_campaigns`; ad APIs to be wired."},
            {k:"Status",v:"📄 strategy + data model exist; ad-API wiring pending."},
            {k:"Feeds",v:"Scaled reach → Measure → recycled into Signal."},
          ],
          tools:[{name:"Duardo · Label OS",t:"visio"},{name:"Meta / TikTok Ads",t:"3p"}],
          links:[{kind:"local",url:"file:///Users/hga/hampton-music/duardo",label:"campaigns in ~/hampton-music/duardo"}] },
        { id:"a6",  x:1350,y:40,  kind:"visio", w:180, n:6, label:"Measure", sub:"Duardo dashboards", detail:"Closes the loop — UTM / pixel attribution plus chart movement tells you which clip, channel and market actually worked, so the next cycle spends smarter.",
          meta:[
            {k:"What it does",v:"Attribution: UTM + pixel + chart deltas → what drove the result."},
            {k:"Where / repo",v:"Duardo dashboards + `visio-charts` / `visio-index`."},
            {k:"Status",v:"🟡 dashboards live; needs the Chartmetric spine + pixel wiring for full attribution."},
            {k:"Feeds",v:"Sharper Signal + smarter Amplify spend next cycle."},
          ],
          tools:[{name:"Duardo · Label OS",t:"visio"},{name:"Visio Charts / Index",t:"visio"},{name:"Chartmetric",t:"3p"}],
          links:[{url:"https://github.com/Iamhamptom/visio-charts",label:"Iamhamptom/visio-charts"},{url:"https://github.com/Iamhamptom/visio-index",label:"Iamhamptom/visio-index"}] },

        { id:"b1",  x:250, y:360, kind:"vrl",   w:180, label:"Recover", sub:"VRL Echo", detail:"Type the song → VRL Echo finds every place it played, what it earned, and what's leaking — and reads forward to where it should be placed and marketed next. The full 8-layer engine has its own map.",
          meta:[
            {k:"What it does",v:"Airplay → income: backward recovery (what leaked) + forward placement (where to aim)."},
            {k:"Where",v:"`royalty-desk/engines/placement/` — see the dedicated 'VRL Echo' map for all 8 layers."},
            {k:"Status",v:"🟡 L0/L1/L4/REACH built; live tracking + claims/finance pending."},
            {k:"Feeds",v:"Leak list → Gap map; placement targets → Signal/Target."},
          ],
          tools:[{name:"VRL Echo",t:"vrl"},{name:"ATLAS rates DB",t:"vrl"},{name:"Shazam / ACRCloud",t:"3p"}],
          links:[{kind:"local",url:"file:///Users/hga/royalty-desk/engines/placement",label:"royalty-desk/engines/placement"}] },
        { id:"b2",  x:470, y:360, kind:"visio", w:180, label:"Gap map", sub:"Master Registry", detail:"Maps each work across all six rights everywhere → registration status + a ranked list of what's unclaimed. The bank-vs-portal gap is the proof the money is leaking.",
          meta:[
            {k:"What it does",v:"Per-work × 6-rights matrix (SAMRO/CAPASSO/SAMPRA/MLC/SoundExchange/Foreign) → gap map + ranked claims."},
            {k:"Where",v:"`visio-publishing/master-registry/registry.mjs` + samro-reconciliation.mjs."},
            {k:"Status",v:"🟢 38 works live, 222 open claims; R134.5K unmatched lump proven."},
            {k:"Feeds",v:"The ranked claim list into Claim + Factor."},
          ],
          tools:[{name:"Master Registry · registry.mjs",t:"visio"},{name:"SAMRO Reconciliation",t:"visio"},{name:"Society portals",t:"3p"}],
          links:[{kind:"local",url:"file:///Users/hga/hampton-music/visio-publishing/master-registry",label:"visio-publishing/master-registry"}] },
        { id:"b3",  x:690, y:360, kind:"vrl",   w:180, label:"Claim + Factor", sub:"Royalty Desk", detail:"Builds the claim packages (MLC + multi-society) and prices an advance against the verified claims — turning a recovered-money forecast into cash today.",
          meta:[
            {k:"What it does",v:"Claims packaging + factoring: advance math (IRR, book ledger) against FILED_VERIFIED claims only."},
            {k:"Where",v:"`~/royalty-desk/` engines: claims · cwr · crossref · factoring."},
            {k:"Status",v:"🟢 engines runnable; factoring gated to verified claims; finance behind NCA/FAIS."},
            {k:"Feeds",v:"Filed claims → recovered royalties; priced advances → Monetize."},
          ],
          tools:[{name:"Royalty Desk · claims/factoring",t:"vrl"},{name:"ATLAS rates DB",t:"vrl"}],
          links:[{kind:"local",url:"file:///Users/hga/royalty-desk",label:"~/royalty-desk (local, no GitHub repo)"}] },
        { id:"b4",  x:910, y:360, kind:"vrl",   w:180, label:"Route home", sub:"NR / MLC rails", detail:"Routes the African catalogue's foreign-earned money home and back-claims it before the forfeiture clock runs out — the highest money-per-effort recovery lane.",
          meta:[
            {k:"What it does",v:"Neighbouring-rights + mechanical recovery via foreign rails + back-claim before the clock."},
            {k:"Where",v:"PPL (113 reciprocals) · Ireland PPI · SoundExchange↔SAMPRA; AFRICA_NR_PLAYBOOK."},
            {k:"Status",v:"🟡 rails mapped; per-writer POA mandates needed to file."},
            {k:"Feeds",v:"Recovered NR + mechanical money → Monetize."},
          ],
          tools:[{name:"Royalty Desk · claims",t:"vrl"},{name:"Society portals + MLC + SoundExchange",t:"3p"}],
          links:[{kind:"local",url:"file:///Users/hga/royalty-desk/engines/placement",label:"royalty-desk · AFRICA_NR_PLAYBOOK.md"}] },

        { id:"mon", x:1350,y:230, kind:"good",  w:180, label:"Monetize", sub:"TEN88 · Content ID · royalties", detail:"Where both tracks convert to cash — streaming, distribution and Content-ID money on the build-up side; recovered royalties and advances on the recovery side.",
          meta:[
            {k:"What it does",v:"Engine A: streaming + TEN88 distro + YouTube/Meta Content ID on UGC. Engine B: recovered royalties + non-recourse advances."},
            {k:"Where",v:"TEN88 distribution JV + Content ID; controlled collection account for recovery."},
            {k:"Status",v:"🟢 Engine B collecting now; 🟡 Engine A pays month 3+ on the new slate."},
            {k:"Feeds",v:"Money → grow."},
          ],
          tools:[{name:"Royalty Desk · factoring",t:"vrl"},{name:"YouTube Content ID",t:"3p"},{name:"Meta Rights Manager",t:"3p"},{name:"Bank / EFT transfer",t:"3p"}] },
        { id:"money",x:1580,y:200, kind:"good", w:160, label:"Money → grow", sub:"funds next cycle", detail:"Cash plus a bigger, data-richer artist funds the next release slate and the next recovery book — at lower cost each turn, because the audience and the data already exist. This is the compounding loop.",
          meta:[
            {k:"What it does",v:"Reinvests proceeds into the next cycle; the artist + dataset are the compounding asset."},
            {k:"Where",v:"Money Radar finds the funders for the capital side of the loop."},
            {k:"Status",v:"The strategic reason to run both engines on one artist."},
            {k:"Feeds",v:"Back to Artist + Song (the dashed loop)."},
          ],
          tools:[{name:"Money Radar · funded-radar",t:"vrl"},{name:"Funder / $10M facility",t:"3p"}],
          links:[{kind:"local",url:"file:///Users/hga/funded-radar",label:"~/funded-radar (local)"}] },
      ],
      edges: [
        {from:"in",to:"a1"},{from:"a1",to:"a2"},{from:"a2",to:"a3"},{from:"a3",to:"a4"},{from:"a4",to:"a5"},{from:"a5",to:"a6"},
        {from:"a6",to:"mon",curve:60},
        {from:"in",to:"b1"},{from:"b1",to:"b2"},{from:"b2",to:"b3"},{from:"b3",to:"b4"},
        {from:"b4",to:"mon",curve:-60},
        {from:"mon",to:"money"},
        {from:"money",to:"in",label:"compounds",dashed:true,curve:-220},
      ],
    },

    /* ---------- VIEW B: STAGE BY STAGE (the pipeline detail) ---------- */
    stages: {
      label: "Stage by Stage",
      layout: "columns",
      blurb: "Every stage, what engine runs it, and its status — grouped by the two engines + the shared monetize layer. This is the §6 pipeline table from the master tool map, made navigable. Engine B (recovery) is mostly green; Engine A's content + amplify stages are where the build work is.",
      columns: [
        { title:"Engine A — Streaming Virality (build-up)", items:[
          { kind:"visio", label:"1 · Signal", sub:"Visio Intel + Charts", detail:"Social + chart signal on the Chartmetric spine spots who/what is rising. Engine is LIVE (58 pages, 115 APIs); collectors are aimed broad — the job is to repoint them auto→music.", tools:[{name:"Visio Intel",t:"visio"},{name:"Visio Charts / Index",t:"visio"},{name:"Chartmetric",t:"3p"}], links:[{url:"https://github.com/Iamhamptom/visio-intel",label:"Iamhamptom/visio-intel"}] },
          { kind:"tp",    label:"2 · Content", sub:"Higgsfield", detail:"The 30-clip content factory (Hook/BTS/Lyric/Challenge/Ad) for each release. Playbooks + prompt decks exist; the build task is wiring the Higgsfield API to the release trigger in Duardo.", tools:[{name:"Higgsfield",t:"3p"},{name:"Duardo · Label OS",t:"visio"}], links:[{kind:"local",url:"file:///Users/hga/hampton-music/duardo",label:"trigger in ~/hampton-music/duardo"}] },
          { kind:"visio", label:"3 · Target", sub:"V-prai", detail:"Lead-gen finds the people — playlisters, radio, DJs, press, sync — with a per-target hook. 137 routes, 12 verticals; music snapshot exists, repoint to music.", tools:[{name:"V-prai · lead-gen",t:"visio"}], links:[{url:"https://github.com/Iamhamptom/visio-lead-gen-flow-2.0",label:"Iamhamptom/visio-lead-gen-flow-2.0"}] },
          { kind:"visio", label:"4 · Seed / Pitch", sub:"VisioPitch + Resend", detail:"Per-lead personalised pitch (44 routes) sent over a live, DNC-safe email rail. 🟢 both live and music-ready.", tools:[{name:"VisioPitch Builder",t:"visio"},{name:"Resend (email)",t:"3p"}], links:[{url:"https://github.com/Iamhamptom/VisioPitchBUilder",label:"Iamhamptom/VisioPitchBUilder"}] },
          { kind:"visio", label:"4 · Voice", sub:"VisioCalls", detail:"Multilingual voice/WhatsApp outreach (ZA/NG/ZW) — the conversion layer. Brief + script generation built; the actual dial is stubbed pending the visiocalls-engine key.", tools:[{name:"VisioCalls",t:"visio"},{name:"ElevenLabs (voice)",t:"3p"},{name:"Deepgram (transcribe)",t:"3p"}], links:[{url:"https://github.com/Iamhamptom/visiocalls",label:"Iamhamptom/visiocalls"},{url:"https://github.com/Iamhamptom/visiocalls-engine",label:"Iamhamptom/visiocalls-engine"}] },
          { kind:"stage", label:"5 · Amplify", sub:"paid social", detail:"Ad spend behind the content that's already proving organic — never cold. 📄 strategy + the `hm_digital_campaigns` data model exist; Meta/TikTok ad-API wiring pending.", tools:[{name:"Duardo · Label OS",t:"visio"},{name:"Meta / TikTok Ads",t:"3p"}], links:[{kind:"local",url:"file:///Users/hga/hampton-music/duardo",label:"campaigns in ~/hampton-music/duardo"}] },
          { kind:"visio", label:"6 · Measure", sub:"Duardo dashboards", detail:"UTM/pixel attribution + chart deltas → what actually worked, fed back into Signal. 🟡 dashboards live; needs the Chartmetric spine + pixel wiring for full attribution.", tools:[{name:"Duardo · Label OS",t:"visio"},{name:"Visio Charts / Index",t:"visio"},{name:"Chartmetric",t:"3p"}], links:[{url:"https://github.com/Iamhamptom/visio-charts",label:"Iamhamptom/visio-charts"}] },
        ]},
        { title:"Engine B — Publishing & Airplay Recovery (now)", items:[
          { kind:"vrl",   label:"Recover", sub:"VRL Echo", detail:"Airplay→income: find where a song played, what it earned, what's leaking — plus where to place/market it next. 🟡 L0/L1/L4/REACH built. (Full 8-layer detail = the VRL Echo map.)", tools:[{name:"VRL Echo",t:"vrl"},{name:"ATLAS rates DB",t:"vrl"},{name:"Shazam / ACRCloud",t:"3p"}], links:[{kind:"local",url:"file:///Users/hga/royalty-desk/engines/placement",label:"royalty-desk/engines/placement"}] },
          { kind:"visio", label:"Gap map", sub:"Master Registry", detail:"Per-work × 6-rights matrix → registration status + ranked claims. 🟢 38 works live, 222 open claims; R134.5K unmatched lump proven by the bank-vs-portal reconciliation.", tools:[{name:"Master Registry · registry.mjs",t:"visio"},{name:"SAMRO Reconciliation",t:"visio"},{name:"Society portals",t:"3p"}], links:[{kind:"local",url:"file:///Users/hga/hampton-music/visio-publishing/master-registry",label:"visio-publishing/master-registry"}] },
          { kind:"vrl",   label:"Claim", sub:"Royalty Desk · claims", detail:"MLC sprint + multi-society claim-package generator — turns a registry gap into a filable pack. 🟢 runnable.", tools:[{name:"Royalty Desk · claims/cwr",t:"vrl"},{name:"Society portals + MLC + SoundExchange",t:"3p"}], links:[{kind:"local",url:"file:///Users/hga/royalty-desk/engines/claims",label:"royalty-desk/engines/claims"}] },
          { kind:"vrl",   label:"Factor", sub:"Royalty Desk · factoring", detail:"Advance against FILED_VERIFIED claims only — IRR math + book ledger. 🟢 runnable; capital deployment behind the NCA/FAIS legal gate.", tools:[{name:"Royalty Desk · factoring",t:"vrl"},{name:"Funder / $10M facility",t:"3p"}], links:[{kind:"local",url:"file:///Users/hga/royalty-desk/engines/factoring",label:"royalty-desk/engines/factoring"}] },
          { kind:"visio", label:"File", sub:"Royalty Collection", detail:"The execution workspace where registrations actually get filed — CAPASSO mechanicals + SAMPRA needletime, step-by-step + forms. 🟢 ready.", tools:[{name:"Royalty Collection · forms",t:"visio"},{name:"Society portals",t:"3p"}], links:[{kind:"local",url:"file:///Users/hga/royalty-collection",label:"~/royalty-collection"}] },
        ]},
        { title:"Monetize (shared) + the loop", items:[
          { kind:"good",  label:"7 · Monetize A", sub:"TEN88 + Content ID", detail:"Build-up side converts: streaming + TEN88 distribution JV + YouTube/Meta Content ID on user-generated content. 🟢/🟡 pays month 3+ on the new slate.", tools:[{name:"YouTube Content ID",t:"3p"},{name:"Meta Rights Manager",t:"3p"},{name:"Bank / EFT transfer",t:"3p"}] },
          { kind:"good",  label:"7 · Monetize B", sub:"royalties + advances", detail:"Recovery side converts: recovered royalties land in the controlled account + non-recourse advances against verified claims. 🟢 collecting now.", tools:[{name:"Royalty Desk · factoring",t:"vrl"},{name:"Bank / EFT transfer",t:"3p"}] },
          { kind:"hub",   label:"Grow the artist", sub:"audience + data", detail:"A bigger artist + a richer dataset — real human demand the algorithm can't fake. This is the asset that compounds across cycles.", tools:[{name:"Visio Artist Passport",t:"visio"},{name:"Duardo · Label OS",t:"visio"}], links:[{url:"https://github.com/Iamhamptom/visioartistportal",label:"Iamhamptom/visioartistportal"}] },
          { kind:"hub",   label:"Fund next cycle", sub:"reinvest", detail:"Cash funds the next release slate + the next recovery book — at lower cost because audience + data already exist. Money Radar finds the capital.", tools:[{name:"Money Radar · funded-radar",t:"vrl"},{name:"Funder / $10M facility",t:"3p"}], links:[{kind:"local",url:"file:///Users/hga/funded-radar",label:"~/funded-radar"}] },
        ]},
      ],
    },

    /* ---------- VIEW C: THE FLYWHEEL (why it compounds) ---------- */
    flywheel: {
      label: "Why It Compounds",
      blurb: "The reason to run both engines off one stack: every turn makes the next turn cheaper and bigger. Recovery funds the build-up; the build-up generates the plays that recovery values; the data from both sharpens the targeting. One artist, one data spine, two revenue lines feeding each other.",
      canvas: [1240, 560],
      nodes: [
        { id:"r1", x:60,  y:60,  kind:"stage", w:260, label:"Release + work the catalogue", sub:"both engines run", detail:"A new release (Engine A) and the existing catalogue (Engine B) both move through the machine on the same artist." },
        { id:"r2", x:420, y:60,  kind:"visio", w:240, label:"More plays + signal data", sub:"the asset grows", detail:"Streams, airplay, social signal — real human demand the algorithm can't fake. Every play is also a data point." },
        { id:"r3", x:740, y:60,  kind:"vrl",   w:240, label:"Better targeting + valuation", sub:"sharper engine", detail:"More data → VRL Echo values plays more precisely + Visio Intel/V-prai target spend better. The engine gets smarter." },
        { id:"r4", x:1000,y:230, kind:"good",  w:240, label:"More money", sub:"stream + recovered", detail:"Two revenue lines off one artist: streaming/virality income (Engine A) + recovered royalties & advances (Engine B)." },
        { id:"r5", x:740, y:400, kind:"hub",   w:240, label:"Fund the next releases", sub:"reinvest", detail:"Cash funds the next slate + the next recovery book — at lower cost because the data + audience already exist." },
      ],
      edges: [
        {from:"r1",to:"r2",label:"plays → data"},
        {from:"r2",to:"r3",label:"data → sharper"},
        {from:"r3",to:"r4",label:"sharper → more $",curve:50},
        {from:"r4",to:"r5",label:"reinvest"},
        {from:"r5",to:"r1",label:"cheaper · bigger",dashed:true,curve:90},
      ],
    },

  },
},

/* =====================================================================
   PLACEHOLDERS — your next maps. Fill the views and they light up.
   ===================================================================== */
"strategy-visio": {
  title: "Strategy Visio — Capital Flywheel",
  subtitle: "Tony cash → Touchline raise → automated releases → Congo tour → VRL Bay",
  status: "stub",
  defaultView: "flow",
  views: {
    flow: {
      label: "Flywheel",
      blurb: "Stub — say the word and I'll build this from your STRATEGY_VISIO master motion plan.",
      canvas: [900, 360],
      nodes: [
        { id:"s1", x:40,  y:140, kind:"step", label:"Tony cash", sub:"~R520K · no gate", detail:"July cash, ungated. Starts the flywheel." },
        { id:"s2", x:280, y:140, kind:"step", label:"Touchline raise", sub:"~$130K", detail:"TEN88 $50K + Platoon $25K + Believe $50K + Duetti $5K." },
        { id:"s3", x:520, y:140, kind:"step", label:"10 releases/mo", sub:"automation proof", detail:"Vukile / Teddy James / Pink Fur." },
        { id:"s4", x:760, y:60,  kind:"step", label:"Congo tour", sub:"$260K–630K", detail:"7-city workshop tour ZW→DRC→Tanzania→Cape Verde→Angola." },
        { id:"s5", x:760, y:230, kind:"good", label:"VRL Bay", sub:"parallel", detail:"Rent ZEISS, run in parallel." },
      ],
      edges: [{from:"s1",to:"s2"},{from:"s2",to:"s3"},{from:"s3",to:"s4"},{from:"s3",to:"s5"}],
    },
  },
},

};
