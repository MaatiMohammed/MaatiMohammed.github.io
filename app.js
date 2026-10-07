const projects = [
  {
    name: "VXcars — Automotive Showroom Platform",
    kind: "Full-Stack",
    badge: "Product case study",
    categories: ["full-stack", "web", "tools"],
    featured: true,
    description: "A full-stack showroom platform for real-world vehicle inventory management, with an administrative workflow connected to a dedicated API and database.",
    tags: ["Next.js", "NestJS", "PostgreSQL", "Prisma"],
    details: [
      ["Problem", "A showroom needs a clear way to maintain vehicle listings, details, availability and customer-facing information."],
      ["Architecture", "Next.js and React frontend → NestJS REST API → PostgreSQL database managed with Prisma."],
      ["Features", "Vehicle inventory and details, image management, search and filtering, sold inventory handling, vehicle visibility and status management, showroom and contact information, and map/contact integration."],
      ["Engineering", "Frontend/backend integration, relational data management and administrative workflows."]
    ]
  },
  {
    name: "Arabic Dialect Identification with MARBERT",
    kind: "AI / NLP",
    badge: "Research pipeline",
    categories: ["ai", "research", "tools"],
    featured: true,
    description: "A QADI preparation and training pipeline for studying Arabic dialect identification with a MARBERT-based classifier and controlled experiments around text normalization and training-set size.",
    tags: ["Python", "PyTorch", "MARBERT", "QADI"],
    repository: "https://github.com/MaatiMohammed/marbert-adi-normalization",
    details: [
      ["Research question", "How do text normalization choices and training-set size relate to Arabic dialect classification using MARBERT?"],
      ["Approach", "The repository prepares QADI data, creates normalized text and smaller subsets, then trains a Hugging Face Transformers classifier using MARBERT."],
      ["Pipeline", "Dataset conversion → light Arabic text normalization → subset creation → classifier training."],
      ["Scope", "The repository documents the preparation and training pipeline; no benchmark score is presented here."]
    ]
  },
  {
    name: "Cross-Dialect Generalization with DziriBERT",
    kind: "AI / NLP",
    badge: "Research question",
    categories: ["ai", "research"],
    featured: true,
    description: "An evaluation direction asking how an Algerian Arabic pretrained language model generalizes to broader, country-level Arabic dialect classification.",
    tags: ["DziriBERT", "Transformers", "Arabic NLP", "Generalization"],
    details: [
      ["Research question", "How well does an Algerian Arabic pretrained language model generalize to other Arabic dialects?"],
      ["Focus", "Cross-dialect evaluation, country-level dialect identification and the diversity of Arabic varieties."],
      ["Scope", "This portfolio describes the research question and evaluation focus only; no benchmark values or repository link are asserted."]
    ]
  },
  {
    name: "Arabic Dialect Labeling Tool",
    kind: "Research tooling",
    badge: "Arabic NLP",
    categories: ["ai", "research", "tools"],
    description: "A research-support tool for Arabic dialect labeling, presented as a practical part of an Arabic NLP workflow.",
    tags: ["Arabic NLP", "Dialect labeling", "Research tool"],
    repository: "https://github.com/MaatiMohammed/Arabic-Dialect-Labeling-Tool",
    details: [
      ["Purpose", "A tool related to Arabic dialect labeling and NLP research."],
      ["Repository", "The linked public repository is the source of truth for its current implementation and usage."]
    ]
  },
  {
    name: "Academic Research Hub",
    kind: "Academic",
    badge: "Research platform",
    categories: ["academic", "web"],
    description: "An academic and research-oriented web project, maintained as part of a broader portfolio of research and software work.",
    tags: ["Academic", "Web application"],
    repository: "https://github.com/MaatiMohammed/Academic-Research-Hub",
    details: [
      ["Focus", "An academic/research-oriented web project."],
      ["Repository", "See the public repository for verified features and implementation details."]
    ]
  },
  {
    name: "Univ-Platform",
    kind: "Academic software",
    badge: "Earlier work",
    categories: ["academic", "full-stack", "web"],
    description: "An academic management platform concept centered on university students, research and communication workflows.",
    tags: ["University systems", "Web application"],
    details: [
      ["Focus", "A university platform for academic management, students, research and communication."],
      ["Context", "Included in the project archive as earlier work."]
    ]
  },
  {
    name: "AraSpotlight",
    kind: "Arabic NLP",
    badge: "Earlier work",
    categories: ["ai", "research", "web"],
    description: "An Arabic text-analysis and commentary system inspired by DBpedia Spotlight, for entity recognition and contextual insights.",
    tags: ["Arabic text", "Entity recognition"],
    details: [
      ["Focus", "Arabic text analysis and commentary with entity recognition and contextual insights."],
      ["Context", "Included in the project archive as earlier work."]
    ]
  },
  {
    name: "Journalistes",
    kind: "Web application",
    badge: "Earlier work",
    categories: ["web"],
    description: "A web platform intended to help journalists showcase their work among peers.",
    tags: ["Web application", "Publishing"],
    details: [
      ["Focus", "A platform for journalists to showcase work among peers."],
      ["Context", "Included in the project archive as earlier work."]
    ]
  },
  {
    name: "Expense Tracker App",
    kind: "Desktop tool",
    badge: "Earlier work",
    categories: ["tools"],
    description: "A desktop application built with Tkinter for managing personal expenses.",
    tags: ["Python", "Tkinter"],
    details: [
      ["Focus", "Desktop personal-expense management built with Tkinter."],
      ["Context", "Included in the project archive as earlier work."]
    ]
  },
  {
    name: "InnoPlan",
    kind: "Collaborative project",
    badge: "Frontend Developer",
    categories: ["web", "full-stack"],
    description: "Collaborative work with my role identified as Frontend Developer.",
    tags: ["Frontend", "Collaborative"],
    details: [
      ["Role", "Frontend Developer."],
      ["Context", "Presented as collaborative work, not as a solo-built project."]
    ]
  }
];

