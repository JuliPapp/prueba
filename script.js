document.addEventListener('DOMContentLoaded', () => {
  // Burger menu toggle for mobile navigation
  const burger = document.querySelector('.burger');
  const navLinks = document.querySelector('.nav-links');
  burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    // Animate burger lines
    burger.classList.toggle('toggle');
  });

  // Optional: Contact form feedback
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('¡Gracias por tu mensaje! Pronto me pondré en contacto.');
      contactForm.reset();
    });
  }
});