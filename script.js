// Back to Top Button
const backToTopButton = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 300) {
    backToTopButton.classList.remove('opacity-0', 'invisible');
    backToTopButton.classList.add('opacity-100', 'visible');
  } else {
    backToTopButton.classList.remove('opacity-100', 'visible');
    backToTopButton.classList.add('opacity-0', 'invisible');
  }
});

backToTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  });
});

// Dark mode toggle (placeholder for future implementation)
const darkModeToggle = document.createElement('button');
darkModeToggle.innerHTML = '<i data-feather="moon"></i>';
darkModeToggle.className = 'p-2 rounded-full bg-primary/10 text-primary fixed bottom-4 left-4 z-50';
darkModeToggle.addEventListener('click', () => {
  document.documentElement.classList.toggle('dark');
  feather.replace();
});
document.body.appendChild(darkModeToggle);

// Initialize feather icons
document.addEventListener('DOMContentLoaded', () => {
  feather.replace();
});