// Sprint 1 Data Repository: Virtual Labs Baseline & Speculative Horizon (2026 -> 2031)

const SPRINT_DATA = {
  meta: {
    sector: "EdTech",
    subsector: "Digital Laboratory Education in Higher Education",
    platform: "India's Virtual Labs Initiative (MoE / NMEICT / IIT Delhi Consortium)",
    horizon: "2026 → 2031",
    date: "19 November 2026",
    deliverable: "Sprint 1 Final Submission: Complete System Baseline & 10 Innovation Ideas"
  },

  foundations: {
    overview: {
      initiative: "Virtual Labs is an initiative of the Ministry of Education (MoE), Government of India, under the National Mission on Education through Information and Communication Technology (NMEICT). Coordinates 12 participating IITs/consortium institutions with IIT Delhi as the coordinating anchor.",
      scope: "Over 175 Virtual Labs comprising 1,590+ web-enabled experiments spanning simulated interactive modules and remotely-controlled physical scientific equipment.",
      primaryUsers: "Undergraduate STEM (Science and Engineering) students across India.",
      supportingUsers: "Faculty members, lab instructors, nodal coordinators, lab assistants, platform engineers.",
      coreService: "Enabling students to prepare, perform, interpret, and verify experimental science without physical lab access constraints.",
      workflow: "Faculty assigns experiment → Student prepares → Performs simulation/remote run → Interprets results → Submits evidence → Receives feedback → Applies learning in physical lab.",
      boundary: "The institutional junction connecting the central platform, participating colleges, nodal centers, educators, students, digital infrastructure, and accreditation/assessment bodies."
    },
    caseStudies: [
      {
        id: "cs1",
        title: "Case Study 1: Light Microscopy — Three Learning Modes, Different Barriers",
        citation: "Amrita University (2016) / Workshops conducted with 250 students & 100 teachers across 6 student & 4 teacher cohorts.",
        modes: [
          { name: "Animation", reportedDifficulties: "20%", keyIssues: "Lacks interaction (50.0%), No realistic output (20.0%), Lack of audio (21.43%), Time-consuming experiments (8.57%)" },
          { name: "Interactive Simulation", reportedDifficulties: "15%", keyIssues: "Need more variables (37.74%), Computer illiteracy (24.52%), Difficulty in instructions (18.87%), Lacks touch & feel (18.87%)" },
          { name: "Remote Microscope", reportedDifficulties: "40%", keyIssues: "Internet issues (50.0%), Lack of training (21.42%), Slot booking system (14.29%), Lacks deliverability efficiency (14.29%)" }
        ],
        table4: [
          { mode: "Animation", problem: "Lack of interaction", percentage: 50.0 },
          { mode: "Animation", problem: "Lack of audio", percentage: 21.43 },
          { mode: "Animation", problem: "No realistic output", percentage: 20.0 },
          { mode: "Animation", problem: "Time consuming experiments", percentage: 8.57 },
          { mode: "Simulation", problem: "Need to add more variables", percentage: 37.74 },
          { mode: "Simulation", problem: "Computer illiteracy", percentage: 24.52 },
          { mode: "Simulation", problem: "Difficulty in following instructions", percentage: 18.87 },
          { mode: "Simulation", problem: "Lacks touch and feel of equipment", percentage: 18.87 },
          { mode: "Remote labs", problem: "Internet issues", percentage: 50.0 },
          { mode: "Remote labs", problem: "Lack of training", percentage: 21.42 },
          { mode: "Remote labs", problem: "Slot booking system", percentage: 14.29 },
          { mode: "Remote labs", problem: "Lacks deliverability efficiency", percentage: 14.29 }
        ],
        takeaway: "Barriers diverge radically by pedagogical mode: animations fail engagement; simulations encounter instruction and agency bottlenecks; remote physical equipment suffers acute infrastructure and scheduling failures."
      },
      {
        id: "cs2",
        title: "Case Study 2: Remote Laboratories in South Indian Villages — Access as a Resource-Allocation Problem",
        citation: "Amrita University (2016) / Followed 150 postgraduate students across 2012, 2013, 2014 cohorts using neurophysiology & biophysics remote labs.",
        metrics: {
          problemReportingSubgroup: "20% (30 out of 150 students reported acute systemic friction)",
          breakdown: [
            { issue: "Scheduler or slot management", percentage: 66.67, severity: "Critical" },
            { issue: "Execution delays", percentage: 60.00, severity: "Critical" },
            { issue: "Video buffering", percentage: 50.00, severity: "High" },
            { issue: "Electricity fluctuations", percentage: 33.00, severity: "Medium" },
            { issue: "Control instability", percentage: 30.00, severity: "Medium" },
            { issue: "Internet issues", percentage: 26.67, severity: "Medium" }
          ]
        },
        takeaway: "Remote hardware is fundamentally zero-sum. Without predictive queueing, checkpointing, and graceful network degradation, synchronous contention collapses the user experience."
      }
    ]
  },

  stage1: {
    title: "1.1 Sectoral Ecosystem Canvas (Malerba's 4 Building Blocks)",
    subtitle: "Malerba Framework Deconstruction & Systemic Bottlenecks",
    blocks: [
      {
        id: "knowledge",
        title: "Knowledge & Learning",
        icon: "fa-book-open-reader",
        theme: "knowledge",
        items: [
          "Clear instructions & procedural scaffolding",
          "Digital literacy & navigation fluency",
          "Independent hypothesis exploration",
          "Result interpretation & inference synthesis",
          "Practical skill transfer to physical laboratories"
        ]
      },
      {
        id: "tech",
        title: "Technology & Demand",
        icon: "fa-microchip",
        theme: "tech",
        items: [
          "Device access (shared college desktop vs smartphone)",
          "Reliable internet (campus LAN vs rural prepaid 4G)",
          "Mobile responsive compatibility",
          "Equipment availability & remote instrument uptime",
          "Diverse learner needs across multilingual tiers"
        ]
      },
      {
        id: "actors",
        title: "Actors & Networks",
        icon: "fa-users-gear",
        theme: "actors",
        items: [
          "Primary learners (Undergraduate STEM students)",
          "Faculty mentors & laboratory instructors",
          "Software & simulation developers (IIT consortium)",
          "Colleges & institutional nodal coordinators",
          "Technical support providers & equipment technicians"
        ]
      },
      {
        id: "institutions",
        title: "Institutions & Rules",
        icon: "fa-building-columns",
        theme: "institutions",
        items: [
          "Syllabus alignment with university exam boards",
          "Mandatory faculty training & ICT pedagogy workshops",
          "Formal learning assessment & lab viva rubrics",
          "Practical credit recognition & transcript transfer",
          "Maintenance funding & laboratory equipment grants"
        ]
      }
    ],
    coreWorkflow: [
      { step: "01", name: "Prepare", desc: "Read theory, understand apparatus parameters, watch introductory animation." },
      { step: "02", name: "Experiment", desc: "Execute digital simulation or command remotely-controlled physical hardware." },
      { step: "03", name: "Interpret", desc: "Collect data points, plot graphs, formulate scientific inference, answer probes." },
      { step: "04", name: "Apply", desc: "Bridge digital simulation insights into real-world laboratory benches and formal exams." }
    ],
    bottlenecks: [
      { id: "B1", title: "Device & Internet Barriers", desc: "Campus power cuts (33%) and patchy connectivity (50%) abruptly terminate un-checkpointed sessions.", tag: "Tech/Env" },
      { id: "B2", title: "Confusing Experiment Instructions", desc: "Dense text manuals without contextual tooltips leave 18.9% of simulation users confused at early steps.", tag: "Knowledge" },
      { id: "B3", title: "Limited Hands-On Practice", desc: "Haptic feedback is absent (18.9%) and instrument hours are severely rationed due to scarce slots.", tag: "Tech" },
      { id: "B4", title: "Insufficient Training & Support", desc: "21.4% of users report lack of onboarding; helpdesk ticket resolution is slow and detached from real-time needs.", tag: "Actors" },
      { id: "B5", title: "Weak Curriculum Integration", desc: "Virtual labs are treated as extracurricular novelties rather than formal credit-bearing syllabus prerequisites.", tag: "Institutions" },
      { id: "B6", title: "Completion Over Understanding", desc: "Students mechanically copy numbers or submit screenshots without internalized cognitive synthesis.", tag: "Knowledge/Inst" }
    ],
    diagramImg: "assets/images/canvas_malerba.png"
  },

  stage2: {
    title: "1.2 Value Network Analysis (Tangible vs. Intangible Exchanges)",
    subtitle: "Mapping Transactional Currencies & The Critical Breakdown Point",
    participantRoles: [
      { actor: "Students", role: "Primary Learner", func: "Performs experiments, interprets results, submits evidence" },
      { actor: "Faculty / lab instructors", role: "Learning Facilitator", func: "Assigns experiments, scaffolds doubts, guides pedagogical inquiry" },
      { actor: "Faculty / examiners", role: "Learning Assessor", func: "Evaluates understanding, scores rubrics, awards practical readiness" },
      { actor: "Colleges / nodal coordinators", role: "Institutional Coordinator", func: "Organizes local adoption, manages computer lab schedules, enables access" },
      { actor: "Platform administration team", role: "Platform Operator", func: "Coordinates central cloud access, server uptime, and consortium operations" },
      { actor: "Subject experts / content creators", role: "Content Provider", func: "Develops scientific procedures, curricula, and theoretical explanations" },
      { actor: "Software developers", role: "Simulation Developer", func: "Builds and maintains interactive simulations and virtual models" },
      { actor: "IT / helpdesk teams", role: "Technical Support Provider", func: "Resolves connectivity, token, and platform infrastructure faults" },
      { actor: "Remote-lab host institution", role: "Equipment Provider", func: "Operates, calibrates, and maintains physical laboratory instruments" }
    ],
    currencies: {
      tangible: [
        "Lab access authentication & session tokens",
        "Interactive simulation modules & instrument control feeds",
        "Completed lab assignment submissions & data tables",
        "Graded rubrics, academic marks, and practical credits",
        "Computer facilities, power backup, and campus LAN access",
        "Schedules, guidelines, and curriculum circulars"
      ],
      intangible: [
        "Institutional trust between universities and consortium",
        "Pedagogical insights & student confusion signals",
        "Domain expertise shared across peer educators",
        "Student confidence to ask doubts without public embarrassment",
        "Reciprocal goodwill in sharing scarce hardware equipment"
      ]
    },
    failurePoint: {
      title: "Critical Failure Point: Unresolved Student Confusion",
      tangibleAtRisk: "Completed, accurate lab submission & practical credit assignment.",
      missingIntangible: "Student feedback, psychological safety, and confidence to ask for timely help.",
      systemImpact: "Confusion stays hidden; students stall, copy peers' data, or mechanically complete tasks without cognitive understanding.",
      conversionChain: [
        { state: "Unshared Doubts", detail: "Student hits an ambiguous step, fears looking foolish in front of peers, and has no anonymous in-step doubt channel." },
        { state: "Missing Clarification", detail: "No real-time response commitment exists; faculty cannot see aggregate confusion heatmaps." },
        { state: "Incomplete or Weak Lab Submission", detail: "Student submits falsified or uncomprehended figures, breaking the formal assessment pipeline." }
      ]
    },
    diagramImg: "assets/images/value_network_map.png"
  },

  stage3: {
    title: "1.3 Stakeholder Action Cards & Present Horizon Map (ANT)",
    subtitle: "Actor-Network Theory Mapping: Problematization, OPP Gates, and Artifacts",
    actorCards: [
      {
        id: "actor1",
        num: "01",
        name: "Student (Primary Learner)",
        type: "Human Actor — End-User",
        problematization: "Defines the problem as being unable to complete an assigned experiment because access is delayed, instructions are unclear, connectivity drops, or remote equipment fails to respond. Their concern is producing valid evidence of learning before course deadlines, not merely playing with technology.",
        oppGate: "🚧 OPP Gate 4 (Learner Access Gate): The student must hold an authenticated Virtual Labs account, an assigned experiment, a working internet-connected device, and either an available simulation or confirmed remote-lab slot.",
        artifacts: {
          material: ["College ID card", "Personal laptop/smartphone", "Laboratory notebook", "Physical lab kit used for applied learning"],
          digital: ["Login credentials", "Experiment ID", "Booking confirmation", "Session token", "Browser session", "Simulation inputs", "Screenshots", "Observation entries", "Submission file", "Feedback record"]
        },
        img: "assets/images/actor_card_student.png"
      },
      {
        id: "actor2",
        num: "02",
        name: "Faculty / Laboratory Instructor",
        type: "Human Actor — Field Intermediary / Learning Facilitator",
        problematization: "Sees the problem as difficulty ensuring every student reaches genuine learning outcomes when digital access and technical support vary widely. They must verify whether submitted evidence represents authentic practical mastery or automated mechanical completion.",
        oppGate: "🚧 OPP Gate 6 (Assessment Gate): Must be able to assign an experiment, broadcast learning objectives and deadlines, access student submissions, and apply a recognized assessment rubric aligned to curriculum bylaws.",
        artifacts: {
          material: ["Course syllabus", "Printed lab manual", "Classroom projector", "Attendance register", "Marked answer sheets"],
          digital: ["Assignment record", "Experiment URL", "Learning objectives", "Assessment rubric", "Student roster", "Submission metadata", "Feedback comments", "Grade entry"]
        },
        img: "assets/images/actor_card_faculty.png"
      },
      {
        id: "actor3",
        num: "03",
        name: "College / Nodal Coordinator",
        type: "Human Actor — Institutional Coordinator / Access Enabler",
        problematization: "Defines the problem as unequal access: motivated students lack dependable devices, campus internet, or local troubleshooting help. Their mandate is converting top-down institutional demand into usable everyday lab access.",
        oppGate: "🚧 OPP Gate 5 (Campus Access Gate): Must ensure the institution has registered access, functioning computer lab devices, reliable internet, trained lab instructors, and a synchronized timetable for remote-lab slots.",
        artifacts: {
          material: ["College computer lab", "Shared PC workstations", "Power supply & UPS", "Network routers", "Notice boards", "Printed schedules"],
          digital: ["Institutional registration record", "User-access list", "Lab timetable", "Slot-allocation sheet", "Connectivity status report", "Support ticket", "Usage report"]
        },
        img: "assets/images/actor_card_coordinator.png"
      },
      {
        id: "actor4",
        num: "04",
        name: "Remote-Lab Scheduling System",
        type: "Non-Human Technical Actor — Booking & Verification API",
        problematization: "Treats the problem as a high-contention resource allocation conflict: numerous students across India compete for scarce physical instruments, requiring automated arbitration of availability, timezone slots, and maintenance downtime.",
        oppGate: "🚧 OPP Gate 1 (Scheduling Gate): Must verify student course eligibility, match requested experiment to an operational instrument, reserve an exclusive timeslot, authenticate the session token, and synchronize with the host lab.",
        artifacts: {
          material: ["Physical remote instrument", "Lab server computer", "Camera/microscope hardware", "Power backup UPS"],
          digital: ["Booking request", "Student ID", "Course/experiment ID", "Availability calendar", "Slot token", "Reservation confirmation", "Queue position", "Cancellation token", "Access-control token"]
        },
        img: "assets/images/actor_card_scheduler.png"
      },
      {
        id: "actor5",
        num: "05",
        name: "Remote-Lab Control Interface",
        type: "Non-Human Technical Actor — Equipment-Control API / Remote Operation",
        problematization: "Defines the problem as translating student browser clicks into safe, precise, low-latency physical commands on distant lab instruments while preserving hands-on tactile fidelity and preventing instrument damage.",
        oppGate: "🚧 OPP Gate 2 (Control-Link Gate): Must establish a stable authenticated WebSocket/HTTP connection, validate incoming control commands against physical safety limits, stream low-latency sensor/video feedback, and enforce time limits.",
        artifacts: {
          material: ["Motorized stage", "Objective lenses", "Specimen slide", "Industrial sensors", "Protective instrument enclosure"],
          digital: ["Control command payload", "Instrument status code", "Live video stream", "Sensor reading", "Focus/zoom parameters", "Error log", "Session timeout record", "Captured observation image"]
        },
        img: "assets/images/actor_card_control.png"
      },
      {
        id: "actor6",
        num: "06",
        name: "Learning Analytics & Audit Log",
        type: "Non-Human Technical Actor — Verification & Audit System",
        problematization: "Defines the problem as distinguishing authentic pedagogical comprehension from rote task completion. It must capture an immutable record of what the student executed, when, and how inferences were drawn, addressing 'completion over understanding'.",
        oppGate: "🚧 OPP Gate 3 (Consent & Audit Gate): Must record consented, time-stamped, tamper-evident telemetry of student actions while protecting learner privacy and providing authorized faculty with legible verification.",
        artifacts: {
          material: ["Printed feedback report", "Signed assessment sheet", "Institutional accreditation audit file", "Archived student portfolio"],
          digital: ["Event log", "Session ID", "Action sequence timestamps", "Result values", "Screenshot hash", "Quiz response", "Rubric score", "Feedback record", "Access/permission audit log"]
        },
        img: "assets/images/actor_card_analytics.png"
      }
    ],
    oppGates: [
      { id: "OPP 1", name: "Scheduling Gate", actor: "Remote-Lab Scheduling System", desc: "Verifies eligibility, matches instrument, reserves slot, authenticates session. Stalls as duplicate bookings, locked instruments, missed slots." },
      { id: "OPP 2", name: "Control-Link Gate", actor: "Remote-Lab Control Interface", desc: "Maintains authenticated link, validates commands, returns live data safely. Stalls as command lag, buffering video, lost session." },
      { id: "OPP 3", name: "Consent & Audit Gate", actor: "Learning Analytics & Audit Log", desc: "Records consented, time-stamped, tamper-resistant evidence while protecting privacy. Stalls as untrusted records; marks completion rather than understanding." },
      { id: "OPP 4", name: "Learner Access Gate", actor: "Student (Primary Learner)", desc: "Requires authenticated account, experiment URL, working device, internet, and slot. Stalls as missed booking windows, broken sessions, memorized answers." },
      { id: "OPP 5", name: "Campus Access Gate", actor: "College / Nodal Coordinator", desc: "Requires registered access, functional workstations, connectivity, and synchronized schedules. Stalls as idle labs, favoring students with personal laptops." },
      { id: "OPP 6", name: "Assessment Gate", actor: "Faculty / Instructor", desc: "Requires clear assignment, communicated rubric, valid submissions, and formal credit entry. Stalls as Virtual Labs left out of assessment or parallel paper re-keying." }
    ],
    diagramImg: "assets/images/present_horizon_map.png"
  },

  stage4: {
    title: "1.4 STEEP Swimlanes & Information Flows",
    subtitle: "5 Multi-Actor Workflows Deconstructed with Nissenbaum's Contextual Integrity Framework",
    workflows: [
      {
        id: "w1",
        code: "W1",
        steep: "Social",
        title: "Workflow 1: Raising a Doubt When an Experiment Instruction is Unclear",
        subtitle: "How a confused student attempts to seek help and the social frictions encountered.",
        actors: ["Student (Primary Learner)", "Faculty / Lab Instructor", "Learning Analytics & Audit Log"],
        phases: {
          trigger: "Student prepares, runs simulation, and encounters an ambiguous instruction or unexpected reading.",
          validation: "Student hesitates, copies note into paper notebook or types doubt into generic chat; faculty reads out-of-context question.",
          settlement: "Faculty writes delayed clarification; student re-runs experiment or submits whatever they have before deadline."
        },
        ciPackets: [
          { id: "P1", name: "Assignment record + experiment URL", from: "Faculty", to: "Student", about: "Student (enrolled)", info: "Experiment ID, learning objectives, submission deadline", rule: "Course enrollment; institutional teaching mandate" },
          { id: "P2", name: "Doubt message", from: "Student", to: "Faculty", about: "Student (own understanding)", info: "Question text, experiment step, optional screenshot", rule: "Voluntary disclosure; teaching confidence (not for grading)" },
          { id: "P3", name: "Clarification reply", from: "Faculty", to: "Student", about: "Student", info: "Guidance text or hint on the unclear step", rule: "Pedagogical duty; addressed directly to the asker" },
          { id: "P4", name: "Event log", from: "Student session", to: "Analytics & Audit Log", about: "Student", info: "Session ID, action sequence, timestamps", rule: "Informed consent; purpose-limited to learning support" },
          { id: "P5", name: "Submission file + observation entries", from: "Student", to: "Faculty", about: "Student", info: "Result values, observation entries, screenshots", rule: "Course requirement; formal assessment" },
          { id: "P6", name: "Evidence summary", from: "Audit Log", to: "Faculty", about: "Student", info: "Action sequence summary, verified result values", rule: "Authorized faculty of that course only; consented" },
          { id: "P7", name: "Rubric score + feedback", from: "Faculty", to: "Student", about: "Student", info: "Rubric score, qualitative feedback comments", rule: "Assessment policy; individual confidentiality" }
        ],
        frictions: [
          { code: "F1", type: "Media Break 🔴", text: "Doubt starts as a handwritten note in a physical notebook or spoken question in class. It must be manually re-typed or re-explained before the platform or instructor can act on it." },
          { code: "F2", type: "Redundant Data Request 🟠", text: "The student has to re-describe the experiment title, step number, and browser state although the platform already holds the active session context." },
          { code: "F3", type: "Latency Gate 🟣", text: "No response-time commitment exists: the student stalls while the assignment deadline runs out, dissolving the critical clarification window." }
        ],
        diagramImg: "assets/images/workflow_1_social.png"
      },
      {
        id: "w2",
        code: "W2",
        steep: "Technological",
        title: "Workflow 2: Booking and Operating a Remote-Lab Slot",
        subtitle: "Contention and bandwidth-heavy round-trip operations on scarce physical instruments.",
        actors: ["Student", "Remote-Lab Scheduling System", "Remote-Lab Control Interface", "Remote Instrument", "Learning Analytics & Audit Log"],
        phases: {
          trigger: "Student requires a scarce physical instrument session and submits a booking request for a calendar window.",
          validation: "Scheduling API validates enrollment and generates slot token; student authenticates at designated time slot.",
          settlement: "Student sends control commands, video buffers, readings are observed and manually hand-copied into notebook."
        },
        ciPackets: [
          { id: "P1", name: "Booking request", from: "Student", to: "Scheduling System", about: "Student", info: "Student ID, course ID, experiment ID, requested time slot", rule: "Authenticated request; eligibility checked against course roster" },
          { id: "P2", name: "Slot confirmation + slot token", from: "Scheduling System", to: "Student", about: "Student", info: "Reservation confirmation, queue position, time-bound slot token", rule: "Issued only to a verified, eligible student; strictly time-limited" },
          { id: "P3", name: "Login + session token", from: "Student", to: "Control Interface", about: "Student", info: "Credentials, slot token, browser session identifier", rule: "Authentication with slot token; expires immediately when slot ends" },
          { id: "P4", name: "Slot sync / instrument status", from: "Scheduling System", to: "Control Interface", about: "Student booking; instrument", info: "Slot token, access window, instrument operational status code", rule: "System-to-system authenticated API; minimum necessary data" },
          { id: "P5", name: "Control commands", from: "Control Interface", to: "Remote Instrument", about: "Student actions; specimen", info: "Command payload, stage focus/zoom coordinates, motor pulses", rule: "Validated against instrument physical safety and rate limits" },
          { id: "P6", name: "Live video + sensor readings", from: "Remote Instrument", to: "Control Interface", about: "Specimen; instrument session", info: "Video stream, sensor telemetry, hardware status codes", rule: "Stream restricted exclusively to active session token holder" },
          { id: "P7", name: "Live feed to student", from: "Control Interface", to: "Student", about: "Specimen", info: "Live video feed, sensor readings", rule: "Session holder only; active slot duration window" },
          { id: "P8", name: "Event log", from: "Control Interface", to: "Audit Log", about: "Student", info: "Command log, error log, session timeout record", rule: "Informed consent; purpose-limited to support & assessment" }
        ],
        frictions: [
          { code: "F1", type: "Latency Gate 🟣", text: "Slot booking queue: scheduler management was the #1 reported difficulty (66.7% of remote-lab users and 14.3% in microscopy)." },
          { code: "F2", type: "Redundant Data Request 🟠", text: "Student ID, course ID, and experiment ID are repeatedly re-entered across disjoint booking and control screens." },
          { code: "F3", type: "Latency Gate 🟣", text: "Execution delays (60%) and video buffering (50%) separate a command click from observed visual feedback." },
          { code: "F4", type: "Media Break 🔴", text: "Readings and microscope images are manually transcribed by hand into paper lab journals before reports are written." }
        ],
        diagramImg: "assets/images/workflow_2_tech.png"
      },
      {
        id: "w3",
        code: "W3",
        steep: "Environmental",
        title: "Workflow 3: Getting a Working Device and a Stable Session on Campus",
        subtitle: "Campus physical constraints: shared computers, notice boards, and power instability.",
        actors: ["Student", "College / Nodal Coordinator", "College Computer Lab", "Remote-Lab Control Interface", "Technical Support / Helpdesk"],
        phases: {
          trigger: "Coordinator compiles timetable offline, prints paper schedule on lab notice board; student walks over to read slot.",
          validation: "Student arrives at lab seat, logs into shared PC; network fluctuates or power trip cuts the connection.",
          settlement: "Session times out; ticket submitted to helpdesk; slot is burned and student must be rescheduled."
        },
        ciPackets: [
          { id: "P1", name: "Slot-allocation sheet + user-access list", from: "Coordinator", to: "Computer Lab", about: "Students (names, roll numbers)", info: "Names, IDs, assigned slot times", rule: "Institutional need-to-know; lab staff only" },
          { id: "P2", name: "Login request + session token", from: "Student", to: "Control Interface", about: "Student", info: "Credentials, slot token, browser session", rule: "Authentication; session expires with designated slot" },
          { id: "P3", name: "Connection-loss signal", from: "Computer Lab Network", to: "Control Interface", about: "Student session", info: "Dropped connection event, last heartbeat timestamp", rule: "System-generated; automatic release of physical instrument" },
          { id: "P4", name: "Timeout record + error log", from: "Control Interface", to: "Technical Support / Helpdesk", about: "Student session", info: "Session ID, experiment ID, error log, disconnect timestamp", rule: "Support purpose only; minimum necessary telemetry" },
          { id: "P5", name: "Ticket outcome + connectivity status", from: "Technical Support", to: "Coordinator", about: "Students & lab (aggregated)", info: "Fault category, ticket ID, connectivity status", rule: "Aggregated reporting for campus infrastructure planning" },
          { id: "P6", name: "Reschedule notice", from: "Coordinator", to: "Student", about: "Student", info: "New slot time, compensatory instructions", rule: "Individually addressed notice" }
        ],
        frictions: [
          { code: "F1", type: "Media Break 🔴", text: "The digital slot spreadsheet is printed onto paper and pinned to a wall; students manually copy their slot hours by hand." },
          { code: "F2", type: "Latency Gate 🟣", text: "A campus power or network drop abruptly ends the session. The booked slot is wasted (Electricity 33%, Internet 26.7%)." },
          { code: "F3", type: "Latency Gate 🟣", text: "Helpdesk ticket turnaround is slow and instruments are scarce; remote slots cannot be dynamically recovered." },
          { code: "F4", type: "Redundant Data Request 🟠", text: "The student re-books and re-authenticates from scratch, re-entering identical credentials for the lost session." }
        ],
        diagramImg: "assets/images/workflow_3_env.png"
      },
      {
        id: "w4",
        code: "W4",
        steep: "Economic",
        title: "Workflow 4: Turning Lab Usage into Practical Credit and Host Support",
        subtitle: "The non-fee economic value chain: academic credit conversion and host maintenance justifications.",
        actors: ["Student", "Faculty / Assessor", "College / Nodal Coordinator", "Remote-Lab Host Institution", "Platform Operator"],
        phases: {
          trigger: "Student completes experiment and submits digital evidence; faculty grades work and records marks in a paper register.",
          validation: "Coordinator reconciles paper registers against digital slot sheets to justify practical credit allocation.",
          settlement: "Host institution compiles instrument hours in physical logbooks; requests maintenance funds from funding consortium."
        },
        ciPackets: [
          { id: "P1", name: "Submission file + evidence", from: "Student", to: "Faculty / Assessor", about: "Student", info: "Result values, observation entries, screenshots", rule: "Course requirement; formal practical assessment" },
          { id: "P2", name: "Grade entry + submission metadata", from: "Faculty", to: "Coordinator", about: "Student", info: "Grade, submission timestamp, experiment ID", rule: "Institutional record-keeping; need-to-know access" },
          { id: "P3", name: "Usage report + slot-allocation data", from: "Coordinator", to: "Host Institution", about: "Students (aggregated)", info: "Slot usage counts, utilization hours, session counts", rule: "Aggregated reporting; zero personal student identifiers" },
          { id: "P4", name: "Instrument-hours + maintenance report", from: "Host Institution", to: "Platform Operator", about: "Instrument; indirectly users", info: "Instrument hours, fault log, downtime record", rule: "Operational mandate; funding justification" },
          { id: "P5", name: "Maintenance support / funding allocation", from: "Platform Operator", to: "Host Institution", about: "Host institution", info: "Grant approval, allocated funds, maintenance conditions", rule: "Consortium programme funding rules" },
          { id: "P6", name: "Credit recognition notice", from: "Coordinator", to: "Student", about: "Student", info: "Recognized practical credits / transcript mark", rule: "Institutional assessment policy; individually addressed" }
        ],
        frictions: [
          { code: "F1", type: "Media Break 🔴", text: "Marks move from online submission to a paper mark sheet/register, then are manually re-keyed into college records." },
          { code: "F2", type: "Redundant Data Request 🟠", text: "Coordinator manually rebuilds usage totals from paper slot sheets, duplicating platform data logs." },
          { code: "F3", type: "Media Break 🔴", text: "Instrument hours and hardware faults are tracked in physical logbooks at the host lab and re-typed into reports." },
          { code: "F4", type: "Latency Gate 🟣", text: "Maintenance support follows bureaucratic grant cycles; hardware faults persist while paperwork sits in queues." },
          { code: "F5", type: "Latency Gate 🟣", text: "Credit recognition stalls for weeks waiting for the coordinator to manually reconcile paper registers." }
        ],
        diagramImg: "assets/images/workflow_4_econ.png"
      },
      {
        id: "w5",
        code: "W5",
        steep: "Political / Regulatory",
        title: "Workflow 5: A Consented Learning-Evidence Trail for Assessment Recognition",
        subtitle: "Ensuring student privacy compliance, tamper-evident audit trails, and formal university accreditation.",
        actors: ["Student", "Learning Analytics & Audit Log", "Faculty / Assessor", "Institutional Audit File"],
        phases: {
          trigger: "Student presents physical College ID, registers on platform, and provides blanket consent for data tracking.",
          validation: "System captures action sequences, timestamps, and hashes results; faculty evaluates submission against rubric.",
          settlement: "Faculty prints and physically signs the assessment sheet; copies are archived in institutional audit binders for accreditation."
        },
        ciPackets: [
          { id: "P1", name: "Consent record + identity", from: "Student", to: "Analytics & Audit Log", about: "Student", info: "Name, roll number, course, consent flag", rule: "Explicit informed consent; purpose-limited to learning support" },
          { id: "P2", name: "Consent-linked session ID", from: "Audit Log", to: "Student session", about: "Student", info: "Session ID, permission scope, validity token", rule: "Issued only after valid consent is cryptographically recorded" },
          { id: "P3", name: "Event log", from: "Student session", to: "Audit Log", about: "Student", info: "Action sequence, timestamps, result values", rule: "Consented; time-stamped and tamper-resistant" },
          { id: "P4", name: "Evidence package", from: "Audit Log", to: "Faculty / Assessor", about: "Student", info: "Action sequence, result values, screenshot hash, quiz responses", rule: "Authorized faculty of that course only; purpose of grading" },
          { id: "P5", name: "Rubric score + feedback record", from: "Faculty", to: "Audit Log", about: "Student", info: "Rubric score, qualitative feedback comments", rule: "Assessment mandate; stored securely with student record" },
          { id: "P6", name: "Feedback to student", from: "Audit Log", to: "Student", about: "Student", info: "Rubric score, faculty comments, recommendations", rule: "Individual confidentiality; accessible only to student" },
          { id: "P7", name: "Audit export", from: "Audit Log", to: "Institutional Audit File", about: "Student (pseudonymized)", info: "Event records, scores, access log, integrity hash", rule: "Institutional audit requirement; statutory retention limits" }
        ],
        frictions: [
          { code: "F1", type: "Media Break 🔴", text: "Physical ID card details are manually typed into registration forms with no trusted digital roster sync." },
          { code: "F2", type: "Redundant Data Request 🟠", text: "Name, roll number, and department are re-typed across multiple sub-portals despite existing in college databases." },
          { code: "F3", type: "Latency Gate 🟣", text: "Faculty must painstakingly cross-examine raw screenshots and numbers by hand to detect falsification." },
          { code: "F4", type: "Media Break 🔴", text: "The digital rubric score is printed out on paper, physically signed with a ballpoint pen, and physically filed in a binder." }
        ],
        diagramImg: "assets/images/workflow_5_pol.png"
      }
    ]
  },

  stage5: {
    title: "1.5 Speculative Foresight & 10 Sectoral Innovation Ideas (2026 → 2031)",
    subtitle: "Artifact Backtracking & 10 Grounded Systemic Concepts for Indian Higher Education",
    step1Backtrack: {
      materialArtifacts: [
        { id: "M1", name: "Handwritten lab notebook / spoken doubt in class", sources: "W1 F1, W2 F4", friction: "Students hesitate to ask doubts publicly; platform lacks in-step channel; simulations do not export structured readings so students hand-copy values.", opp: "Notebook is accepted institutional evidence; doubts are voluntary disclosure with no instructor response SLA." },
        { id: "M2", name: "Printed lab timetable on notice board", sources: "W3 F1", friction: "Not all students have reliable mobile data; notice board is the trusted public broadcast medium; printed schedule cannot update dynamically.", opp: "Institutional need-to-know: names and slots are for lab staff only; must appear fair and follow fixed timetable cycles." },
        { id: "M3", name: "Shared college PC, router & power supply", sources: "W3 F2, F3", friction: "College lab is sole access point for rural students; power fluctuations (33%) and net drops (50%) terminate sessions and burn booked slots.", opp: "Entry only through access sheet; session is authenticated and slot-bound; token auto-expires on disconnection." },
        { id: "M4", name: "Marked answer sheet / mark register", sources: "W4 F1, W5", friction: "Marks enter formal university records only via paper registers; digital records lack trusted signatures; faculty fear automated cheating.", opp: "Course requirement and exam board policy; grade entry restricted to faculty; individual grade confidentiality." },
        { id: "M5", name: "Instrument log book at remote-lab host", sources: "W4 F3", friction: "Lab staff log operational hours and hardware breakdowns by hand; telemetry is disconnected from maintenance funding pipelines.", opp: "Operational mandate; funding justification; reporting must be aggregated with no student identifiers." },
        { id: "M6", name: "College ID card", sources: "W5 F1", friction: "Identity verification is manual and visual; details are hand-typed because no federated student identity API connects colleges to the platform.", opp: "Explicit informed consent; purpose-limited to assessment; session issued only after physical credential check." },
        { id: "M7", name: "Signed assessment sheet / printed feedback", sources: "W5 F4, Stage 3 Card 6", friction: "Accreditation committees treat wet ink signatures as authentic; digital rubric scores lack legally recognized institutional signature workflows.", opp: "Assessment mandate; stored with student master record; faculty signature and sign-off required by university statute." },
        { id: "M8", name: "Institutional audit file", sources: "W5", friction: "NAAC and NBA accreditation reviewers demand physical inspection folders; evidence is scattered across platforms, spreadsheets, and printouts.", opp: "Statutory accreditation mandate; long-term retention limits; pseudonymized student identities where mandated." }
      ],
      digitalPackets: [
        { id: "D1", name: "Doubt message + clarification", sources: "W1 P2, P3, F2, F3", friction: "No response-time SLA; students re-type experiment title and step despite active session context.", opp: "Voluntary disclosure; pedagogical duty; carries step ID and optional screenshot; guidance text in reply." },
        { id: "D2", name: "Booking request + slot token", sources: "W2 P1, P2, F1, F2", friction: "Scheduler management is the #1 complaint (66.7%); student credentials re-entered; equipment is severely rationed.", opp: "Authenticated request; verified against course enrollment; time-limited single-use token." },
        { id: "D3", name: "Login credentials + session token", sources: "W2 P3, Stage 3 Card 1", friction: "Per-platform manual login; expired token burns slot; computer illiteracy (24.5%) compounds frustration.", opp: "Bound to slot token and browser session; usable strictly by authorized student during active window." },
        { id: "D4", name: "Control commands + live video + sensor data", sources: "W2 P5, P6, P7, F3", friction: "Execution delays (60%), video buffering (50%), and control instability (30%) plague live physical instruments.", opp: "Validated against physical machine safety limits; restricted to active token holder; minimal bandwidth payload." },
        { id: "D5", name: "Event log / action sequence", sources: "W1 P4, W2 P8, W5 P3", friction: "Captured passively as raw audit data; disconnected from real-time feedback or proof of conceptual comprehension.", opp: "Informed consent; purpose-limited to assessment; tamper-resistant timestamping." },
        { id: "D6", name: "Slot-allocation sheet + user list", sources: "W3 P1", friction: "Maintained in offline spreadsheets; lacks dynamic sync with scheduler; idle slots go un-redistributed.", opp: "Need-to-know access; lab staff only; static roster allocation." },
        { id: "D7", name: "Timeout record, error log & ticket", sources: "W3 P3, P4, P5, F3, F4", friction: "Ticket turnaround is painfully slow; disconnected session cannot be resumed from last checkpoint.", opp: "Support purpose only; aggregated connectivity reports; individual reschedule notices." },
        { id: "D8", name: "Submission file + observations", sources: "W1 P5, W4 P1", friction: "Proves completion rather than true understanding; screenshots can be shared/re-used among classmates.", opp: "Course requirement; formal grading rubric; carries data values and screenshots." },
        { id: "D9", name: "Usage report + maintenance request", sources: "W4 P3, P4", friction: "Compiled manually from paper sheets; maintenance grants follow slow yearly budget cycles.", opp: "Aggregated reporting without personal identifiers; consortium funding rules." },
        { id: "D10", name: "Consent record + identity", sources: "W5 P1, P2, F1, F2", friction: "Identity typed manually from card; consent is a bundled, all-or-nothing checkbox.", opp: "Explicit consent under data privacy guidelines; purpose-specific scope tokens." },
        { id: "D11", name: "Evidence package + rubric score", sources: "W5 P4, P5, W1 P6, P7", friction: "Faculty must painstakingly audit submissions by hand; rubric is printed and signed on paper.", opp: "Authorized faculty only; student confidentiality; official grade storage." },
        { id: "D12", name: "Audit export", sources: "W5 P7", friction: "Manually compiled on demand during accreditation visits; student privacy rules unclear.", opp: "Accreditation mandate; retention timers; student pseudonymization." }
      ],
      persistenceTriad: {
        trust: "Paper persists where institutions demand legally recognizable, wet-signed, or publicly visible physical proof (M2, M4, M6, M7, M8).",
        handoff: "Hand-copying persists where systems fail to export structured data across institutional boundaries (M1, D2, D6, D9).",
        resilience: "Digital packets break at unbuffered hand-offs lacking asynchronous response commitments or fault tolerance (D1, D4, D7)."
      }
    },
    steepVectors: [
      { vector: "Social", definition: "Culturally embedded, high-trust help-seeking and collaboration paradigms: how students ask for help, share scarce equipment, and overcome hierarchy in Indian college labs." },
      { vector: "Technological", definition: "Automated background data transfer, edge intelligence, and ambient verification: replacing manual data re-keying and transcription with robust cryptographic pipelines." },
      { vector: "Environmental", definition: "Low-connectivity, power-resilient, and campus-adapted physical-digital touchpoints that gracefully survive patchy rural 4G, frequent brownouts, and shared terminals." },
      { vector: "Economic", definition: "Automated value conversion and reciprocity incentives: transforming verified student mastery into formal university credits, and pooling scarce remote-lab hardware hours across institutions." },
      { vector: "Political / Regulatory", definition: "Contextual consent wallets, privacy-by-design telemetry, and tamper-evident audit seals aligned with India's DPDP Act 2023 and university accreditation standards." }
    ],
    ideas: [
      {
        id: "idea1",
        num: "01",
        steep: "Social",
        title: "Cohort Doubt Relay",
        tagline: "In-Step Vernacular Doubt Pooling with Visible Response Commitments",
        systemRole: "By 2031, every experiment step features an ambient 'Ask Here' beacon. Students can record a 15-second voice query in their native tongue or tap an ambiguous UI element. The platform auto-attaches session metadata, step ID, and a sanitized screenshot. Doubts are pooled into an anonymized cohort queue where peer mentors or instructors can answer once for all students, backed by a guaranteed countdown response SLA before the submission deadline.",
        shift: "Spoken or handwritten doubt re-typed into out-of-context chats → In-step, vernacular, cohort-pooled micro-queries with guaranteed response windows.",
        frictionResolved: "M1 handwritten notebook / spoken doubt in class (W1 F1) and D1 doubt message with lost context (W1 F2) and no response SLA (W1 F3). Dissolves the 'Doubts & feedback blocked' failure in Stage 2.",
        culturalErgonomics: "Addresses the cultural anxiety of looking incompetent before professors or peers in hierarchical Indian classrooms. Students choose 3 privacy tiers: Anonymously to Cohort, Privately to Faculty, or Flag for Weekly Huddle. Faculty receive a per-step confusion heatmap, turning isolated frustration into productive 10-minute lab debriefs.",
        ciAudit: {
          senderRecipient: "Student lab session → Cohort doubt pool, designated peer mentors, and course instructor. Platform operator receives aggregated telemetry only.",
          subjectInfo: "Subject: The student (pseudonymous by default). Information: Vernacular voice clip or text question, experiment step ID, automated screenshot snapshot, and faculty clarification reply.",
          transmissionPrinciple: "Student sets granular visibility per doubt. Personal identity disclosed to instructor only if student explicitly opts in. Doubts can NEVER be accessed by grading rubrics. Audio deleted post-term."
        },
        oppGatesEased: "OPP 4 (Learner Access), OPP 6 (Assessment)",
        bottlenecksAddressed: "Confusing experiment instructions, Insufficient training & support, Completion over understanding",
        interactiveDemoType: "doubt-relay"
      },
      {
        id: "idea2",
        num: "02",
        steep: "Social",
        title: "Sathi Pods: Shared Remote Sessions",
        tagline: "Synchronous Multi-Role Pods for Scarce Hardware Practicals",
        systemRole: "By 2031, students book remote physical instruments as collaborative 3-to-4 member 'Sathi Pods' with rotating micro-roles (Operator, Observer, Data Recorder). One scheduled slot serves an entire team, quadrupling instrument capacity while maintaining individual cryptographic attribution of understanding.",
        shift: "One isolated student, one scarce booking, manual copy-pasting between peers → 3-4 person pods sharing one slot with rotating roles and distinct individual mastery records.",
        frictionResolved: "D2 booking contention (W2 F1, F2; 66.7% scheduler failure) and M1 hand-copied observation numbers (W2 F4). Directly relieves extreme load on OPP Gate 1 (Scheduling).",
        culturalErgonomics: "Mirrors how Indian engineering colleges naturally conduct physical lab practicals ('bench groups'). Pod forms via single QR scan at the lab bench. Operator controls switch with a single tap. If one student's connection drops, a peer seamlessly takes over control without burning the slot.",
        ciAudit: {
          senderRecipient: "Pod member client sessions ↔ Remote-lab scheduling API and instrument control interface. Instructor receives per-member telemetry log.",
          subjectInfo: "Subject: Each individual pod member. Information: Pod roster, dynamic role assignments, shared session token, time-stamped command pulses.",
          transmissionPrinciple: "Each member grants explicit consent. The shared slot token is restricted strictly to pod members within the booking window. Peers see current roles; private scores are never revealed to teammates."
        },
        oppGatesEased: "OPP 1 (Scheduling), OPP 4 (Learner Access)",
        bottlenecksAddressed: "Limited hands-on practice, Insufficient training and support, Device and internet barriers",
        interactiveDemoType: "sathi-pods"
      },
      {
        id: "idea3",
        num: "03",
        steep: "Technological",
        title: "Auto-Notebook with Ambient Understanding Probes",
        tagline: "Automated Telemetry Capture with Embedded Formative Reflection",
        systemRole: "By 2031, parameters, dial adjustments, and high-res instrument captures stream automatically into a structured, editable digital laboratory notebook. At pivotal conceptual steps, the notebook injects 1-tap ambient understanding probes ('If you double the objective magnification, what will happen to depth of field?'), eliminating manual transcription and prioritizing conceptual synthesis.",
        shift: "Hand-copied readings and screenshots pasted into Word/paper → Automatically structured, student-editable digital notebook with embedded cognitive reflection prompts.",
        frictionResolved: "M1 hand-copied notebook (W2 F4), D8 superficial submission file (W1 P5), and D5 un-interpreted event logs. Eliminates 'completion over understanding' (Stage 1 Bottleneck B6).",
        culturalErgonomics: "Retains the classic layout of traditional Indian university lab records (Aim, Apparatus, Observation Table, Calculations, Inference), but auto-populates raw numbers. Students input only hypotheses, inferences, and answers to probes. Single-click export generates formatted printable PDF for conservative colleges.",
        ciAudit: {
          senderRecipient: "Instrument / simulation session → Student notebook sandbox → Faculty grading dashboard (at time of submission).",
          subjectInfo: "Subject: The student. Information: Apparatus parameters, live sensor values, micrograph captures, prediction probe answers, student inference text.",
          transmissionPrinciple: "Private to the student during the experiment. Transmitted to faculty only upon formal submission. Probe answers serve formative diagnostics and do not penalize raw grades in practice modes."
        },
        oppGatesEased: "OPP 3 (Consent & Audit), OPP 6 (Assessment)",
        bottlenecksAddressed: "Completion over understanding, Limited hands-on practice, Confusing instructions",
        interactiveDemoType: "auto-notebook"
      },
      {
        id: "idea4",
        num: "04",
        steep: "Technological",
        title: "Predictive Scheduler & Session Continuity Layer",
        tagline: "AI Demand Prediction, Roster Sync, and Resumable Checkpoints",
        systemRole: "By 2031, the scheduling system forecasts campus demand peaks, pre-authenticates student eligibility directly from institutional rosters, runs automated pre-flight health checks on physical hardware, and continuously checkpoints session states so unexpected drops resume instantly without loss of progress.",
        shift: "Repeated ID entries, rigid slot timeouts, and lost progress on disconnects → Zero-entry roster-linked booking, hardware pre-flight checks, and stateful checkpoint resumption.",
        frictionResolved: "D2 booking contention (W2 F1, F2), D3 session expiration upon net drop, and D7 slow helpdesk ticket loops (W3 F3, F4).",
        culturalErgonomics: "Students view a unified 'Next Practical Slot' widget with 3 clear states: Booked, Starting Soon, or Resume. Low-bandwidth users receive SMS reminders. A transparent waiting list display ('3rd in queue, expected wait 20 min') reassures students that access is merit-based and fair.",
        ciAudit: {
          senderRecipient: "Central scheduling engine ↔ Instrument control API ↔ College student roster; notification alerts to student mobile/email.",
          subjectInfo: "Subject: The student. Information: Course eligibility flag, time-bound slot token, queue priority, heartbeat ping, session memory snapshot.",
          transmissionPrinciple: "Roster returns binary eligibility verification without exporting full demographic records (data minimization). Tokens are strictly single-use. Checkpoints are wiped after 48 hours unless archived."
        },
        oppGatesEased: "OPP 1 (Scheduling), OPP 4 (Learner Access)",
        bottlenecksAddressed: "Device and internet barriers, Insufficient training and support",
        interactiveDemoType: "predictive-scheduler"
      },
      {
        id: "idea5",
        num: "05",
        steep: "Environmental",
        title: "Campus Edge Hub and QR Lab Board",
        tagline: "Offline-First Local Caching with Dynamic Physical Notice Boards",
        systemRole: "By 2031, every participating college lab deploys a low-power, rugged Raspberry Pi / edge appliance that locally caches all 175+ simulation modules and student data. An e-ink / QR-enabled physical lab board replaces the static paper notice board, broadcasting live slot queues and local Wi-Fi connectivity states.",
        shift: "Printed timetable and single choked campus router → Offline-first local edge server paired with a live QR-enabled dynamic notice board.",
        frictionResolved: "M2 printed timetable (W3 F1), D6 offline spreadsheets, and M3 shared campus PC/router as a fragile single point of failure (W3 F2).",
        culturalErgonomics: "Preserves the physical notice board as the social anchor of the college corridor while modernizing its utility. Students scan a dynamic QR code to check in or reserve open seats. Lab assistants monitor an intuitive traffic-light LED panel (Green: Operational, Amber: Syncing, Red: Offline).",
        ciAudit: {
          senderRecipient: "Local Edge Hub ↔ Central Cloud Platform; College Coordinator → Students via physical QR board display.",
          subjectInfo: "Subject: Enrolled lab students. Information: Slot occupancy, cached experiment payloads, encrypted offline telemetry queues, sync receipts.",
          transmissionPrinciple: "Public board displays anonymized seat availability only. Personal slot details unlock only after scanning and biometric/PIN check. Data on edge hub is encrypted at rest and flushed upon cloud sync."
        },
        oppGatesEased: "OPP 5 (Campus Access), OPP 4 (Learner Access)",
        bottlenecksAddressed: "Device and internet barriers, Limited hands-on practice",
        interactiveDemoType: "edge-hub"
      },
      {
        id: "idea6",
        num: "06",
        steep: "Environmental",
        title: "Graceful-Degradation Remote Session",
        tagline: "Adaptive 3-Tier Multi-Mode Streaming with Digital Twin Fallback",
        systemRole: "By 2031, remote instrument streams dynamically adapt to network conditions across 3 modes: (1) Ultra HD Live Video, (2) Light Mode (compressed still frames + live telemetry), and (3) Digital Twin Replay (calibrated offline simulation matching live apparatus parameters). Students never suffer dropped slots or frozen interfaces.",
        shift: "High-bandwidth video that buffers (50%) or crashes (60% execution delay) → Adaptive 3-tier streaming that seamlessly drops to lightweight telemetry or validated digital twins.",
        frictionResolved: "D4 control lag, buffering video, and control instability (W2 F3, 50-60% friction in case studies), M3 power/network outages, and D7 error loops.",
        culturalErgonomics: "Designed specifically for students operating on budget smartphones with 1.5GB daily prepaid data caps. A prominent manual toggle allows students to willingly enter 'Light Data Mode' to conserve mobile data while still controlling real scientific instruments.",
        ciAudit: {
          senderRecipient: "Instrument host server and camera feed → Student browser client or campus edge cache.",
          subjectInfo: "Subject: Active lab session and physical apparatus. Information: Video stream, compressed frame snapshots, telemetry readings, connection QoS metrics.",
          transmissionPrinciple: "Bandwidth metrics used strictly for client-side adaptive bitrate adjustments. If a digital twin is used due to hardware failure, the final evidence file is clearly watermarked as 'Calibrated Twin Run'."
        },
        oppGatesEased: "OPP 2 (Control-Link), OPP 4 (Learner Access)",
        bottlenecksAddressed: "Device and internet barriers, Completion over understanding",
        interactiveDemoType: "graceful-degradation"
      },
      {
        id: "idea7",
        num: "07",
        steep: "Economic",
        title: "Practical Credit Ledger",
        tagline: "Automated Competency-to-Credit Pipeline with Faculty Batch Approval",
        systemRole: "By 2031, verified completion of Virtual Lab experiments automatically mints a digitally signed practical credit token. The token streams directly into the university examination ERP, eliminating paper mark registers and converting digital effort into recognized academic transcripts.",
        shift: "Handwritten marks in paper registers manually re-typed into college software → Cryptographically validated practical credits automatically updating academic transcripts.",
        frictionResolved: "M4 marked answer sheets / registers (W4 F1), D8 re-keyed submission tables (W4 F2), and credit recognition delays (W4 F5). Eliminates Weak Curriculum Integration (Bottleneck B5).",
        culturalErgonomics: "Preserves faculty pedagogical sovereignty: instructors review submissions in a streamlined 1-click batch queue with instant manual override powers. Partial credits reward genuine repeated experimentation rather than penalizing initial mistakes.",
        ciAudit: {
          senderRecipient: "Faculty assessor (supported by analytics audit evidence) → University Registrar / Nodal Coordinator Ledger and Student Transcript Portal.",
          subjectInfo: "Subject: The student. Information: Experiment ID, verified rubric score band, practical credit unit weight, cryptographically hashed faculty signature.",
          transmissionPrinciple: "Credit is posted only upon faculty sign-off. Institutional coordinators receive aggregated credit counts without accessing granular action logs (need-to-know principle)."
        },
        oppGatesEased: "OPP 6 (Assessment), OPP 5 (Campus Access)",
        bottlenecksAddressed: "Weak curriculum integration, Completion over understanding",
        interactiveDemoType: "credit-ledger"
      },
      {
        id: "idea8",
        num: "08",
        steep: "Economic",
        title: "Instrument-Hour Exchange & Support Pool",
        tagline: "Reciprocal Hardware Pooling and Telemetry-Driven Maintenance Grants",
        systemRole: "By 2031, participating institutions pool their physical instruments into a national reciprocal exchange. Hosting colleges earn 'Lab-Hours Credits' for every hour remote students utilize their hardware, which can be exchanged for access to advanced apparatus or redeemed for automated MoE maintenance grant disbursements.",
        shift: "Paper instrument logbooks and slow bureaucratic funding cycles → Automated telemetry-verified instrument hours feeding reciprocal access and direct maintenance funds.",
        frictionResolved: "M5 manual host logbooks (W4 F3), D9 static usage reports (W4 F4), and D6 unutilized slot hoarding (OPP Gate 5). Resolves Insufficient Training and Support / Maintenance Deficits (Bottleneck B4).",
        culturalErgonomics: "Operates on an academic reciprocity currency ('Instrument Hours') rather than cash transactions, fostering inter-collegiate solidarity between premier IITs and tier-3 rural colleges. Host lab technicians receive direct performance incentives.",
        ciAudit: {
          senderRecipient: "Physical instrument telemetry logger → Host institution management, central platform operator, and national funding council.",
          subjectInfo: "Subject: Physical laboratory instruments and institutional usage (NOT individual student identities). Information: Operational run hours, sensor duty cycles, calibration metrics.",
          transmissionPrinciple: "Strictly aggregated telemetry. Host institutions access operational health logs; funding agencies audit verified operational hours before releasing maintenance disbursements."
        },
        oppGatesEased: "OPP 5 (Campus Access), OPP 1 (Scheduling)",
        bottlenecksAddressed: "Insufficient training and support, Weak curriculum integration",
        interactiveDemoType: "instrument-exchange"
      },
      {
        id: "idea9",
        num: "09",
        steep: "Political / Regulatory",
        title: "Layered Consent Wallet & Roster-Linked Identity",
        tagline: "DPDP Act 2023 Compliant Purpose-Specific Consent and Single Sign-On",
        systemRole: "By 2031, student registration is replaced by a federated Single Sign-On link to official university rosters. A granular 'Consent Wallet' empowers students to manage separate, revocable permissions for (1) Essential Lab Functionality, (2) Faculty Assessment Telemetry, and (3) Anonymized Research Analytics.",
        shift: "Physical college ID cards hand-typed into forms with all-or-nothing bundled checkboxes → Single-sign-on roster authentication with granular, revocable consent wallets.",
        frictionResolved: "M6 physical ID card verification (W5 F1) and D10 monolithic bundled consent records (W5 F2). Resolves Weak Curriculum Integration (Bottleneck B5) by establishing trusted records.",
        culturalErgonomics: "Features an 'Assisted Consent Kiosk' at campus orientation where nodal coordinators explain data rights in regional languages. Visual icons and plain-language toggles ('Who can see this?') give first-generation learners full dignity and data agency.",
        ciAudit: {
          senderRecipient: "Student user client (authenticated via verified university roster) → Platform Consent Manager and Privacy Audit Log.",
          subjectInfo: "Subject: The student. Information: Verified pseudonymized student ID, enrolled course code, purpose-specific consent flags, authorization expiration dates.",
          transmissionPrinciple: "Strict purpose limitation and data minimization under India's Digital Personal Data Protection (DPDP) Act 2023. Revocation takes effect immediately without punitive disruption to learning access."
        },
        oppGatesEased: "OPP 3 (Consent & Audit), OPP 4 (Learner Access)",
        bottlenecksAddressed: "Weak curriculum integration, Device and internet barriers",
        interactiveDemoType: "consent-wallet"
      },
      {
        id: "idea10",
        num: "10",
        steep: "Political / Regulatory",
        title: "Tamper-Evident Evidence Trail & Digital Assessment Seal",
        tagline: "Cryptographically Verified Student Portfolios for NAAC / NBA Accreditation",
        systemRole: "By 2031, student lab submissions are bundled into a tamper-evident evidence package containing procedural action hashes, parameter timestamps, and output values. Faculty apply a cryptographically secure Digital Assessment Seal, creating audit-ready, pseudonymized digital portfolios for national accreditation bodies (NAAC / NBA).",
        shift: "Physical lab manuals, wet-ink signatures, and bulky paper audit binders → Cryptographically sealed digital portfolios with on-demand pseudonymized accreditation audit exports.",
        frictionResolved: "M7 signed paper assessment sheets (W5 F4), M8 paper audit archives, D11 manual cross-checking (W5 F3), and D12 fragmented exports.",
        culturalErgonomics: "Faculty sign assessments using familiar biometric or OTP authentication. For external accreditation inspectors, the system generates a 1-page summary bearing an official verification QR code that instantly confirms authenticity without exposing private student identities.",
        ciAudit: {
          senderRecipient: "Platform analytics engine → Course faculty grading terminal; signed record → University Examination Vault and Accreditation Inspector Portal.",
          subjectInfo: "Subject: The student (strictly pseudonymized during accreditation reviews). Information: Telemetry hashes, result values, digital rubric evaluations, faculty signature timestamp.",
          transmissionPrinciple: "Only appointed course evaluators inspect raw student identity. Accreditation reviewers access cryptographically verifiable, pseudonymized cohorts. Immutable audit logs track who viewed records."
        },
        oppGatesEased: "OPP 3 (Consent & Audit), OPP 6 (Assessment)",
        bottlenecksAddressed: "Completion over understanding, Weak curriculum integration",
        interactiveDemoType: "evidence-seal"
      }
    ],
    traceabilityMatrix: [
      { id: "01", concept: "Cohort Doubt Relay", steep: "Social", artifacts: "M1, D1", gates: "OPP 4, OPP 6", bottleneck: "Confusing instructions; Insufficient support; Completion over understanding" },
      { id: "02", concept: "Sathi Pods: Shared Remote Sessions", steep: "Social", artifacts: "D2, M1", gates: "OPP 1, OPP 4", bottleneck: "Limited hands-on practice; Insufficient training and support" },
      { id: "03", concept: "Auto-Notebook with Ambient Probes", steep: "Technological", artifacts: "M1, D8, D5", gates: "OPP 3, OPP 6", bottleneck: "Completion over understanding; Limited hands-on practice" },
      { id: "04", concept: "Predictive Scheduler & Continuity Layer", steep: "Technological", artifacts: "D2, D3, D7", gates: "OPP 1, OPP 4", bottleneck: "Device and internet barriers" },
      { id: "05", concept: "Campus Edge Hub and QR Lab Board", steep: "Environmental", artifacts: "M2, M3, D6", gates: "OPP 5, OPP 4", bottleneck: "Device and internet barriers" },
      { id: "06", concept: "Graceful-Degradation Remote Session", steep: "Environmental", artifacts: "D4, M3, D7", gates: "OPP 2, OPP 4", bottleneck: "Device and internet barriers" },
      { id: "07", concept: "Practical Credit Ledger", steep: "Economic", artifacts: "M4, D8", gates: "OPP 6, OPP 5", bottleneck: "Weak curriculum integration; Completion over understanding" },
      { id: "08", concept: "Instrument-Hour Exchange & Support Pool", steep: "Economic", artifacts: "M5, D9, D6", gates: "OPP 5, OPP 1", bottleneck: "Insufficient training and support (maintenance); Weak curriculum integration" },
      { id: "09", concept: "Layered Consent Wallet & Identity", steep: "Political / Regulatory", artifacts: "M6, D10", gates: "OPP 3, OPP 4", bottleneck: "Weak curriculum integration (trusted records)" },
      { id: "10", concept: "Tamper-Evident Trail & Digital Seal", steep: "Political / Regulatory", artifacts: "M7, M8, D11, D12", gates: "OPP 3, OPP 6", bottleneck: "Completion over understanding; Weak curriculum integration" }
    ],
    assumptions: [
      "The 2031 concepts are design projections synthesized from empirical Stage 4 baseline breakdowns, not official MoE roadmaps.",
      "Empirical percentage baselines are derived from published peer-reviewed case study cohorts (2012–2014) representing high-friction rural/suburban deployment nodes.",
      "Regulatory frameworks assume full compliance with India's Digital Personal Data Protection (DPDP) Act 2023 and evolving UGC/AICTE practical credit transfer guidelines.",
      "Successful systemic transformation requires institutional alignment, faculty incentives, and college roster integrations, rather than isolated software updates."
    ]
  }
};