const publications = [
  { title: "Semantic Annotation of Arabic Text: A Pipeline-Centric Review", areas: ["Arabic NLP", "AI"] },
  { title: "Arabic Dialect Identification on Social Media: A Review of Datasets, Models, and Emerging Trends", areas: ["Arabic NLP", "AI"] },
  { title: "MIND-META: A Monitoring-Based Adaptive Strategy for Non-Stationary Multi-Agent Collaboration", areas: ["Other Research", "AI"] }
];

const skillGroups = [
  { name: "AI & Natural Language Processing", items: ["Python", "PyTorch", "Hugging Face Transformers", "NLP", "Machine Learning", "Deep Learning", "Arabic NLP", "MARBERT", "AraBERT"] },
  { name: "Frontend & Backend", items: ["React", "Next.js", "Node.js", "NestJS", "REST APIs", "Flask"] },
  { name: "Data & Databases", items: ["PostgreSQL", "MongoDB", "SQL", "NoSQL", "Prisma"] },
  { name: "Development", items: ["Git", "GitHub"] }
];

const projectCategories = [
  ["All", "all"],
  ["AI / NLP", "ai"],
  ["Research", "research"],
  ["Full-Stack", "full-stack"],
  ["Web Applications", "web"],
  ["Tools", "tools"],
  ["Academic", "academic"]
];

const publicationCategories = [
  ["All", "all"],
  ["2026", "2026"],
  ["Arabic NLP", "Arabic NLP"],
  ["AI", "AI"],
  ["Other Research", "Other Research"]
];

const projectList = document.querySelector("#project-list");
const projectFilters = document.querySelector("#project-filters");
const publicationList = document.querySelector("#publication-list");
const publicationFilters = document.querySelector("#publication-filters");
const projectDialog = document.querySelector("#project-dialog");
const dialogContent = document.querySelector("#dialog-content");
const copyEmailButton = document.querySelector(".copy-email");
const copyStatus = document.querySelector(".copy-status");

function renderFilters(container, options, onSelect) {
  container.innerHTML = options.map(([label, value], index) =>
    `<button class="filter-button" type="button" data-filter="${value}" aria-pressed="${index === 0}">${label}</button>`
  ).join("");
  container.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-filter]");
    if (!button) return;
    container.querySelectorAll("button").forEach((item) => item.setAttribute("aria-pressed", String(item === button)));
    onSelect(button.dataset.filter);
  });
}

function renderProjects(filter = "all") {
  const filteredProjects = projects.filter((project) => filter === "all" || project.categories.includes(filter));
  projectList.innerHTML = filteredProjects.map((project, index) => `
    <article class="project-card${project.featured ? " featured" : ""}" style="animation-delay:${Math.min(index * 35, 210)}ms">
      <div class="project-topline"><span class="project-kicker"><span aria-hidden="true">◈</span>${project.kind}</span><span class="project-badge">${project.badge}</span></div>
      <h3>${project.name}</h3>
      <p>${project.description}</p>
      <div class="project-tags" aria-label="Technologies and topics">${project.tags.map((tag) => `<span>${tag}</span>`).join("")}</div>
      <div class="project-bottom"><span class="project-type">${project.featured ? "Featured work" : "Selected project"}</span><div class="project-actions">${project.repository ? `<a href="${project.repository}" target="_blank" rel="noopener noreferrer">Repository ↗</a>` : ""}<button type="button" data-project="${projects.indexOf(project)}">Details <span aria-hidden="true">→</span></button></div></div>
    </article>
  `).join("");
}

