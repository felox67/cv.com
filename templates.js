/* =========================================================
   TEMPLATES.JS  –  CV data, 12 template designs, page logic
   (all names, employers and publications are SAMPLE content)
========================================================= */

/* ---------- sample people (one per style of CV) ---------- */
const av = c => "data:image/svg+xml;utf8," + encodeURIComponent(
  "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' fill='" + c +
  "'/><circle cx='50' cy='38' r='17' fill='#fff' opacity='.92'/><path d='M14 100c0-24 16-38 36-38s36 14 36 38z' fill='#fff' opacity='.92'/></svg>");

const D = {
  dev: {
    n: "Felix Odhiambo", t: "Web Developer & Graphic Designer", e: "felix.odhiambo@email.com", p: "+254 712 345 678", l: "Nairobi, Kenya",
    s: "Web developer with 5 years of experience building fast, responsive websites and brand identities for small businesses and startups. Skilled in HTML, CSS, JavaScript and Figma, with a record of delivering projects on time and improving client engagement.",
    x: [
      { r: "Web Developer", c: "BrightPath Digital, Nairobi", d: "2022 – Present", b: ["Built and maintained 25+ client websites, cutting average page load time by 40%.", "Led the redesign of an online store that raised monthly orders by 32%."] },
      { r: "Graphic Designer", c: "Pixel House Studio, Nairobi", d: "2019 – 2022", b: ["Designed logos, brochures and social media kits for more than 60 clients.", "Trained 4 junior designers on Adobe Illustrator and brand guidelines."] }],
    u: [{ d: "BSc Information Technology", s: "University of Nairobi", y: "2015 – 2019" }],
    k: ["HTML5 & CSS3", "JavaScript", "React", "Figma", "Adobe Illustrator", "SEO Basics", "Git & GitHub"],
    lv: [95, 90, 80, 85, 88, 75, 82],
    lg: ["English – Fluent", "Kiswahili – Native"],
    a: ["Google UX Design Certificate (2021)", "Best Junior Designer Award, Pixel House Studio (2020)"],
    g: [["Web Development", "Built responsive, accessible websites with HTML, CSS, JavaScript and React, optimised for speed and search engines."],
        ["Graphic Design", "Created logos, brand kits and marketing materials in Illustrator, Photoshop and Figma for 60+ clients."],
        ["Communication & Teamwork", "Gathered requirements directly from clients and mentored junior designers."]],
    st: [["5+", "Years experience"], ["60+", "Clients served"], ["25+", "Websites built"]],
    ts: "Frontend developer with 5 years of experience turning Figma designs into fast, accessible React websites. Proven record of improving page speed and conversions for growing businesses.",
    m: [["React & modern JavaScript", "Built 25+ websites; rebuilt an online store in React, raising orders by 32%."],
        ["Performance & SEO", "Cut average page load time by 40% across client projects."],
        ["Design collaboration", "Turn Figma designs into pixel-perfect code, backed by 3 years as a graphic designer."]]
  },
  des: {
    n: "Amina Hassan", t: "Creative Director & Motion Designer", e: "amina@hassanstudio.co.ke", p: "+254 722 118 904", l: "Mombasa, Kenya",
    s: "Award-nominated creative with 8 years in branding, video and motion graphics. I turn bold ideas into visuals people remember, from TV commercials to music-video titles.",
    x: [
      { r: "Creative Director", c: "Coastline Media, Mombasa", d: "2021 – Present", b: ["Lead 7 designers and editors delivering 40+ campaigns a year.", "Directed a tourism campaign that reached 2.3M viewers online."] },
      { r: "Motion Designer", c: "Reel Africa Productions", d: "2017 – 2021", b: ["Produced title sequences and animated ads for 3 regional TV networks.", "Cut video turnaround by 30% with a reusable template library."] }],
    u: [{ d: "Diploma in Graphic Design & Animation", s: "Coast Institute of Creative Arts", y: "2014 – 2016" }],
    k: ["After Effects", "Premiere Pro", "Illustrator", "Photoshop", "Cinema 4D", "Storyboarding"]
  },
  fin: {
    n: "Daniel Otieno", t: "Senior Financial Analyst", e: "daniel.otieno@email.com", p: "+254 733 456 210", l: "Nairobi, Kenya",
    s: "Finance professional with 9 years in commercial banking and corporate finance. Experienced in financial modelling, risk assessment and regulatory reporting.",
    x: [
      { r: "Senior Financial Analyst", c: "Equity Trust Bank, Nairobi", d: "2019 – Present", b: ["Prepare monthly forecasts and variance reports for a KES 4.5 billion loan portfolio.", "Identified KES 38 million in savings through budget restructuring."] },
      { r: "Financial Analyst", c: "Savanna Capital Ltd, Nairobi", d: "2015 – 2019", b: ["Built valuation models used in 12 corporate transactions.", "Ensured full compliance with regulatory reporting requirements."] }],
    u: [{ d: "Bachelor of Commerce (Finance)", s: "Strathmore University", y: "2010 – 2014" }],
    k: ["Financial Modelling", "Risk Analysis", "IFRS Reporting", "Advanced Excel", "Power BI", "Budgeting"],
    a: ["Certified Public Accountant (CPA-K)", "CFA Level II Candidate"]
  },
  acad: {
    n: "Dr. Grace Wanjiru", t: "Senior Lecturer, Computer Science", e: "g.wanjiru@lakeview.ac.ke", p: "+254 700 222 333", l: "Nairobi, Kenya",
    s: "Researcher and educator in machine learning and health informatics with 12 years of university teaching and 20+ peer-reviewed publications.",
    x: [
      { r: "Senior Lecturer", c: "Dept. of Computer Science, Lakeview University", d: "2018 – Present", b: ["Teach Machine Learning, Data Structures and Research Methods to 300+ students a year.", "Supervised 9 MSc and 3 PhD students to completion."] },
      { r: "Lecturer", c: "Dept. of Computer Science, Lakeview University", d: "2013 – 2018", b: ["Designed a new undergraduate course in Health Informatics.", "Secured a KES 6 million research grant for a rural diagnostics project."] }],
    u: [{ d: "PhD, Computer Science", s: "University of Cape Town", y: "2009 – 2013" }, { d: "MSc, Computer Science", s: "University of Nairobi", y: "2006 – 2008" }],
    k: ["Machine Learning", "Health Informatics", "Explainable AI", "Data Science Education"],
    pub: ["Wanjiru, G. & Otieno, P. (2023). Predicting maternal health risks with machine learning in low-resource clinics. <i>Journal of Health Informatics in Africa</i>, 12(2), 45–58.",
          "Wanjiru, G. (2021). Explainable AI for rural diagnostics. <i>African Journal of Computing</i>, 9(1), 112–125.",
          "Wanjiru, G., Kimani, L. & Achieng, R. (2019). A survey of data quality in county health records. <i>Proceedings of the East Africa Computing Conference</i>, 201–209."],
    a: ["Best Young Researcher Award, Lakeview University (2019)", "Member, Kenya Computer Society; peer reviewer, Journal of Health Informatics in Africa"]
  },
  exe: {
    n: "James Mwangi", t: "Chief Operating Officer", e: "james.mwangi@email.com", p: "+254 711 908 765", l: "Nairobi, Kenya",
    s: "Results-driven executive with 18 years leading operations across East Africa in manufacturing and logistics. Track record of scaling businesses, driving profitability and building high-performing leadership teams.",
    x: [
      { r: "Chief Operating Officer", c: "Lakeside Logistics Group", d: "2018 – Present", b: ["Grew annual revenue from KES 1.2B to KES 3.4B in five years.", "Reduced operating costs by 22% through supply chain restructuring.", "Lead 850 employees across 5 countries."] },
      { r: "Regional Operations Director", c: "Rift Manufacturing Ltd", d: "2011 – 2018", b: ["Opened 3 regional plants on time and 8% under budget.", "Introduced lean processes that improved productivity by 27%."] }],
    u: [{ d: "MBA, Strategic Management", s: "Strathmore Business School", y: "2008 – 2010" }, { d: "BSc Mechanical Engineering", s: "University of Nairobi", y: "1999 – 2003" }],
    k: ["Strategic Planning", "P&L Management", "Change Leadership", "M&A Integration", "Board Reporting"],
    st: [["3x", "Revenue growth"], ["22%", "Cost reduction"], ["850", "People led"]],
    a: ["Board Member, Kenya Association of Manufacturers (2020 – Present)", "Fellow, Institute of Directors"]
  }
};

