document.addEventListener('DOMContentLoaded', function() {
  // Get DOM elements
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const mobileNavWrapper = document.querySelector('.mobile-nav-wrapper');
  const mobileNav = document.querySelector('.mobile-nav');
  const mobileCloseBtn = document.querySelector('.mobile-close-btn');
  const mobileNavBackdrop = document.querySelector('.mobile-nav-backdrop');

  // Function to open mobile menu
  function openMobileMenu() {
    mobileNavWrapper.style.display = 'block';
    setTimeout(() => {
      mobileNav.classList.add('active');
      mobileNavBackdrop.classList.add('active');
      document.body.style.overflow = 'hidden'; // Prevent scrolling
    }, 10);
  }

  // Function to close mobile menu
  function closeMobileMenu() {
    mobileNav.classList.remove('active');
    mobileNavBackdrop.classList.remove('active');
    document.body.style.overflow = ''; // Re-enable scrolling
    
    setTimeout(() => {
      mobileNavWrapper.style.display = 'none';
    }, 300);
  }

  // Event listeners
  mobileMenuToggle.addEventListener('click', openMobileMenu);
  mobileCloseBtn.addEventListener('click', closeMobileMenu);
  mobileNavBackdrop.addEventListener('click', closeMobileMenu);

  // Close menu when clicking on a link (optional)
  const mobileNavLinks = document.querySelectorAll('.mobile-nav ul li a');
  mobileNavLinks.forEach(link => {
    link.addEventListener('click', closeMobileMenu);
  });

  // Close menu when pressing Escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && mobileNavWrapper.style.display === 'block') {
      closeMobileMenu();
    }
  });
});