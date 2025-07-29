const toggleBtn = document.getElementById("darkModeToggle");
const body = document.body;

// Apply theme from localStorage
if (localStorage.getItem("theme") === "dark") {
  body.classList.add("dark-mode");
  toggleBtn.textContent = "☀️";
}

// Toggle theme
toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  const isDark = body.classList.contains("dark-mode");
  toggleBtn.textContent = isDark ? "☀️" : "🌙";
  localStorage.setItem("theme", isDark ? "dark" : "light");
});

// Animate elements on scroll
const reveals = document.querySelectorAll(".reveal");
const fadeIns = document.querySelectorAll(".fade-in");

function handleScrollAnimation(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animated");
      observer.unobserve(entry.target);
    }
  });
}

const observer = new IntersectionObserver(handleScrollAnimation, {
  threshold: 0.1,
});

reveals.forEach(section => observer.observe(section));
fadeIns.forEach(section => observer.observe(section));
