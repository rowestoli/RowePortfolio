
document.addEventListener('DOMContentLoaded', () => {
  // Mobile Menu Toggle
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');
  
  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navMenu.classList.toggle('active');
    });
  
    document.querySelectorAll('.nav-menu a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
      });
    });
  }
  
  // Form Submission
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Thanks for your message! This is a demo form and does not actually send emails.');
      contactForm.reset();
    });
  }
  
  // Active Navigation Link
  const currentPage = window.location.pathname.split('/').pop();
  const navLinks = document.querySelectorAll('.nav-menu a');
  
  navLinks.forEach(link => {
    const linkPage = link.getAttribute('href');
    if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
      link.classList.add('active');
    }
  });
});

// Handle PDF fallback
const resumeFrame = document.getElementById('resume-frame');
if (resumeFrame) {
  resumeFrame.onerror = function() {
    this.src = 'https://placehold.co/800x1100/1A4D2E/FFFFFF/?text=Resume+PDF+Placeholder';
  };
}
