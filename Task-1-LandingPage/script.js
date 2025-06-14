const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

const navLinks = document.querySelectorAll('.header nav ul li a');

navLinks.forEach(link => {
  link.addEventListener('mouseover', () => {
    link.style.color = '#FF5722';
  });

  link.addEventListener('mouseout', () => {
    link.style.color = '';
  });
});
