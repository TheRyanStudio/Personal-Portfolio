// Register GSAP ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Animate the name on page load scroll (move down + scale effect)
ScrollTrigger.create({
  animation: gsap.from("#title-name", {
    y: "50vh",
    scale: 4,
    yPercent: -50,
  }),
  scrub: true,
  trigger: ".scroll-trigger",
  start: "top bottom",
  endTrigger: ".scroll-trigger",
  end: "top center",
});

// Scroll back to top when clicking the name
document.getElementById("title-name").addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Toggle "Read more / Read less" in About section
const toggle = document.getElementById("about-toggle");
const full = document.querySelector(".about-full");

toggle.addEventListener("click", () => {
  const isOpen = full.style.display === "block";
  full.style.display = isOpen ? "none" : "block";
  toggle.textContent = isOpen ? "Read more" : "Read less";
});

// Slide background text into view when About section scrolls in
ScrollTrigger.create({
  animation: gsap.from(".background-text", {
    x: "-50vw",
  }),
  scrub: 1,
  trigger: "#about",
  start: "top 100%",
  end: "top 20%",
});

// Horizontal scroll animation for desktop portfolio section
const projects = gsap.utils.toArray("#portfolio-horizontal .project");

gsap.to(projects, {
  xPercent: -100 * (projects.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: "#portfolio-horizontal",
    pin: true,
    scrub: 1,
    start: "top top",
    end: () => "+=" + window.innerWidth * projects.length,
  },
});

// Animate project images sliding in as they enter view
const tl = gsap.timeline();
tl.from(".project-col-img1", { xPercent: 225 })
  .from(".project-col-img2", { xPercent: 100 });

ScrollTrigger.create({
  animation: tl,
  trigger: ".project-col-img1",
  start: "top 100%",
  end: "top 50%",
  scrub: 2,
});

// Handle mobile navigation menu toggle
const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");

menuToggle.addEventListener("click", () => {
  mobileMenu.classList.toggle("open");
});
