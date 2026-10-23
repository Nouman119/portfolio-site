// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const targetId = this.getAttribute("href");
    if (targetId === "#") return;
    
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      e.preventDefault();
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
});

// Project data store
const projectsData = {
  project1: {
    title: "Atelier Minimalist E-Commerce",
    overview:
      "A high-performance headless storefront built for a boutique furniture brand featuring instant search, filtering, and fluid page transitions designed to provide an ultra-luxurious browsing experience.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Shopify Storefront API"],
    challenges:
      "Optimizing image loading pipelines and state management for real-time cart updates without layout shifts.",
    improvements:
      "Implementing predictive search algorithms using vector embeddings and expanding localized currency support.",
    source: "https://github.com",
    demo: "https://example.com"
  },
  project2: {
    title: "Chronos Analytics Dashboard",
    overview:
      "Real-time data visualization platform engineered for enterprise metrics tracking with customizable modular widgets and responsive charting.",
    tech: ["React", "D3.js", "Tailwind CSS", "WebSocket API"],
    challenges:
      "Handling high-frequency streaming data updates while maintaining a smooth 60fps rendering performance across low-power devices.",
    improvements:
      "Adding export capabilities to PDF/CSV and introducing custom user-defined alerting rules.",
    source: "https://github.com",
    demo: "https://example.com"
  },
  project3: {
    title: "Vellum Editorial Journal",
    overview:
      "A digital publishing platform optimized for long-form reading with dynamic typography scaling, bookmarking, and complete offline reading support.",
    tech: ["Next.js", "MDX", "Tailwind CSS", "Service Workers (PWA)"],
    challenges:
      "Configuring robust offline caching strategies and ensuring pristine typographic hierarchy at every screen size.",
    improvements:
      "Integrating an AI-powered text summarization sidebar and custom annotation tools.",
    source: "https://github.com",
    demo: "https://example.com"
  }
};

const modal = document.getElementById("projectModal");

window.openModal = function (projectId) {
  const data = projectsData[projectId];
  if (!data) return;

  document.getElementById("modalTitle").textContent = data.title;
  document.getElementById("modalOverview").textContent = data.overview;
  document.getElementById("modalChallenges").textContent = data.challenges;
  document.getElementById("modalImprovements").textContent = data.improvements;
  document.getElementById("modalSourceLink").href = data.source;
  document.getElementById("modalDemoLink").href = data.demo;

  const techContainer = document.getElementById("modalTech");
  techContainer.innerHTML = "";
  data.tech.forEach((techItem) => {
    const span = document.createElement("span");
    span.className =
      "px-3 py-1 rounded-full border border-outline/30 text-body-sm text-on-surface";
    span.textContent = techItem;
    techContainer.appendChild(span);
  });

  modal.showModal();
};

window.closeModal = function () {
  modal.close();
};

// Close modal when clicking on the backdrop
modal.addEventListener("click", (event) => {
  const rect = modal.getBoundingClientRect();
  if (
    event.clientX < rect.left ||
    event.clientX > rect.right ||
    event.clientY < rect.top ||
    event.clientY > rect.bottom
  ) {
    modal.close();
  }
});

// Mobile Hamburger Menu Logic
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");
const menuIcon = document.getElementById("menuIcon");
const mobileNavLinks = document.querySelectorAll(".mobile-nav-link");

if (menuBtn && mobileMenu) {
  // Toggle mobile menu open/close
  menuBtn.addEventListener("click", () => {
    const isHidden = mobileMenu.classList.toggle("hidden");
    menuIcon.textContent = isHidden ? "menu" : "close";
  });

  // Close menu automatically when a link is clicked
  mobileNavLinks.forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.add("hidden");
      menuIcon.textContent = "menu";
    });
  });

  // Close menu when clicking outside
  document.addEventListener("click", (e) => {
    if (!menuBtn.contains(e.target) && !mobileMenu.contains(e.target)) {
      mobileMenu.classList.add("hidden");
      menuIcon.textContent = "menu";
    }
  });
}