document.addEventListener('DOMContentLoaded', function() {
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    const mobileNav = document.querySelector('.mobile-nav');
    const closeBtn = document.querySelector('.mobile-close-btn');
    const backdrop = document.querySelector('.mobile-nav-backdrop');
  
    // Toggle mobile menu
    mobileToggle.addEventListener('click', function() {
      mobileNav.classList.add('active');
      backdrop.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  
    // Close mobile menu
    function closeMobileMenu() {
      mobileNav.classList.remove('active');
      backdrop.classList.remove('active');
      document.body.style.overflow = '';
    }
  
    closeBtn.addEventListener('click', closeMobileMenu);
    backdrop.addEventListener('click', closeMobileMenu);
  });