document.addEventListener("DOMContentLoaded", function () {
  // Mobile menu toggle
  const mobileMenuBtn = document.querySelector(".mobile-menu");
  const navMenu = document.querySelector("nav ul");

  mobileMenuBtn.addEventListener("click", function () {
    navMenu.classList.toggle("show");
    this.querySelector("i").classList.toggle("fa-times");
    this.querySelector("i").classList.toggle("fa-bars");
  });

  // Close mobile menu when clicking on a link
  const navLinks = document.querySelectorAll("nav ul li a");
  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      if (window.innerWidth <= 768) {
        navMenu.classList.remove("show");
        mobileMenuBtn.querySelector("i").classList.add("fa-bars");
        mobileMenuBtn.querySelector("i").classList.remove("fa-times");
      }
    });
  });

  // Header scroll effect
  const header = document.querySelector("header");
  window.addEventListener("scroll", function () {
    if (window.scrollY > 100) {
      header.classList.add("scrolled");
      header.classList.remove("transparent-header");
    } else {
      header.classList.remove("scrolled");
      header.classList.add("transparent-header");
    }
  });

  // Initialize header state
  if (window.scrollY > 100) {
    header.classList.add("scrolled");
    header.classList.remove("transparent-header");
  }

  // Team member hover effect
  const teamMembers = document.querySelectorAll(".team-member");
  teamMembers.forEach((member) => {
    member.addEventListener("mouseenter", function () {
      this.querySelector(".social-links").style.opacity = "1";
    });
    member.addEventListener("mouseleave", function () {
      this.querySelector(".social-links").style.opacity = "0";
    });
  });

  // Timeline animation on scroll
  const timelineItems = document.querySelectorAll(".timeline-item");

  function checkTimeline() {
    const triggerBottom = (window.innerHeight / 5) * 4;

    timelineItems.forEach((item) => {
      const itemTop = item.getBoundingClientRect().top;

      if (itemTop < triggerBottom) {
        item.classList.add("show");
      } else {
        item.classList.remove("show");
      }
    });
  }

  // Initial check
  checkTimeline();

  // Check on scroll
  window.addEventListener("scroll", checkTimeline);

  // Smooth scrolling for all links
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
      }
    });
  });
});
