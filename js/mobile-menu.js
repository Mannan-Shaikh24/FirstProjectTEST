document.addEventListener('DOMContentLoaded', function() {
  const mobileToggle = document.querySelector('.mobile-menu-toggle');
  const mobileNav = document.querySelector('.mobile-nav');
  const mobileClose = document.querySelector('.mobile-close-btn');
  const backdrop = document.querySelector('.mobile-nav-backdrop');
  
  mobileToggle.addEventListener('click', function() {
    mobileNav.classList.toggle('active');
    document.body.classList.toggle('no-scroll');
  });
  
  if (mobileClose) {
    mobileClose.addEventListener('click', function() {
      mobileNav.classList.remove('active');
      document.body.classList.remove('no-scroll');
    });
  }
  
  if (backdrop) {
    backdrop.addEventListener('click', function() {
      mobileNav.classList.remove('active');
      document.body.classList.remove('no-scroll');
    });
  }
});