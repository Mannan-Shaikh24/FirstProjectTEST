// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Mobile menu toggle
  const mobileMenuBtn = document.querySelector(".mobile-menu");
  const nav = document.querySelector("nav ul");

  if (mobileMenuBtn && nav) {
    mobileMenuBtn.addEventListener("click", function () {
      nav.style.display = nav.style.display === "flex" ? "none" : "flex";
    });
  }

  // Handle window resize to ensure proper menu display
  window.addEventListener("resize", function () {
    if (window.innerWidth > 768 && nav) {
      nav.style.display = "flex";
    } else if (nav) {
      nav.style.display = "none";
    }
  });

  // Initialize nav display on page load
  if (window.innerWidth <= 768 && nav) {
    nav.style.display = "none";
  }

  // FAQ Accordion
  document.querySelectorAll(".faq-question").forEach((question) => {
    question.addEventListener("click", () => {
      const faqItem = question.parentElement;
      const answer = question.nextElementSibling;
      const icon = question.querySelector("i");

      // Close all other FAQ items
      document.querySelectorAll(".faq-item").forEach((item) => {
        if (item !== faqItem) {
          item.querySelector(".faq-answer").style.maxHeight = null;
          item
            .querySelector(".faq-question i")
            .classList.remove("fa-chevron-up");
          item
            .querySelector(".faq-question i")
            .classList.add("fa-chevron-down");
        }
      });

      // Toggle current answer
      if (answer.style.maxHeight) {
        answer.style.maxHeight = null;
        icon.classList.remove("fa-chevron-up");
        icon.classList.add("fa-chevron-down");
      } else {
        answer.style.maxHeight = answer.scrollHeight + "px";
        icon.classList.remove("fa-chevron-down");
        icon.classList.add("fa-chevron-up");
      }
    });
  });

  // Form Submission with validation
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Basic form validation
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const service = document.getElementById("service").value;
      const message = document.getElementById("message").value.trim();

      if (!name || !email || !service || !message) {
        alert("Please fill in all required fields.");
        return;
      }

      if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
        return;
      }

      // Here you would typically send the form data to your server
      // For now, we'll just show a success message
      showFormSuccess();
      this.reset();
      resetFloatingLabels();
    });
  }

  // Floating Labels
  document
    .querySelectorAll(
      ".form-group input, .form-group textarea, .form-group select"
    )
    .forEach((input) => {
      // Initialize if already has value
      if (input.value) {
        activateLabel(input);
      }

      input.addEventListener("focus", function () {
        activateLabel(this);
      });

      input.addEventListener("blur", function () {
        if (!this.value) {
          deactivateLabel(this);
        }
      });

      // For select elements, handle change event
      if (input.tagName === "SELECT") {
        input.addEventListener("change", function () {
          if (this.value) {
            activateLabel(this);
          } else {
            deactivateLabel(this);
          }
        });
      }
    });

  // Helper function to validate email
  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  // Helper function to show form submission success
  function showFormSuccess() {
    // You could replace this with a more elegant notification system
    alert("Thank you for your message! We will get back to you soon.");

    // Alternatively, create a success message element
    // const successMsg = document.createElement('div');
    // successMsg.className = 'form-success';
    // successMsg.textContent = 'Thank you for your message! We will get back to you soon.';
    // contactForm.parentNode.insertBefore(successMsg, contactForm.nextSibling);
    // setTimeout(() => successMsg.remove(), 5000);
  }

  // Helper functions for floating labels
  function activateLabel(input) {
    const label = input.previousElementSibling;
    if (label) {
      label.style.transform = "translateY(-25px) scale(0.9)";
      label.style.color = "var(--primary-color)";
    }
  }

  function deactivateLabel(input) {
    const label = input.previousElementSibling;
    if (label) {
      label.style.transform = "";
      label.style.color = "";
    }
  }

  function resetFloatingLabels() {
    document
      .querySelectorAll(
        ".form-group input, .form-group textarea, .form-group select"
      )
      .forEach((input) => {
        if (!input.value) {
          deactivateLabel(input);
        }
      });
  }
});
