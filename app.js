const arrow = document.querySelector(".arrow");
const aboutMe = document.querySelector(".about-me-script");
const projects = document.querySelector(".projects-script");
const socialMedia = document.querySelector(".social-media-script");
const leftNavbar = document.querySelector(".left-navbar");

projects.addEventListener("click", (e) => {
  window.scrollTo({
    top: 400,
    behavior: "smooth",
  });
});

socialMedia.addEventListener("click", (e) => {
  window.scrollTo({
    top: 2960,
    behavior: "smooth",
  });
});
leftNavbar.addEventListener("click", (e) => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
