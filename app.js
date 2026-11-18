// Sprint 1 Application Controller: Interactive Features, Diagram Lightbox, Table Filtering & Simulators

document.addEventListener("DOMContentLoaded", () => {
  initAccordions();
  initSubDropdowns();
  initDiagramLightbox();
  initTableInteractions();
  initSimulators();
  initAudio();
  initSubmissionGenerators();
  initSearchFilters();
});

/* ==========================================================================
   1. ACCORDION CONTROLLER
   ========================================================================== */
function initAccordions() {
  const accordionTriggers = document.querySelectorAll(".accordion-trigger");
  accordionTriggers.forEach(trigger => {
    trigger.addEventListener("click", () => {
      const parent = trigger.closest(".accordion-wrapper");
      const isOpen = parent.classList.contains("open");
      
      // Play subtle sound
      playSound("click");

      if (isOpen) {
        parent.classList.remove("open");
      } else {
        parent.classList.add("open");
      }
    });
  });

  // Milestone internal jump pills
  const navBtns = document.querySelectorAll(".sprint-nav-btn");
  navBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      navBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const targetId = btn.getAttribute("data-target");
      const targetElem = document.getElementById(targetId);
      if (targetElem) {
        targetElem.scrollIntoView({ behavior: "smooth", block: "start" });
        playSound("subtle");
      }
    });
  });
}

function initSubDropdowns() {
  const triggers = document.querySelectorAll(".sub-dropdown-trigger");
  triggers.forEach(trigger => {
    trigger.addEventListener("click", () => {
      const parent = trigger.closest(".sub-dropdown");
      parent.classList.toggle("open");
      playSound("click");
    });
  });
}

/* ==========================================================================
   2. INTERACTIVE DIAGRAM LIGHTBOX MODAL (ZOOM, PAN, RESET)
   ========================================================================== */
let currentZoom = 1;
let isPanning = false;
let startX = 0, startY = 0, translateX = 0, translateY = 0;

function initDiagramLightbox() {
  const modal = document.getElementById("lightboxModal");
  if (!modal) return;

  const lightboxImg = document.getElementById("lightboxImage");
  const lightboxTitle = document.getElementById("lightboxTitle");
  const closeBtn = document.getElementById("closeLightbox");
  const zoomInBtn = document.getElementById("zoomIn");
  const zoomOutBtn = document.getElementById("zoomOut");
  const zoomResetBtn = document.getElementById("zoomReset");
  const viewport = document.getElementById("lightboxViewport");

  // Attach click listener to all diagram image containers
  const diagramContainers = document.querySelectorAll(".diagram-image-container, .interactive-zoom-trigger");
  diagramContainers.forEach(container => {
    container.addEventListener("click", () => {
      const img = container.querySelector("img");
      const title = container.getAttribute("data-title") || "Diagram Inspection Lens";
      if (img) {
        openLightbox(img.src, title);
      }
    });
  });

  function openLightbox(src, title) {
    lightboxImg.src = src;
    lightboxTitle.textContent = title;
    currentZoom = 1;
    translateX = 0;
    translateY = 0;
    applyTransform();
    modal.classList.add("active");
    playSound("open");
    document.body.style.overflow = "hidden";
  }

  function closeLightbox() {
    modal.classList.remove("active");
    document.body.style.overflow = "";
    playSound("click");
  }

  closeBtn.addEventListener("click", closeLightbox);
  modal.addEventListener("click", (e) => {
    if (e.target === modal || e.target === viewport) {
      closeLightbox();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("active")) {
      closeLightbox();
    }
  });

  zoomInBtn.addEventListener("click", () => {
    currentZoom = Math.min(currentZoom + 0.3, 3.0);
    applyTransform();
    playSound("subtle");
  });

  zoomOutBtn.addEventListener("click", () => {
    currentZoom = Math.max(currentZoom - 0.3, 0.6);
    applyTransform();
    playSound("subtle");
  });

  zoomResetBtn.addEventListener("click", () => {
    currentZoom = 1;
    translateX = 0;
    translateY = 0;
    applyTransform();
    playSound("subtle");
  });

  // Pan controls
  viewport.addEventListener("mousedown", (e) => {
    if (e.target === lightboxImg || e.target === viewport) {
      isPanning = true;
      startX = e.clientX - translateX;
      startY = e.clientY - translateY;
      viewport.style.cursor = "grabbing";
    }
  });

  window.addEventListener("mousemove", (e) => {
    if (!isPanning) return;
    translateX = e.clientX - startX;
    translateY = e.clientY - startY;
    applyTransform();
  });

  window.addEventListener("mouseup", () => {
    isPanning = false;
    viewport.style.cursor = "grab";
  });

  function applyTransform() {
    lightboxImg.style.transform = `translate(${translateX}px, ${translateY}px) scale(${currentZoom})`;
  }
}