/* ---------- small helpers ---------- */
const li = a => "<ul>" + a.map(x => "<li>" + x + "</li>").join("") + "</ul>";
const S = (h, c) => "<section><h3>" + h + "</h3>" + c + "</section>";
const jobs = P => P.x.map(j => `<div class="job"><div class="jh"><b>${j.r}</b><i>${j.d}</i></div><div class="jc">${j.c}</div>${li(j.b)}</div>`).join("");
const edu = P => P.u.map(e => `<div class="job"><div class="jh"><b>${e.d}</b><i>${e.y}</i></div><div class="jc">${e.s}</div></div>`).join("");
const cl = P => [P.e, P.p, P.l].join(" &nbsp;•&nbsp; ");
const ic = (i, t) => `<div class="ci"><span class="material-icons">${i}</span>${t}</div>`;
const con = P => ic("mail", P.e) + ic("phone", P.p) + ic("place", P.l);
const head = P => `<header><h1>${P.n}</h1><div class="tt">${P.t}</div><div class="cl">${cl(P)}</div></header>`;
const chips = a => '<div class="chips">' + a.map(x => "<span>" + x + "</span>").join("") + "</div>";
const sks = a => a.map(x => `<div class="sk">${x}</div>`).join("");

/* ---------- the 12 templates ---------- */
const T = {
  chronological: { name: "Chronological", cat: "professional", tag: "Popular",
    desc: "Most common. Latest job first. For people with steady job history.",
    r: () => { const P = D.dev; return `<div class="cv t1">${head(P)}${S("Professional Summary", `<p>${P.s}</p>`)}${S("Work Experience", jobs(P))}${S("Education", edu(P))}${S("Skills", `<p>${P.k.join(" • ")}</p>`)}</div>`; } },

  functional: { name: "Functional", cat: "professional",
    desc: "Focuses on skills, not dates. For students, career changers, gaps.",
    r: () => { const P = D.dev; return `<div class="cv t2">${head(P)}${S("Professional Summary", `<p>${P.s}</p>`)}${S("Key Skills & Accomplishments", P.g.map(g => `<div class="job"><b>${g[0]}</b><p>${g[1]}</p></div>`).join(""))}${S("Employment History", P.x.map(j => `<div class="job"><b>${j.r}</b> — ${j.c}</div>`).join(""))}${S("Education", edu(P))}</div>`; } },

  hybrid: { name: "Combination (Hybrid)", cat: "professional", tag: "Trending",
    desc: "Mix of skills + work history. Most popular now.",
    r: () => { const P = D.dev; return `<div class="cv t3">${head(P)}<div class="bd">${S("Profile", `<p>${P.s}</p>`)}${S("Core Skills", chips(P.k))}${S("Work Experience", jobs(P))}${S("Education", edu(P))}${S("Certifications & Awards", li(P.a))}</div></div>`; } },

  targeted: { name: "Targeted / Job-Specific", cat: "professional",
    desc: "CV tailored to one specific job. High success rate.",
    r: () => { const P = D.dev; return `<div class="cv t4">${head(P).replace(P.t, "Frontend Developer")}<div class="bn">Applying for: Frontend Developer — Savannah Tech Ltd</div>${S("Tailored Summary", `<p>${P.ts}</p>`)}${S("How I Match Your Requirements", '<div class="mt">' + P.m.map(m => `<b>${m[0]}</b><span>${m[1]}</span>`).join("") + "</div>")}${S("Relevant Experience", jobs(P))}${S("Education", edu(P))}</div>`; } },

  modern: { name: "Modern", cat: "creative", tag: "Popular",
    desc: "Clean, with color, icons, sidebar. For tech, marketing, startups.",
    r: () => { const P = D.dev; return `<div class="cv t5 fx"><div class="sb"><img src="${av("#3b82f6")}" alt="Profile photo">${S("Contact", con(P))}${S("Skills", sks(P.k))}${S("Languages", P.lg.map(x => `<div class="ci">${x}</div>`).join(""))}</div><div class="mn"><h1>${P.n}</h1><div class="tt">${P.t}</div>${S("Profile", `<p>${P.s}</p>`)}${S("Experience", jobs(P))}${S("Education", edu(P))}</div></div>`; } },

  corporate: { name: "Professional / Corporate", cat: "professional",
    desc: "Simple, no color, black and white. For law, banking, government.",
    r: () => { const P = D.fin; return `<div class="cv t6">${head(P)}${S("Professional Summary", `<p>${P.s}</p>`)}${S("Professional Experience", jobs(P))}${S("Education", edu(P))}${S("Qualifications", li(P.a))}${S("Core Competencies", `<p>${P.k.join(" | ")}</p>`)}</div>`; } },

  minimalist: { name: "Minimalist / Simple", cat: "simple",
    desc: "Lots of white space, one font. ATS-friendly.",
    r: () => { const P = D.dev; return `<div class="cv t7">${head(P)}${S("Profile", `<p>${P.s}</p>`)}${S("Experience", jobs(P))}${S("Education", edu(P))}${S("Skills", `<p>${P.k.join(", ")}</p>`)}</div>`; } },

  creative: { name: "Creative", cat: "creative", tag: "New",
    desc: "Bold colors, graphics, unique layout. For designers, artists, video.",
    r: () => { const P = D.des; return `<div class="cv t8"><div class="top"><img src="${av("#111")}" alt="Profile photo"><div><h1>${P.n}</h1><div class="tt">${P.t}</div></div></div><div class="cols"><div class="lf">${S("About Me", `<p>${P.s}</p>`)}${S("Experience", jobs(P))}${S("Education", edu(P))}</div><div class="rt">${S("Contact", con(P))}${S("Tools", sks(P.k))}</div></div></div>`; } },

  academic: { name: "Academic / CV", cat: "professional",
    desc: "Long, detailed with publications, research. For lecturers, doctors.",
    r: () => { const P = D.acad; return `<div class="cv t9">${head(P)}${S("Research Interests", `<p>${P.k.join("; ")}</p>`)}${S("Education", edu(P))}${S("Academic Appointments", jobs(P))}${S("Selected Publications", P.pub.map((x, i) => `<p class="pub">${i + 1}. ${x}</p>`).join(""))}${S("Awards & Service", li(P.a))}${S("Referees", "<p>Available on request.</p>")}</div>`; } },

  infographic: { name: "Infographic / Visual", cat: "creative",
    desc: "Charts, skill bars, timeline. For portfolio.",
    r: () => { const P = D.dev; return `<div class="cv t10 fx"><div class="sb"><img src="${av("#0f766e")}" alt="Profile photo">${P.st.map(s => `<div class="st"><b>${s[0]}</b>${s[1]}</div>`).join("")}${S("Skills", P.k.map((k, i) => `<div class="bar">${k}<div><i style="width:${P.lv[i]}%"></i></div></div>`).join(""))}${S("Contact", con(P))}</div><div class="mn"><h1>${P.n}</h1><div class="tt">${P.t}</div>${S("Profile", `<p>${P.s}</p>`)}${S("Career Timeline", '<div class="tl">' + jobs(P) + "</div>")}${S("Education", edu(P))}</div></div>`; } },

  executive: { name: "Executive", cat: "professional",
    desc: "2-3 pages, focuses on achievements and leadership.",
    r: () => { const P = D.exe; return `<div class="cv t11"><div class="top"><h1>${P.n}</h1><div class="tt">${P.t}</div><div class="cl">${cl(P)}</div></div><div class="bd">${S("Executive Summary", `<p>${P.s}</p>`)}<div class="hl">${P.st.map(s => `<div><b>${s[0]}</b>${s[1]}</div>`).join("")}</div>${S("Leadership Experience", jobs(P))}${S("Core Competencies", chips(P.k))}${S("Education", edu(P))}${S("Board & Memberships", li(P.a))}</div></div>`; } },

  ats: { name: "ATS-Friendly", cat: "simple", tag: "Recommended",
    desc: "No tables, no images, plain text. To pass robot filters.",
    r: () => { const P = D.dev; return `<div class="cv t12">${head(P)}${S("Summary", `<p>${P.s}</p>`)}${S("Skills", `<p>${P.k.join(", ")}</p>`)}${S("Work Experience", jobs(P))}${S("Education", edu(P))}${S("Certifications", li(P.a))}</div>`; } }
};

