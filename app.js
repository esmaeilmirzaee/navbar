// MARK---Open a circle through the screen

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle("open");
  // MARK---adding fade andimation to links
  links.forEach((link) => {
    link.classList.add('fade');
  });
});

// MARK---Convert the hamburger menu to x menu
