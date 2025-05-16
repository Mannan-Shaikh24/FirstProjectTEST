document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mobileNavWrapper = document.querySelector('.mobile-nav-wrapper');
    const mobileCloseBtn = document.querySelector('.mobile-close-btn');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav a');
  
    mobileMenuToggle.addEventListener('click', function() {
      mobileNavWrapper.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  
    mobileCloseBtn.addEventListener('click', function() {
      mobileNavWrapper.classList.remove('active');
      document.body.style.overflow = '';
    });
  
    mobileNavLinks.forEach(link => {
      link.addEventListener('click', function() {
        mobileNavWrapper.classList.remove('active');
        document.body.style.overflow = '';
      });
    });
  
    // Header Scroll Effect
    const header = document.querySelector('header');
    window.addEventListener('scroll', function() {
      if (window.scrollY > 100) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
  
    // Service Category Tabs
    const categories = document.querySelectorAll('.category');
    const serviceCategories = document.querySelectorAll('.service-category');
  
    categories.forEach(category => {
      category.addEventListener('click', function() {
        // Remove active class from all categories
        categories.forEach(cat => cat.classList.remove('active'));
        
        // Add active class to clicked category
        this.classList.add('active');
        
        // Get the category to show
        const categoryToShow = this.getAttribute('data-category');
        
        // Hide all service categories
        serviceCategories.forEach(serviceCat => {
          serviceCat.style.display = 'none';
        });
        
        // Show the selected service category
        document.querySelector(`.service-category.${categoryToShow}`).style.display = 'block';
      });
    });
  
    // Portfolio Filter
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
  
    filterButtons.forEach(button => {
      button.addEventListener('click', function() {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        
        // Add active class to clicked button
        this.classList.add('active');
        
        // Get the filter value
        const filterValue = this.getAttribute('data-filter');
        
        // Filter portfolio items
        portfolioItems.forEach(item => {
          if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
            item.style.display = 'block';
          } else {
            item.style.display = 'none';
          }
        });
      });
    });
  
    // FAQ Accordion
    const faqQuestions = document.querySelectorAll('.faq-question');
  
    faqQuestions.forEach(question => {
      question.addEventListener('click', function() {
        const faqItem = this.parentElement;
        const answer = this.nextElementSibling;
        const icon = this.querySelector('i');
        
        // Toggle active class on faq item
        faqItem.classList.toggle('active');
        
        // Toggle icon
        if (faqItem.classList.contains('active')) {
          answer.style.maxHeight = answer.scrollHeight + 'px';
        } else {
          answer.style.maxHeight = null;
        }
      });
    });
  
    // Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80,
            behavior: 'smooth'
          });
        }
      });
    });
  
    // Form Submission
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
      contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Here you would typically send the form data to your server
        alert('Thank you for your message! We will get back to you soon.');
        this.reset();
        
        // Reset floating labels
        const labels = this.querySelectorAll('label');
        labels.forEach(label => {
          label.style.transform = '';
          label.style.color = '';
          label.style.backgroundColor = '';
          label.style.padding = '';
          label.style.left = '';
        });
      });
    }
  
    // Initialize floating labels for form fields with values
    document.querySelectorAll('.form-group input, .form-group textarea, .form-group select').forEach(input => {
      if (input.value) {
        const label = input.previousElementSibling;
        label.style.transform = 'translateY(-25px) scale(0.9)';
        label.style.color = 'var(--primary-color)';
        label.style.backgroundColor = 'var(--white)';
        label.style.padding = '0 5px';
        label.style.left = '10px';
      }
    });
  });