/* ---------- build the cards ---------- */
const grid = document.getElementById("templatesGrid");
grid.innerHTML = Object.entries(T).map(([k, t]) => `
  <article class="template-card" data-category="${t.cat}" data-name="${t.name}">
    <div class="cv-thumb">${t.tag ? `<div class="cv-label">${t.tag}</div>` : ""}${t.r()}</div>
    <div class="template-card-info">
      <div><h3>${t.name}</h3><p>${t.desc}</p></div>
      <button class="preview-btn" data-template="${k}"><span class="material-icons">visibility</span>Preview</button>
    </div>
  </article>`).join("");

/* scale a 794px-wide CV page to fit its box */
function fit(box) {
  const cv = box.querySelector(".cv");
  if (!cv || !box.clientWidth) return;
  const s = box.clientWidth / 794;
  cv.style.transform = "scale(" + s + ")";
  if (box.dataset.auto) box.style.height = cv.offsetHeight * s + "px";
}
const fitAll = () => document.querySelectorAll(".cv-thumb,.cv-modal-view").forEach(fit);
fitAll();
window.addEventListener("resize", fitAll);
window.addEventListener("load", fitAll);

/* ---------- user info ---------- */
try {
  const u = JSON.parse(localStorage.getItem("cvbuilder_user") || "null");
  if (u) document.getElementById("userName").textContent = u.name || u.full_name || "User";
} catch (e) { console.log("User information could not be loaded."); }