// Global hook to open diagram from buttons
window.openDiagramModal = function(src, title) {
  const modal = document.getElementById("lightboxModal");
  const lightboxImg = document.getElementById("lightboxImage");
  const lightboxTitle = document.getElementById("lightboxTitle");
  if (modal && lightboxImg) {
    lightboxImg.src = src;
    lightboxTitle.textContent = title;
    currentZoom = 1;
    translateX = 0;
    translateY = 0;
    lightboxImg.style.transform = `translate(0px, 0px) scale(1)`;
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
    playSound("open");
  }
};

/* ==========================================================================
   3. TABLE FILTERING, SORTING & RENDERING
   ========================================================================== */
function initTableInteractions() {
  // Render Case Study 1 Table
  renderCaseStudy1Table();
  
  // Render Case Study 2 Table
  renderCaseStudy2Table();

  // Render Stage 2 Participant Roles
  renderParticipantRolesTable();

  // Render Stage 4 Swimlane Workflows
  renderSwimlaneWorkflows();

  // Render Stage 5 Step 1 Backtracking Tables
  renderBacktrackTables();

  // Render Traceability Matrix
  renderTraceabilityMatrix();
}

function renderCaseStudy1Table(filterMode = "all", searchQuery = "") {
  const tbody = document.getElementById("cs1TableBody");
  if (!tbody) return;

  const data = SPRINT_DATA.foundations.caseStudies[0].table4;
  const filtered = data.filter(item => {
    const matchesMode = (filterMode === "all" || item.mode.toLowerCase().includes(filterMode.toLowerCase()));
    const matchesSearch = item.problem.toLowerCase().includes(searchQuery.toLowerCase()) || item.mode.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesMode && matchesSearch;
  });

  tbody.innerHTML = filtered.map(row => {
    const barColorClass = row.percentage > 35 ? "rose" : (row.percentage > 20 ? "amber" : "cyan");
    return `
      <tr>
        <td><span class="hero-badge ${row.mode.toLowerCase().includes('remote') ? 'amber' : (row.mode.toLowerCase().includes('sim') ? 'cyan' : '')}">${row.mode}</span></td>
        <td><strong>${row.problem}</strong></td>
        <td>
          <div class="cell-bar-wrapper">
            <div class="cell-bar-bg">
              <div class="cell-bar-fill ${barColorClass}" style="width: ${row.percentage}%"></div>
            </div>
            <span class="cell-bar-val">${row.percentage.toFixed(2)}%</span>
          </div>
        </td>
      </tr>
    `;
  }).join("");
}

