const arrow = document.querySelector(".arrow");
const aboutMe = document.querySelector(".about-me-script");
const projects = document.querySelector(".projects-script");
const socialMedia = document.querySelector(".social-media-script");
const leftNavbar = document.querySelector(".left-navbar");

aboutMe.addEventListener("click", (e) => {
  window.scrollTo({
    top: 360,
    behavior: "smooth",
  });
});

projects.addEventListener("click", (e) => {
  window.scrollTo({
    top: 1090,
    behavior: "smooth",
  });
});

socialMedia.addEventListener("click", (e) => {
  window.scrollTo({
    top: 5260,
    behavior: "smooth",
  });
});
leftNavbar.addEventListener("click", (e) => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