/* ---------- mobile sidebar + profile dropdown ---------- */
const sidebar = document.getElementById("sidebar");
const sidebarOverlay = document.getElementById("sidebarOverlay");
document.getElementById("mobileMenu").addEventListener("click", () => {
  sidebar.classList.toggle("open"); sidebarOverlay.classList.toggle("show");
});
sidebarOverlay.addEventListener("click", () => {
  sidebar.classList.remove("open"); sidebarOverlay.classList.remove("show");
});
const profileDropdown = document.getElementById("profileDropdown");
document.getElementById("profileMini").addEventListener("click", e => {
  e.stopPropagation(); profileDropdown.classList.toggle("show");
});
document.addEventListener("click", () => profileDropdown.classList.remove("show"));

/* ---------- search + category filter ---------- */
const searchInput = document.getElementById("templateSearch");
const noResults = document.getElementById("noResults");
const filterButtons = document.querySelectorAll(".filter-btn");

function filterTemplates() {
  const q = searchInput.value.toLowerCase().trim();
  const active = document.querySelector(".filter-btn.active").dataset.category;
  let visible = 0;
  document.querySelectorAll(".template-card").forEach(card => {
    const name = card.dataset.name.toLowerCase(), cat = card.dataset.category.toLowerCase();
    const show = (name.includes(q) || cat.includes(q)) && (active === "all" || cat === active);
    card.style.display = show ? "block" : "none";
    if (show) visible++;
  });
  noResults.classList.toggle("show", visible === 0);
  fitAll();
}
searchInput.addEventListener("input", filterTemplates);
filterButtons.forEach(b => b.addEventListener("click", function () {
  filterButtons.forEach(x => x.classList.remove("active"));
  this.classList.add("active");
  filterTemplates();
}));