function renderCaseStudy2Table() {
  const tbody = document.getElementById("cs2TableBody");
  if (!tbody) return;

  const data = SPRINT_DATA.foundations.caseStudies[1].metrics.breakdown;
  tbody.innerHTML = data.map(row => {
    const barClass = row.percentage > 45 ? "rose" : "amber";
    return `
      <tr>
        <td><strong>${row.issue}</strong></td>
        <td>
          <span class="hero-badge ${row.severity === 'Critical' ? 'rose' : (row.severity === 'High' ? 'amber' : 'cyan')}">${row.severity}</span>
        </td>
        <td>
          <div class="cell-bar-wrapper">
            <div class="cell-bar-bg">
              <div class="cell-bar-fill ${barClass}" style="width: ${row.percentage}%"></div>
            </div>
            <span class="cell-bar-val">${row.percentage.toFixed(2)}%</span>
          </div>
        </td>
      </tr>
    `;
  }).join("");
}

function renderParticipantRolesTable(searchQuery = "") {
  const tbody = document.getElementById("rolesTableBody");
  if (!tbody) return;

  const data = SPRINT_DATA.stage2.participantRoles;
  const filtered = data.filter(row => {
    return row.actor.toLowerCase().includes(searchQuery.toLowerCase()) ||
           row.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
           row.func.toLowerCase().includes(searchQuery.toLowerCase());
  });

  tbody.innerHTML = filtered.map(row => `
    <tr>
      <td><span class="hero-badge">${row.actor}</span></td>
      <td><strong style="color: var(--accent-cyan);">${row.role}</strong></td>
      <td>${row.func}</td>
    </tr>
  `).join("");
}

function renderSwimlaneWorkflows() {
  const container = document.getElementById("swimlaneContentArea");
  const tabContainer = document.getElementById("workflowTabs");
  if (!container || !tabContainer) return;

  const workflows = SPRINT_DATA.stage4.workflows;

  tabContainer.innerHTML = workflows.map((w, idx) => `
    <button class="workflow-tab ${idx === 0 ? 'active' : ''}" data-wid="${w.id}">
      <span>${w.code}</span> • ${w.steep}
    </button>
  `).join("");

  // Attach tab events
  const tabs = tabContainer.querySelectorAll(".workflow-tab");
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      const wid = tab.getAttribute("data-wid");
      renderActiveWorkflow(wid);
      playSound("subtle");
    });
  });

  // Render initial workflow
  renderActiveWorkflow("w1");
}

