// AIAI "Build With Us" — Sector Templates (Phase 1 MVP)
// Embedded JS data for instant client-side rendering. No fetch, no backend.

window.AIAI_SECTORS = {
  construction: {
    id: "construction",
    label: "Construction",
    hero: {
      headline: "your AI team is ready to build alongside you.",
      subhead: "Construction businesses in the UK are losing £1.5bn annually to project delays, compliance gaps, and rework. Here's what an AI team could do for yours."
    },
    problem: {
      external: "You're juggling project schedules, safety compliance, site reporting, and supplier coordination — often with fewer people than the job demands.",
      internal: "Every hour spent on manual reporting is an hour not spent on site. Every missed compliance check is a risk. Every delayed decision costs money.",
      philosophical: "You shouldn't need a data science degree to run a smarter site."
    },
    guide: "You don't need to become an AI expert. Adventures in AI helps construction businesses identify the highest-impact opportunities and implement them step by step — starting from where you are, not from some idealised future state.",
    stakes: {
      failure: "Without a clear plan, you risk falling further behind on productivity, safety compliance, and project margins — while competitors who've adopted AI move faster and cheaper.",
      success: "In 90 days, you could be saving 10+ hours/week on reporting, reducing safety incidents by automated monitoring, and catching cost overruns before they escalate."
    },
    painPoints: {
      "scheduling-delays": {
        label: "Scheduling & project delays",
        solution: "AI-driven schedule optimisation uses your historical project data to flag bottlenecks before they happen — so you're reallocating resources proactively, not reacting after the fact."
      },
      "safety-compliance": {
        label: "Safety & compliance reporting",
        solution: "Computer vision can monitor site photos for PPE compliance, hazard detection, and progress verification — reducing the reporting burden while improving safety outcomes."
      },
      "supply-chain": {
        label: "Supply chain disruption",
        solution: "Predictive alerts on material availability and pricing changes let you adjust orders before delays cascade through your project."
      },
      "site-reporting": {
        label: "Site reporting burden",
        solution: "Photo-to-report automation turns daily site walks into structured progress reports, safety logs, and compliance records — without the admin."
      },
      "cost-overruns": {
        label: "Cost overruns",
        solution: "Predictive cost forecasting based on live supplier pricing and project stage helps you spot overruns weeks before they become crises."
      }
    },
    planIntro: {
      none: "Starting from scratch? Perfect. We begin with a discovery audit and implement one focused tool that pays for itself.",
      minimal: "You've dipped a toe in. We'll identify what's working, fix what isn't, and add the next highest-impact capability.",
      some: "You're already using AI in places. We'll optimise what you have, connect the gaps, and build a coherent system.",
      heavy: "You've invested significantly. We'll audit your stack, eliminate redundancy, and ensure every tool is earning its place."
    },
    planSteps: {
      none: [
        { title: "Discovery (2 weeks)", desc: "Audit your data, systems, and team readiness. Identify your single highest-ROI opportunity." },
        { title: "Pilot (4 weeks)", desc: "Implement one focused AI tool (e.g., automated site reporting or compliance checking)." },
        { title: "Measure & Build (ongoing)", desc: "Track results, build internal capability, expand to the next opportunity." }
      ],
      minimal: [
        { title: "Discovery (2 weeks)", desc: "Audit your data, systems, and team readiness. Identify your single highest-ROI opportunity." },
        { title: "Pilot (4 weeks)", desc: "Implement one focused AI tool (e.g., automated site reporting or compliance checking)." },
        { title: "Measure & Build (ongoing)", desc: "Track results, build internal capability, expand to the next opportunity." }
      ],
      some: [
        { title: "Review (1 week)", desc: "Assess what's working, what's not, and where the gaps are." },
        { title: "Optimise (4 weeks)", desc: "Fix underperforming tools and add the next highest-impact capability." },
        { title: "Scale (ongoing)", desc: "Systematise your AI operations so they run without constant attention." }
      ],
      heavy: [
        { title: "Review (1 week)", desc: "Assess what's working, what's not, and where the gaps are." },
        { title: "Optimise (4 weeks)", desc: "Fix underperforming tools and add the next highest-impact capability." },
        { title: "Scale (ongoing)", desc: "Systematise your AI operations so they run without constant attention." }
      ]
    },
    cta: {
      primary: "Book a 30-minute validation call — we'll look at your actual data and tell you which opportunity pays off fastest.",
      secondary: "Download the full construction AI roadmap"
    }
  },

  "professional-services": {
    id: "professional-services",
    label: "Professional Services",
    hero: {
      headline: "your expertise shouldn't be buried in paperwork.",
      subhead: "Professional services firms lose up to 40% of billable time to admin, document handling, and knowledge retrieval. Here's what an AI team could reclaim for yours."
    },
    problem: {
      external: "You're managing growing client demands, regulatory changes, and knowledge transfer — while your most experienced people spend hours on tasks that don't require their expertise.",
      internal: "Every hour of billable time lost to admin is revenue you'll never recover. Every slow client onboarding is a relationship that starts on the back foot.",
      philosophical: "Your people are your product. They should spend their time on work that only they can do."
    },
    guide: "Adventures in AI works with professional services firms to identify where AI can handle the routine so your people can focus on the valuable. Starting from where you are, not from scratch.",
    stakes: {
      failure: "Without a system, you risk your best people burning out on admin, your knowledge walking out the door when they leave, and your margins eroding to firms that work smarter.",
      success: "In 90 days, you could be reclaiming 10+ billable hours per person per week, reducing onboarding time by 60%, and surfacing institutional knowledge that was locked in individual inboxes."
    },
    painPoints: {
      "billable-leakage": {
        label: "Billable time leakage",
        solution: "Automated time tracking and anomaly detection highlights where billable hours are being lost — often 15-25% more than firms realise."
      },
      "document-work": {
        label: "Repetitive document work",
        solution: "AI-powered document review, summarisation, and clause extraction turns hours of reading into minutes of verification — for contracts, filings, research, and client communications."
      },
      "knowledge-retrieval": {
        label: "Knowledge retrieval",
        solution: "An intelligent knowledge base lets your team find precedents, templates, and institutional knowledge in seconds instead of asking around or reinventing the wheel."
      },
      "client-onboarding": {
        label: "Client onboarding friction",
        solution: "Automated intake flows, proposal generation, and client communication assistants get new relationships started faster and more professionally."
      },
      "meeting-overhead": {
        label: "Meeting overhead",
        solution: "Automated meeting notes, action item tracking, and follow-up drafting free your team to focus on the conversation, not the documentation."
      }
    },
    planIntro: {
      none: "Starting from scratch? Perfect. We begin with a billable-time audit and implement one focused tool that pays for itself.",
      minimal: "You've dipped a toe in. We'll identify what's working, fix what isn't, and add the next highest-impact capability.",
      some: "You're already using AI in places. We'll optimise what you have, connect the gaps, and build a coherent system.",
      heavy: "You've invested significantly. We'll audit your stack, eliminate redundancy, and ensure every tool is earning its place."
    },
    planSteps: {
      none: [
        { title: "Discovery (2 weeks)", desc: "Audit your workflows, time tracking, and document processes. Identify your single highest-ROI opportunity." },
        { title: "Pilot (4 weeks)", desc: "Implement one focused AI tool (e.g., automated document review or knowledge retrieval)." },
        { title: "Measure & Build (ongoing)", desc: "Track hours saved, revenue recovered, and expand to the next opportunity." }
      ],
      minimal: [
        { title: "Discovery (2 weeks)", desc: "Audit your workflows, time tracking, and document processes. Identify your single highest-ROI opportunity." },
        { title: "Pilot (4 weeks)", desc: "Implement one focused AI tool (e.g., automated document review or knowledge retrieval)." },
        { title: "Measure & Build (ongoing)", desc: "Track hours saved, revenue recovered, and expand to the next opportunity." }
      ],
      some: [
        { title: "Review (1 week)", desc: "Assess what's working, what's not, and where the gaps are." },
        { title: "Optimise (4 weeks)", desc: "Fix underperforming tools and add the next highest-impact capability." },
        { title: "Scale (ongoing)", desc: "Systematise your AI operations so they run without constant attention." }
      ],
      heavy: [
        { title: "Review (1 week)", desc: "Assess what's working, what's not, and where the gaps are." },
        { title: "Optimise (4 weeks)", desc: "Fix underperforming tools and add the next highest-impact capability." },
        { title: "Scale (ongoing)", desc: "Systematise your AI operations so they run without constant attention." }
      ]
    },
    cta: {
      primary: "Book a 30-minute validation call — we'll identify where your firm is losing the most billable time.",
      secondary: "Download the full professional services AI roadmap"
    }
  },

  retail: {
    id: "retail",
    label: "Retail / E-commerce",
    hero: {
      headline: "your customers are ready for smarter — are you?",
      subhead: "UK retailers using AI for demand forecasting and personalisation are seeing 15-30% improvements in key metrics. Here's what that could look like for your business."
    },
    problem: {
      external: "You're managing inventory, customer expectations, competitive pricing, and fulfilment — often with the same tools you've had for years.",
      internal: "Overstock ties up cash. Understock loses sales. Generic marketing gets ignored. Manual processes slow everything down.",
      philosophical: "Your customers don't care about your back-office challenges. They care about getting what they want, when they want it, at a fair price."
    },
    guide: "Adventures in AI helps retailers implement practical AI that directly affects the metrics that matter — stock efficiency, customer satisfaction, and margin. No hype, just measurable improvements.",
    stakes: {
      failure: "Without smarter systems, you risk carrying too much of the wrong stock, losing customers to competitors who personalise better, and watching margins erode on manual processes.",
      success: "In 90 days, you could be reducing overstock by 20-40%, automating 70%+ of routine customer queries, and increasing revenue per customer through personalised recommendations."
    },
    painPoints: {
      "inventory-waste": {
        label: "Inventory waste & demand volatility",
        solution: "AI demand forecasting analyses your sales data, seasonal patterns, and external factors to predict what you'll need — reducing overstock by 20-40% and cutting stockouts."
      },
      "customer-experience": {
        label: "Inconsistent customer experience",
        solution: "Personalised product recommendations and email flows that adapt to individual buying patterns — without you writing a single rule."
      },
      "order-processing": {
        label: "Manual order processing",
        solution: "Automated order processing, returns handling, and fraud detection that runs 24/7 and scales with your peaks."
      },
      "customer-service": {
        label: "Customer service overload",
        solution: "Intelligent chat and FAQ automation handles the routine questions instantly, so your team deals with the conversations that actually need a human."
      },
      "pricing-pressure": {
        label: "Pricing & margin pressure",
        solution: "AI-driven pricing adjusts promotions and margins based on demand, competition, and inventory — maximising revenue without manual guesswork."
      }
    },
    planIntro: {
      none: "Starting from scratch? Perfect. We begin with an inventory and customer data audit and implement one focused tool that pays for itself.",
      minimal: "You've dipped a toe in. We'll identify what's working, fix what isn't, and add the next highest-impact capability.",
      some: "You're already using AI in places. We'll optimise what you have, connect the gaps, and build a coherent system.",
      heavy: "You've invested significantly. We'll audit your stack, eliminate redundancy, and ensure every tool is earning its place."
    },
    planSteps: {
      none: [
        { title: "Discovery (2 weeks)", desc: "Audit your inventory, sales data, and customer touchpoints. Identify your single highest-ROI opportunity." },
        { title: "Pilot (4 weeks)", desc: "Implement one focused AI tool (e.g., demand forecasting or customer automation)." },
        { title: "Measure & Build (ongoing)", desc: "Track stock efficiency, revenue per customer, and expand to the next opportunity." }
      ],
      minimal: [
        { title: "Discovery (2 weeks)", desc: "Audit your inventory, sales data, and customer touchpoints. Identify your single highest-ROI opportunity." },
        { title: "Pilot (4 weeks)", desc: "Implement one focused AI tool (e.g., demand forecasting or customer automation)." },
        { title: "Measure & Build (ongoing)", desc: "Track stock efficiency, revenue per customer, and expand to the next opportunity." }
      ],
      some: [
        { title: "Review (1 week)", desc: "Assess what's working, what's not, and where the gaps are." },
        { title: "Optimise (4 weeks)", desc: "Fix underperforming tools and add the next highest-impact capability." },
        { title: "Scale (ongoing)", desc: "Systematise your AI operations so they run without constant attention." }
      ],
      heavy: [
        { title: "Review (1 week)", desc: "Assess what's working, what's not, and where the gaps are." },
        { title: "Optimise (4 weeks)", desc: "Fix underperforming tools and add the next highest-impact capability." },
        { title: "Scale (ongoing)", desc: "Systematise your AI operations so they run without constant attention." }
      ]
    },
    cta: {
      primary: "Book a 30-minute validation call — we'll identify your fastest AI win in retail.",
      secondary: "Download the full retail AI roadmap"
    }
  },

  hospitality: {
    id: "hospitality",
    label: "Hospitality",
    hero: {
      headline: "your guests deserve the personal touch — without the personal cost.",
      subhead: "Hospitality businesses using AI for demand forecasting, guest personalisation, and staff optimisation are filling more rooms, covering more shifts, and responding to more reviews. Here's what that looks like for yours."
    },
    problem: {
      external: "You're managing variable demand, staffing pressures, guest expectations, and online reputation — often with spreadsheets and guesswork.",
      internal: "Every empty room is revenue lost forever. Every slow review response is a rating damaged. Every understaffed shift is a guest experience ruined.",
      philosophical: "Hospitality is about people. AI should free your people to be more present, not replace them."
    },
    guide: "Adventures in AI helps hospitality businesses implement practical AI that fills rooms, reduces waste, and frees your team to focus on guests. Starting from where you are — not from a blank slate.",
    stakes: {
      failure: "Without smarter systems, you risk inconsistent guest experiences, revenue left on the table during peak demand, and staff burnout from manual scheduling that never quite works.",
      success: "In 90 days, you could be filling 10-15% more capacity on quiet periods, responding to reviews in under 2 hours instead of 2 days, and cutting food waste by 20-30%."
    },
    painPoints: {
      "staffing": {
        label: "Staffing & scheduling",
        solution: "AI scheduling predicts staffing needs based on bookings, events, weather, and historical patterns — so you're neither over- nor under-staffed."
      },
      "demand-pricing": {
        label: "Variable demand & pricing",
        solution: "Dynamic pricing adjusts room rates, menu prices, and package offers in real-time based on demand signals — maximising revenue on peak days and filling gaps on quiet ones."
      },
      "guest-personalisation": {
        label: "Guest personalisation",
        solution: "Guest preference profiling remembers returning guests' preferences, suggests relevant upsells, and creates the kind of personalised experience that drives loyalty and reviews."
      },
      "reviews": {
        label: "Review monitoring & response",
        solution: "AI monitors reviews across platforms, drafts response suggestions, and flags sentiment trends — so you respond faster and protect your reputation without spending evenings on TripAdvisor."
      },
      "waste": {
        label: "Waste & ordering",
        solution: "Kitchen and F&B waste prediction helps you order smarter, reducing food waste by 15-30% while ensuring you never run out of what's popular."
      }
    },
    planIntro: {
      none: "Starting from scratch? Perfect. We begin with a booking and operational audit and implement one focused tool that pays for itself.",
      minimal: "You've dipped a toe in. We'll identify what's working, fix what isn't, and add the next highest-impact capability.",
      some: "You're already using AI in places. We'll optimise what you have, connect the gaps, and build a coherent system.",
      heavy: "You've invested significantly. We'll audit your stack, eliminate redundancy, and ensure every tool is earning its place."
    },
    planSteps: {
      none: [
        { title: "Discovery (2 weeks)", desc: "Audit your booking data, staffing patterns, and guest touchpoints. Identify your single highest-ROI opportunity." },
        { title: "Pilot (4 weeks)", desc: "Implement one focused AI tool (e.g., dynamic pricing or review automation)." },
        { title: "Measure & Build (ongoing)", desc: "Track occupancy, review response times, and expand to the next opportunity." }
      ],
      minimal: [
        { title: "Discovery (2 weeks)", desc: "Audit your booking data, staffing patterns, and guest touchpoints. Identify your single highest-ROI opportunity." },
        { title: "Pilot (4 weeks)", desc: "Implement one focused AI tool (e.g., dynamic pricing or review automation)." },
        { title: "Measure & Build (ongoing)", desc: "Track occupancy, review response times, and expand to the next opportunity." }
      ],
      some: [
        { title: "Review (1 week)", desc: "Assess what's working, what's not, and where the gaps are." },
        { title: "Optimise (4 weeks)", desc: "Fix underperforming tools and add the next highest-impact capability." },
        { title: "Scale (ongoing)", desc: "Systematise your AI operations so they run without constant attention." }
      ],
      heavy: [
        { title: "Review (1 week)", desc: "Assess what's working, what's not, and where the gaps are." },
        { title: "Optimise (4 weeks)", desc: "Fix underperforming tools and add the next highest-impact capability." },
        { title: "Scale (ongoing)", desc: "Systematise your AI operations so they run without constant attention." }
      ]
    },
    cta: {
      primary: "Book a 30-minute validation call — we'll show you where AI makes the biggest difference in hospitality.",
      secondary: "Download the full hospitality AI roadmap"
    }
  }
};

window.AIAI_UNIVERSAL = {
  disclaimer: "This is an illustrative starting point based on common patterns in your industry. Your actual opportunities depend on your specific data, team, and goals. Book a validation call to get a tailored assessment.",
  proofPoints: [
    "Built and run by a team using AI daily — this website, this demo, and the team behind it are our proof.",
    "95% of UK businesses saw zero value from AI last year. We're not in that 95%.",
    "Start from where you are — no greenfield assumptions, no big-bang transformations."
  ]
};