/* ---------- preview modal ---------- */
const previewModal = document.getElementById("previewModal");
const modalView = document.getElementById("largeCvPreview");
let selectedTemplate = "modern";

function closePreviewModal() {
  previewModal.classList.remove("show");
  document.body.classList.remove("modal-open");
}
document.querySelectorAll(".preview-btn").forEach(btn => btn.addEventListener("click", function (e) {
  e.preventDefault();
  selectedTemplate = this.dataset.template;
  const t = T[selectedTemplate];
  document.getElementById("modalTitle").textContent = t.name;
  document.getElementById("modalDescription").textContent = t.desc;
  modalView.innerHTML = t.r();
  previewModal.classList.add("show");
  document.body.classList.add("modal-open");
  fit(modalView);
}));
document.getElementById("closeModal").addEventListener("click", closePreviewModal);
document.getElementById("modalCancel").addEventListener("click", closePreviewModal);
document.getElementById("modalOverlay").addEventListener("click", closePreviewModal);
document.addEventListener("keydown", e => {
  if (e.key === "Escape" && previewModal.classList.contains("show")) closePreviewModal();
});

/* ---------- use template ---------- */
document.getElementById("useTemplate").addEventListener("click", () => {
  const cvId = "CV" + Date.now();
  /* temporary local storage – later replace with the Google Apps Script API */
  localStorage.setItem("current_cv", JSON.stringify({
    cv_id: cvId, cv_title: "My Professional CV", template: selectedTemplate,
    primary_color: "#16a34a", font: "Inter",
    created_at: new Date().toISOString(), updated_at: new Date().toISOString()
  }));
  window.location.href = "editor.html?id=" + encodeURIComponent(cvId);
});

/* ---------- logout + year ---------- */
function logout() {
  localStorage.removeItem("cvbuilder_user");
  localStorage.removeItem("current_cv");
  window.location.href = "login.html";
}
document.getElementById("logoutBtn").addEventListener("click", logout);
document.getElementById("dropdownLogout").addEventListener("click", logout);
document.getElementById("currentYear").textContent = new Date().getFullYear();