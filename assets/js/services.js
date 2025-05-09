// services.js - Add this to your main.js or create a new file
document.addEventListener("DOMContentLoaded", function () {
  // Service category switching
  const categories = document.querySelectorAll(".category");
  const serviceContainers = document.querySelectorAll(".service-category");

  categories.forEach((category) => {
    category.addEventListener("click", function () {
      // Update active category
      categories.forEach((c) => c.classList.remove("active"));
      this.classList.add("active");

      // Show corresponding service content
      const categoryName = this.dataset.category;
      serviceContainers.forEach((container) => {
        container.style.display = "none";
        if (container.classList.contains(categoryName)) {
          container.style.display = "block";
        }
      });
    });
  });

  // Initialize - show residential services by default
  document.querySelector(".service-category.residential").style.display =
    "block";
});
