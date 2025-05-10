// main.js - Shaikh Interiors Main JavaScript File
document.addEventListener("DOMContentLoaded", function () {
  // ===== Header Scroll Effect =====
  const header = document.querySelector("header");
  if (header) {
    window.addEventListener("scroll", debounce(function () {
      if (window.scrollY > 100) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    }));
  }

  // ===== Smooth Scrolling for Anchor Links =====
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");
      if (targetId === "#") return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: "smooth",
        });
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
  const currentPage = window.location.pathname.split("/").pop() || "index.html";

  navLinks.forEach((link) => {
    const linkPage = link.getAttribute("href");
    if (linkPage === currentPage) {
      link.classList.add("active");
    }
  });

  // ===== Lazy Loading for Images =====
  const lazyImages = document.querySelectorAll("img[data-src]");
  if ("IntersectionObserver" in window && lazyImages.length > 0) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.onload = () => {
            img.removeAttribute("data-src");
          };
          observer.unobserve(img);
        }
      });
    }, {
      rootMargin: '200px 0px' // Start loading images 200px before they enter viewport
    });

    lazyImages.forEach((img) => {
      imageObserver.observe(img);
    });
  }

  // ===== Preloader =====
  const preloader = document.querySelector(".preloader");
  if (preloader) {
    window.addEventListener("load", function () {
      preloader.style.opacity = "0";
      setTimeout(() => {
        preloader.style.display = "none";
      }, 500);
    });
  }
});

// ===== Debounce Helper Function =====
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