function renderPublications(filter = "all") {
  const matching = publications.filter((publication) => {
    if (filter === "all") return true;
    if (filter === "2026") return publication.year === 2026;
    return publication.areas.includes(filter);
  });
  publicationList.innerHTML = matching.length ? matching.map((publication) => `
    <article class="publication-item">
      <div class="publication-meta"><span>${publication.areas[0]}</span><span>ResearchGate listing</span></div>
      <div class="publication-copy"><h3>${publication.title}</h3><p>Bibliographic details and publication status are not stated here.</p></div>
      <a class="publication-link" href="https://www.researchgate.net/profile/Mohammed-Maati" target="_blank" rel="noopener noreferrer">Profile ↗</a>
    </article>
  `).join("") : `<p class="publication-empty">No listing with a verified ${filter} category is available here.</p>`;
}

function renderSkills() {
  document.querySelector("#skills-list").innerHTML = skillGroups.map((group) => `
    <article class="skill-group reveal"><h3>${group.name}</h3><div class="skill-chips">${group.items.map((item) => `<span>${item}</span>`).join("")}</div></article>
  `).join("");
}

function openProjectDetails(index) {
  const project = projects[index];
  if (!project) return;
  dialogContent.innerHTML = `
    <span class="project-kicker">${project.kind}</span>
    <h2 id="dialog-title">${project.name}</h2>
    <p>${project.description}</p>
    ${project.details.map(([heading, text]) => `<section class="dialog-detail"><h3>${heading}</h3><p>${text}</p></section>`).join("")}
    <div class="project-tags">${project.tags.map((tag) => `<span>${tag}</span>`).join("")}</div>
    ${project.repository ? `<div class="dialog-actions"><a href="${project.repository}" target="_blank" rel="noopener noreferrer">View public repository ↗</a></div>` : ""}
  `;
  projectDialog.showModal();
  projectDialog.querySelector(".dialog-close").focus();
}

renderFilters(projectFilters, projectCategories, renderProjects);
renderFilters(publicationFilters, publicationCategories, renderPublications);
renderProjects();
renderPublications();
renderSkills();

copyEmailButton.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(copyEmailButton.dataset.copyEmail);
    copyStatus.textContent = "Copied";
  } catch {
    copyStatus.textContent = "Copy unavailable. Select the email address to copy it.";
  }
});

projectList.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-project]");
  if (button) openProjectDetails(Number(button.dataset.project));
});

projectDialog.querySelector(".dialog-close").addEventListener("click", () => projectDialog.close());
projectDialog.addEventListener("click", (event) => {
  if (event.target === projectDialog) projectDialog.close();
});

const themeToggle = document.querySelector(".theme-toggle");
themeToggle.addEventListener("click", () => {
  const nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  document.documentElement.dataset.theme = nextTheme;
  localStorage.setItem("portfolio-theme", nextTheme);
  themeToggle.setAttribute("aria-label", `Switch to ${nextTheme === "dark" ? "light" : "dark"} mode`);
  document.querySelector('meta[name="theme-color"]').setAttribute("content", nextTheme === "dark" ? "#0f172a" : "#f8fafc");
});
themeToggle.setAttribute("aria-label", `Switch to ${document.documentElement.dataset.theme === "dark" ? "light" : "dark"} mode`);

const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#primary-navigation");
function closeNavigation() {
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Open navigation");
  navigation.classList.remove("is-open");
}
menuToggle.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") !== "true";
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
  navigation.classList.toggle("is-open", isOpen);
});
navigation.addEventListener("click", (event) => {
  if (event.target.closest("a")) closeNavigation();
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeNavigation();
});

const revealElements = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.12 });
  revealElements.forEach((element) => revealObserver.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add("is-visible"));
}

const navigationLinks = [...navigation.querySelectorAll('a[href^="#"]')];
if ("IntersectionObserver" in window) {
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navigationLinks.forEach((link) => {
        if (link.hash === `#${entry.target.id}`) link.setAttribute("aria-current", "location");
        else link.removeAttribute("aria-current");
      });
    });
  }, { rootMargin: "-30% 0px -60% 0px" });
  navigationLinks.forEach((link) => {
    const section = document.querySelector(link.hash);
    if (section) sectionObserver.observe(section);
  });
}
