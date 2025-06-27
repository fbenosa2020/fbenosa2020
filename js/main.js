const heroImage = document.getElementById("heroImage");

const images = [
  "/images/froi.jpg",
  "/images/froi2.jpg",
  "/images/froi3.jpg"
];

let current = 0;

setInterval(() => {
  // Fade out
  heroImage.style.opacity = 0;

  setTimeout(() => {
    // Change image source
    current = (current + 1) % images.length;
    heroImage.src = images[current];

    // Fade in
    heroImage.style.opacity = 1;
  }, 800); // Match this with CSS transition duration (0.8s)
}, 3000); // Image changes every 3 seconds (adjust as you like)

document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll('.fade-section');
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible');
        }
      });
    },
    { threshold: 0.15 }
  );
  sections.forEach(section => observer.observe(section));
});
