// Modern JavaScript for Gabriel Yancy Personal Website

// ==================== SCROLL EFFECTS FOR HEADER ====================
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// ==================== DARK MODE TOGGLE ====================
const initDarkMode = () => {
  const themeToggle = document.querySelector('.theme-toggle');
  if (!themeToggle) return;
  
  const htmlElement = document.documentElement;
  
  // Load saved theme
  const currentTheme = localStorage.getItem('theme') || 'light';
  htmlElement.setAttribute('data-theme', currentTheme);
  
  // Update icon based on current theme
  const icon = themeToggle.querySelector('i');
  if (icon) {
    icon.className = currentTheme === 'light' ? 'fa fa-moon' : 'fa fa-sun';
  }
  
  themeToggle.addEventListener('click', () => {
    const theme = htmlElement.getAttribute('data-theme');
    const newTheme = theme === 'light' ? 'dark' : 'light';
    
    htmlElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    // Update icon
    const icon = themeToggle.querySelector('i');
    if (icon) {
      icon.className = newTheme === 'light' ? 'fa fa-moon' : 'fa fa-sun';
    }
  });
};

// ==================== INTERSECTION OBSERVER FOR FADE-IN ANIMATIONS ====================
const initFadeInAnimations = () => {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);

  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
};

// ==================== INITIALIZE ALL FEATURES ====================
document.addEventListener('DOMContentLoaded', () => {
  initDarkMode();
  initFadeInAnimations();
});