function renderActiveWorkflow(wid) {
  const container = document.getElementById("swimlaneContentArea");
  const w = SPRINT_DATA.stage4.workflows.find(item => item.id === wid);
  if (!w || !container) return;

  const steepClass = w.steep.toLowerCase().replace(/[^a-z]/g, '');

  container.innerHTML = `
    <div class="workflow-detail-panel">
      <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 12px; margin-bottom: 12px;">
        <div>
          <span class="workflow-steep-pill ${steepClass}">${w.steep} Sector • ${w.code}</span>
          <h4 style="font-size: 1.35rem; font-weight: 800; color: #fff; margin-top: 4px;">${w.title}</h4>
          <p style="font-size: 0.88rem; color: var(--text-muted); margin-top: 2px;">${w.subtitle}</p>
        </div>
        <button class="nav-pill-btn" onclick="openDiagramModal('${w.diagramImg}', '${w.title}')">
          <i class="fa-solid fa-expand"></i> Inspect High-Res Flow
        </button>
      </div>

      <!-- Diagram Preview Card -->
      <div class="diagram-viewer-card" style="margin: 20px 0;">
        <div class="diagram-toolbar">
          <div class="diagram-label">
            <i class="fa-solid fa-diagram-project"></i> Swimlane Workflow Diagram & Contextual Integrity Matrix
          </div>
          <button class="tool-btn highlight" onclick="openDiagramModal('${w.diagramImg}', '${w.title}')">
            <i class="fa-solid fa-magnifying-glass-plus"></i> Open Fullscreen Lens (200% Zoom)
          </button>
        </div>
        <div class="diagram-image-container" onclick="openDiagramModal('${w.diagramImg}', '${w.title}')">
          <img src="${w.diagramImg}" alt="${w.title}">
          <div class="zoom-hint-overlay">
            <i class="fa-solid fa-mouse-pointer"></i> Click to zoom and inspect
          </div>
        </div>
      </div>

      <!-- 3 Phases Strip -->
      <h5 style="font-size: 0.85rem; font-weight: 800; text-transform: uppercase; color: var(--accent-cyan); margin-bottom: 10px;">
        <i class="fa-solid fa-timeline"></i> 3-Phase Execution Lifecycle
      </h5>
      <div class="phases-strip">
        <div class="phase-card">
          <div class="phase-label">1. TRIGGER PHASE</div>
          <div class="phase-body">${w.phases.trigger}</div>
        </div>
        <div class="phase-card">
          <div class="phase-label">2. VALIDATION PHASE</div>
          <div class="phase-body">${w.phases.validation}</div>
        </div>
        <div class="phase-card">
          <div class="phase-label">3. SETTLEMENT PHASE</div>
          <div class="phase-body">${w.phases.settlement}</div>
        </div>
      </div>

      <!-- Nissenbaum Contextual Integrity Parameters Table -->
      <h5 style="font-size: 0.85rem; font-weight: 800; text-transform: uppercase; color: var(--accent-primary-light); margin-top: 24px; margin-bottom: 10px;">
        <i class="fa-solid fa-table-list"></i> Nissenbaum's 5 Contextual Integrity Parameters
      </h5>
      <div class="table-responsive">
        <table class="data-table">
          <thead>
            <tr>
              <th>Packet ID & Name</th>
              <th>From ➔ To (Sender/Recipient)</th>
              <th>About (Subject)</th>
              <th>Information Transferred</th>
              <th>Transmission Principle (Rule)</th>
            </tr>
          </thead>
          <tbody>
            ${w.ciPackets.map(p => `
              <tr>
                <td><strong style="color: var(--accent-cyan); font-family: var(--font-mono);">${p.id}</strong> • ${p.name}</td>
                <td><span class="hero-badge">${p.from}</span> ➔ <span class="hero-badge cyan">${p.to}</span></td>
                <td>${p.about}</td>
                <td><small>${p.info}</small></td>
                <td><span style="font-size: 0.82rem; color: #cbd5e1;">${p.rule}</span></td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>

      <!-- Friction Callouts -->
      <div class="frictions-box">
        <div class="frictions-title">
          <i class="fa-solid fa-triangle-exclamation"></i> Identified Systemic Friction & Failure Points
        </div>
        ${w.frictions.map(f => `
          <div class="friction-item">
            <span class="friction-code">${f.code}</span>
            <div>
              <strong style="color: #fff; font-size: 0.85rem;">${f.type}:</strong>
              <span class="friction-text">${f.text}</span>
            </div>
          </div>
        `).join("")}
      </div>
    </div>
  `;
}

function renderBacktrackTables() {
  const matBody = document.getElementById("materialArtifactsBody");
  const digBody = document.getElementById("digitalPacketsBody");
  if (!matBody || !digBody) return;

  const matData = SPRINT_DATA.stage5.step1Backtrack.materialArtifacts;
  matBody.innerHTML = matData.map(m => `
    <tr>
      <td><span class="artifact-tag material">${m.id}</span></td>
      <td><strong>${m.name}</strong></td>
      <td><span class="hero-badge">${m.sources}</span></td>
      <td><small>${m.friction}</small></td>
      <td><span style="font-size: 0.82rem; color: #cbd5e1;">${m.opp}</span></td>
    </tr>
  `).join("");

  const digData = SPRINT_DATA.stage5.step1Backtrack.digitalPackets;
  digBody.innerHTML = digData.map(d => `
    <tr>
      <td><span class="artifact-tag digital">${d.id}</span></td>
      <td><strong>${d.name}</strong></td>
      <td><span class="hero-badge cyan">${d.sources}</span></td>
      <td><small>${d.friction}</small></td>
      <td><span style="font-size: 0.82rem; color: #cbd5e1;">${d.opp}</span></td>
    </tr>
  `).join("");

  // Tab switching for backtrack
  const btTabs = document.querySelectorAll(".backtrack-tab-btn");
  btTabs.forEach(btn => {
    btn.addEventListener("click", () => {
      btTabs.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const target = btn.getAttribute("data-target");
      document.getElementById("materialArtifactsTableWrapper").style.display = target === "material" ? "block" : "none";
      document.getElementById("digitalPacketsTableWrapper").style.display = target === "digital" ? "block" : "none";
      playSound("subtle");
    });
  });
}

function renderTraceabilityMatrix(filterSteep = "all") {
  const tbody = document.getElementById("traceabilityBody");
  if (!tbody) return;

  const data = SPRINT_DATA.stage5.traceabilityMatrix;
  const filtered = data.filter(r => filterSteep === "all" || r.steep.toLowerCase().includes(filterSteep.toLowerCase()));

  tbody.innerHTML = filtered.map(r => `
    <tr>
      <td><span class="idea-num-badge">Idea ${r.id}</span></td>
      <td><strong style="color: #fff;">${r.concept}</strong></td>
      <td><span class="hero-badge ${r.steep.toLowerCase().includes('social') ? 'rose' : (r.steep.toLowerCase().includes('tech') ? 'cyan' : (r.steep.toLowerCase().includes('env') ? 'emerald' : 'amber'))}">${r.steep}</span></td>
      <td><span style="font-family: var(--font-mono); color: var(--accent-cyan);">${r.artifacts}</span></td>
      <td><span class="hero-badge">${r.gates}</span></td>
      <td><small>${r.bottleneck}</small></td>
    </tr>
  `).join("");
}

/* ==========================================================================
   4. SEARCH & FILTER CONTROLLER
   ========================================================================== */
function initSearchFilters() {
  // Case Study 1 Filter pills
  const cs1Pills = document.querySelectorAll(".cs1-pill");
  cs1Pills.forEach(pill => {
    pill.addEventListener("click", () => {
      cs1Pills.forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      const mode = pill.getAttribute("data-mode");
      const search = document.getElementById("cs1Search")?.value || "";
      renderCaseStudy1Table(mode, search);
      playSound("subtle");
    });
  });

  const cs1Search = document.getElementById("cs1Search");
  if (cs1Search) {
    cs1Search.addEventListener("input", (e) => {
      const activePill = document.querySelector(".cs1-pill.active");
      const mode = activePill ? activePill.getAttribute("data-mode") : "all";
      renderCaseStudy1Table(mode, e.target.value);
    });
  }

  // Roles Search
  const rolesSearch = document.getElementById("rolesSearch");
  if (rolesSearch) {
    rolesSearch.addEventListener("input", (e) => {
      renderParticipantRolesTable(e.target.value);
    });
  }

  // Traceability STEEP Filter
  const tracePills = document.querySelectorAll(".trace-pill");
  tracePills.forEach(pill => {
    pill.addEventListener("click", () => {
      tracePills.forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      const steep = pill.getAttribute("data-steep");
      renderTraceabilityMatrix(steep);
      playSound("subtle");
    });
  });

  // Ideas STEEP Filter
  const ideaPills = document.querySelectorAll(".idea-filter-pill");
  ideaPills.forEach(pill => {
    pill.addEventListener("click", () => {
      ideaPills.forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      const steep = pill.getAttribute("data-steep");
      filterIdeasGrid(steep);
      playSound("subtle");
    });
  });
}

function filterIdeasGrid(steep = "all") {
  const cards = document.querySelectorAll(".idea-card");
  cards.forEach(card => {
    const cardSteep = card.getAttribute("data-steep");
    if (steep === "all" || cardSteep.toLowerCase().includes(steep.toLowerCase())) {
      card.style.display = "flex";
    } else {
      card.style.display = "none";
    }
  });
}

/* ==========================================================================
   5. INTERACTIVE MINI-SIMULATORS FOR 10 INNOVATION IDEAS
   ========================================================================== */
function initSimulators() {
  // Sathi Pod Role Rotator
  window.rotatePodRoles = function() {
    const roles = ["Operator", "Observer", "Data Recorder"];
    const seats = [
      document.getElementById("podSeat1"),
      document.getElementById("podSeat2"),
      document.getElementById("podSeat3")
    ];
    if (!seats[0]) return;

    // Shift roles
    let current0 = seats[0].innerText;
    let current1 = seats[1].innerText;
    let current2 = seats[2].innerText;

    seats[0].innerText = current2;
    seats[1].innerText = current0;
    seats[2].innerText = current1;

    const log = document.getElementById("podSimLog");
    if (log) {
      log.innerText = `[POD EVENT] Shifted token control. Current Operator: ${seats[0].innerText}. Token validated by Session Continuity Layer.`;
    }
    playSound("click");
  };

  // Graceful-Degradation Mode Switcher
  window.switchDegradationMode = function(mode) {
    const gauge = document.getElementById("bandwidthGauge");
    const modeDesc = document.getElementById("degradeModeDesc");
    const buttons = document.querySelectorAll(".degrade-btn");
    buttons.forEach(b => b.classList.remove("active"));
    
    const clickedBtn = document.querySelector(`.degrade-btn[data-mode="${mode}"]`);
    if (clickedBtn) clickedBtn.classList.add("active");

    if (mode === "live") {
      gauge.style.width = "95%";
      gauge.className = "cell-bar-fill rose";
      modeDesc.innerText = "Mode: Full HD Video Stream (2.5 Mbps required). Ultra-low latency camera feed active.";
    } else if (mode === "light") {
      gauge.style.width = "25%";
      gauge.className = "cell-bar-fill amber";
      modeDesc.innerText = "Mode: Light Mode (120 kbps). High-efficiency compressed still captures + live telemetry pulses.";
    } else {
      gauge.style.width = "5%";
      gauge.className = "cell-bar-fill emerald";
      modeDesc.innerText = "Mode: Calibrated Digital Twin (0 kbps offline). Local mathematical twin running; zero server bandwidth.";
    }
    playSound("click");
  };

  // Consent Wallet Toggle
  window.toggleConsentScope = function(scope) {
    const indicator = document.getElementById(`consentStatus_${scope}`);
    if (indicator) {
      const isGranted = indicator.innerText.includes("GRANTED");
      if (isGranted) {
        indicator.innerText = "REVOKED";
        indicator.className = "hero-badge rose";
      } else {
        indicator.innerText = "GRANTED";
        indicator.className = "hero-badge emerald";
      }
      playSound("click");
    }
  };

  // Digital Assessment Seal Hash Generator
  window.generateAssessmentSeal = function() {
    const sealOutput = document.getElementById("sealOutput");
    if (!sealOutput) return;

    const dummyHash = "SHA256:" + Array.from({length: 16}, () => Math.floor(Math.random()*16).toString(16)).join("") + "...VERIFIED";
    sealOutput.innerHTML = `
      <div style="color: var(--accent-emerald); font-weight: bold;">
        <i class="fa-solid fa-circle-check"></i> DIGITAL SEAL MINTED & ATTESTED
      </div>
      <div>Hash: <code>${dummyHash}</code></div>
      <div>Timestamp: ${new Date().toISOString()} | Evaluator: Faculty OTP Authenticated</div>
      <small style="color: var(--text-dim);">Ready for instant NAAC/NBA on-demand export verification.</small>
    `;
    playSound("open");
  };

  // Doubt Relay Vernacular Simulator
  window.simulateDoubtRecord = function() {
    const output = document.getElementById("doubtOutput");
    const langSelect = document.getElementById("doubtLangSelect");
    const lang = langSelect ? langSelect.value : "Hindi";
    if (!output) return;

    output.innerHTML = `
      <div style="color: var(--accent-cyan); font-weight: bold;">
        <i class="fa-solid fa-microphone-lines"></i> 15s Voice Note Encoded (${lang})
      </div>
      <div>Step Attached: <strong>Optics Step 3 (Immersion Oil Adjustment)</strong></div>
      <div>Telemetry Context: Magnification 100x • Focus Knob +4.2mm • Auto-Screenshot Attached</div>
      <div style="color: var(--accent-amber); margin-top: 4px;">
        <i class="fa-solid fa-clock"></i> Guaranteed SLA: Clarification response before 05:00 PM today.
      </div>
    `;
    playSound("click");
  };

  // Toggle Contextual Integrity drawer in idea cards
  window.toggleCiAudit = function(btn) {
    const drawer = btn.closest(".ci-audit-drawer");
    if (drawer) {
      drawer.classList.toggle("open");
      const icon = btn.querySelector("i.fa-chevron-down, i.fa-chevron-up");
      if (icon) {
        icon.classList.toggle("fa-chevron-down");
        icon.classList.toggle("fa-chevron-up");
      }
      playSound("subtle");
    }
  };
}

/* ==========================================================================
   6. SOUND EFFECTS (WEB AUDIO API - SUBTLE, MUTEABLE)
   ========================================================================== */
let audioCtx = null;
let soundEnabled = true;

function initAudio() {
  const toggleBtn = document.getElementById("soundToggle");
  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      soundEnabled = !soundEnabled;
      toggleBtn.classList.toggle("active", soundEnabled);
      toggleBtn.innerHTML = soundEnabled ? '<i class="fa-solid fa-volume-high"></i>' : '<i class="fa-solid fa-volume-xmark"></i>';
      showToast(soundEnabled ? "Sound effects enabled" : "Sound muted");
    });
  }
}

function playSound(type) {
  if (!soundEnabled) return;
  try {
    if (!audioCtx) {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.connect(gain);
    gain.connect(audioCtx.destination);

    const now = audioCtx.currentTime;
    if (type === "click") {
      osc.type = "sine";
      osc.frequency.setValueAtTime(600, now);
      osc.frequency.exponentialRampToValueAtTime(300, now + 0.05);
      gain.gain.setValueAtTime(0.08, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);
      osc.start(now);
      osc.stop(now + 0.05);
    } else if (type === "open") {
      osc.type = "triangle";
      osc.frequency.setValueAtTime(350, now);
      osc.frequency.exponentialRampToValueAtTime(800, now + 0.1);
      gain.gain.setValueAtTime(0.1, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.1);
      osc.start(now);
      osc.stop(now + 0.1);
    } else { // subtle
      osc.type = "sine";
      osc.frequency.setValueAtTime(440, now);
      gain.gain.setValueAtTime(0.04, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.03);
      osc.start(now);
      osc.stop(now + 0.03);
    }
  } catch (e) {
    // Audio context not allowed before user gesture
  }
}

/* ==========================================================================
   7. SUBMISSION & GITHUB LINK GENERATOR
   ========================================================================== */
function initSubmissionGenerators() {
  const copyBtn = document.getElementById("copySubmissionUrl");
  const githubBtn = document.getElementById("openGithubSetup");

  if (copyBtn) {
    copyBtn.addEventListener("click", () => {
      const url = window.location.href;
      navigator.clipboard.writeText(url).then(() => {
        showToast("Live Website URL copied to clipboard for Classroom!");
        playSound("open");
      }).catch(() => {
        showToast("URL: " + url);
      });
    });
  }

  if (githubBtn) {
    githubBtn.addEventListener("click", () => {
      const modal = document.getElementById("githubModal");
      if (modal) {
        modal.classList.add("active");
        playSound("open");
      }
    });
  }
}

function showToast(msg) {
  let toast = document.getElementById("toastNotice");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "toastNotice";
    toast.className = "toast-notice";
    document.body.appendChild(toast);
  }
  toast.innerHTML = `<i class="fa-solid fa-circle-check" style="color: var(--accent-cyan);"></i> ${msg}`;
  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
  }, 3200);
}
