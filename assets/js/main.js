// main.js - Shaikh Interiors Main JavaScript File

document.addEventListener("DOMContentLoaded", function () {
  // ===== Mobile Menu Toggle =====
  const mobileMenuBtn = document.querySelector(".mobile-menu");
  const navMenu = document.querySelector("nav ul");

  mobileMenuBtn.addEventListener("click", function () {
    this.classList.toggle("active");
    navMenu.classList.toggle("active");

    // Toggle between hamburger and close icon
    const icon = this.querySelector("i");
    if (icon.classList.contains("fa-bars")) {
      icon.classList.remove("fa-bars");
      icon.classList.add("fa-times");
    } else {
      icon.classList.remove("fa-times");
      icon.classList.add("fa-bars");
    }
  });

  // ===== Header Scroll Effect =====
  const header = document.querySelector("header");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 100) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  // ===== Smooth Scrolling for Anchor Links =====
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      if (targetId === "#") return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: "smooth",
        });

        // Close mobile menu if open
        if (navMenu.classList.contains("active")) {
          mobileMenuBtn.click();
        }
      }
    });
  });

  // ===== Portfolio Filtering =====
  const filterButtons = document.querySelectorAll(".filter-btn");
  const portfolioItems = document.querySelectorAll(".portfolio-item");

  if (filterButtons.length > 0 && portfolioItems.length > 0) {
    filterButtons.forEach((button) => {
      button.addEventListener("click", function () {
        // Update active button
        filterButtons.forEach((btn) => btn.classList.remove("active"));
        this.classList.add("active");

        // Filter items
        const filter = this.dataset.filter;

        portfolioItems.forEach((item) => {
          if (filter === "all" || item.dataset.category === filter) {
            item.style.display = "block";
            setTimeout(() => {
              item.style.opacity = "1";
            }, 50);
          } else {
            item.style.opacity = "0";
            setTimeout(() => {
              item.style.display = "none";
            }, 300);
          }
        });
      });
    });
  }

  // ===== Portfolio Item Hover Effects =====
  const portfolioItemsContainer = document.querySelector(".portfolio-items");

  if (portfolioItemsContainer) {
    portfolioItemsContainer.addEventListener("mouseover", function (e) {
      const item = e.target.closest(".portfolio-item");
      if (item) {
        const overlay = item.querySelector(".portfolio-overlay");
        if (overlay) {
          overlay.style.opacity = "1";
          overlay.style.visibility = "visible";
        }
      }
    });

    portfolioItemsContainer.addEventListener("mouseout", function (e) {
      const item = e.target.closest(".portfolio-item");
      if (item) {
        const overlay = item.querySelector(".portfolio-overlay");
        if (overlay) {
          overlay.style.opacity = "0";
          overlay.style.visibility = "hidden";
        }
      }
    });
  }

  // ===== Active Link Highlighting =====
  const navLinks = document.querySelectorAll("nav ul li a");
  const currentPage =
    window.location.pathname.split("/").pop() || "InteriorDesign.html";

  navLinks.forEach((link) => {
    const linkPage = link.getAttribute("href");
    if (linkPage === currentPage) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });

  // ===== Lazy Loading for Images =====
  const lazyImages = document.querySelectorAll("img[data-src]");

  if ("IntersectionObserver" in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.removeAttribute("data-src");
          observer.unobserve(img);
        }
      });
    });

    lazyImages.forEach((img) => {
      imageObserver.observe(img);
    });
  } else {
    // Fallback for browsers without IntersectionObserver
    lazyImages.forEach((img) => {
      img.src = img.dataset.src;
    });
  }

  // ===== Scroll Reveal Animation =====
  const scrollReveal = ScrollReveal({
    origin: "bottom",
    distance: "60px",
    duration: 1000,
    delay: 200,
    reset: true,
  });

  scrollReveal.reveal(".portfolio-item", {
    interval: 200,
    easing: "cubic-bezier(0.5, 0, 0, 1)",
  });

  // ===== Preloader =====
  window.addEventListener("load", function () {
    const preloader = document.querySelector(".preloader");
    if (preloader) {
      preloader.style.opacity = "0";
      setTimeout(() => {
        preloader.style.display = "none";
      }, 500);
    }
  });
});

// ===== Helper Functions =====
function debounce(func, wait = 20, immediate = true) {
  let timeout;
  return function () {
    const context = this,
      args = arguments;
    const later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

// main.js
document.addEventListener("DOMContentLoaded", function () {
  // Mobile menu toggle
  const mobileMenu = document.querySelector(".mobile-menu");
  const navUl = document.querySelector("nav ul");

  mobileMenu.addEventListener("click", function () {
    navUl.classList.toggle("active");
    this.classList.toggle("fa-times");
    this.classList.toggle("fa-bars");
  });

  // Header scroll effect
  window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    if (window.scrollY > 100) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
});
