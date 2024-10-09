// Get the navbar
const navbar = document.getElementById('navbar');

// Add an event listener to change the navbar style and background color on scroll
window.addEventListener('scroll', () => {
  const scrollPos = window.scrollY;

  // Change navbar background when scrolling past 50px
  if (scrollPos > 50) {
    navbar.classList.add('scrolled');  // Add class when scrolled
  } else {
    navbar.classList.remove('scrolled');  // Remove class when at the top
  }

  // Change background color of the body as you scroll
  changeBackground(scrollPos);
});

// Function to change background color based on scroll position
function changeBackground(scrollPos) {
  const body = document.body;

  if (scrollPos < 300) {
    body.style.backgroundColor = '#ffcc00';  // Yellow color
  } else if (scrollPos >= 300 && scrollPos < 600) {
    body.style.backgroundColor = '#ff9900';  // Orange color
  } else if (scrollPos >= 600 && scrollPos < 900) {
    body.style.backgroundColor = '#cc6600';  // Dark orange color
  } else if (scrollPos >= 900) {
    body.style.backgroundColor = '#993300';  // Brown color
  }
}
