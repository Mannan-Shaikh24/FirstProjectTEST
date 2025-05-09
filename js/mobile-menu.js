    // Mobile menu functionality
    document.addEventListener('DOMContentLoaded', function() {
        const toggle = document.querySelector('.mobile-menu-toggle');
        const mobileNav = document.querySelector('.mobile-nav');
        
        toggle.addEventListener('click', function() {
          mobileNav.classList.toggle('active');
          // Toggle aria-expanded for accessibility
          const expanded = this.getAttribute('aria-expanded') === 'true';
          this.setAttribute('aria-expanded', !expanded);
        });
        
        // Close when clicking on nav links
        document.querySelectorAll('.mobile-nav a').forEach(link => {
          link.addEventListener('click', () => {
            mobileNav.classList.remove('active');
            toggle.setAttribute('aria-expanded', 'false');
          });
        });
      });