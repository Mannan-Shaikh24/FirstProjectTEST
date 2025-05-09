// portfolio.js - JavaScript for Shaikh Interiors Portfolio Page

document.addEventListener("DOMContentLoaded", function () {
  // Mobile menu toggle
  const mobileMenuBtn = document.querySelector(".mobile-menu");
  const nav = document.querySelector("nav ul");

  if (mobileMenuBtn && nav) {
    mobileMenuBtn.addEventListener("click", function () {
      nav.classList.toggle("active");
      this.classList.toggle("active");
    });
  }

  // Close mobile menu when clicking on a nav link
  const navLinks = document.querySelectorAll("nav ul li a");
  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      if (window.innerWidth <= 768) {
        nav.classList.remove("active");
        mobileMenuBtn.classList.remove("active");
      }
    });
  });

  // Portfolio Filtering
  const filterButtons = document.querySelectorAll(".filter-btn");
  const portfolioItems = document.querySelectorAll(".portfolio-item");

  if (filterButtons.length && portfolioItems.length) {
    filterButtons.forEach((button) => {
      button.addEventListener("click", () => {
        // Update active button
        filterButtons.forEach((btn) => btn.classList.remove("active"));
        button.classList.add("active");

        // Filter items
        const filter = button.dataset.filter;

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

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      if (targetId === "#") return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 100,
          behavior: "smooth",
        });
      }
    });
  });

  // Header scroll effect
  const header = document.querySelector("header");
  if (header) {
    window.addEventListener("scroll", function () {
      if (window.scrollY > 100) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    });
  }

  // Portfolio item hover effect enhancement
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
});
