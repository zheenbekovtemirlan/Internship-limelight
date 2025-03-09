// JavaScript
document.addEventListener('DOMContentLoaded', () => {
  // Simple fade-in animation
  const contents = document.querySelectorAll('.content');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });

  contents.forEach(content => {
    observer.observe(content);
  });

  document.querySelectorAll('.parallax-section').forEach(section => {
    section.style.backgroundColor = '#f0f0f0';
  });
});
