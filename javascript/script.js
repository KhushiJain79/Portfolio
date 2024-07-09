document.addEventListener('DOMContentLoaded', function() {
  // Toggle menu and header
  const menu = document.getElementById('menu');
  const header = document.querySelector('header');

  menu.addEventListener('click', function() {
      menu.classList.toggle('fa-times');
      header.classList.toggle('toggle');
  });

  // Remove classes on scroll or load
  window.addEventListener('scroll', toggleHeader);
  window.addEventListener('load', toggleHeader);

  function toggleHeader() {
      menu.classList.remove('fa-times');
      header.classList.remove('toggle');

      const topButton = document.querySelector('.top');
      if (window.scrollY > 0) {
          topButton.style.display = 'block';
      } else {
          topButton.style.display = 'none';
      }
  }

  // Smooth scrolling
  const smoothScrollLinks = document.querySelectorAll('a[href*="#"]');
  smoothScrollLinks.forEach(link => {
      link.addEventListener('click', function(e) {
          e.preventDefault();
          const targetId = link.getAttribute('href');
          const targetElement = document.querySelector(targetId);

          window.scrollTo({
              top: targetElement.offsetTop,
              behavior: 'smooth'
          });
      });
  });
});
