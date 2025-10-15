document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const sideMenu = document.getElementById("sideMenu");
  const navLinks = document.querySelectorAll(".navigation-link-item");
  const sideLinks = document.querySelectorAll(".side-menu a");

  const leftBtn = document.querySelector(".scroll-btn.left");
const rightBtn = document.querySelector(".scroll-btn.right");
const toolsWrapper = document.querySelector(".tools-wrapper");

  // ===== TOGGLE MENU =====
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    sideMenu.classList.toggle("open");
  });

  // ===== ACTIVE LINK HANDLING =====
  const currentLocation = window.location.pathname.split("/").pop();

  [...navLinks, ...sideLinks].forEach(link => {
    if (link.getAttribute("href") === currentLocation) {
      link.classList.add("active");
    }
  });

  // ===== AUTO CLOSE ON RESIZE =====
  const checkScreenWidth = () => {
    if (window.innerWidth > 768) {
      sideMenu.classList.remove("open");
      hamburger.classList.remove("active");
      sideMenu.style.transition = "none"; // no flicker on resize
    } else {
      sideMenu.style.transition = ""; // restore smooth slide
    }
  };

  checkScreenWidth();
  window.addEventListener("resize", checkScreenWidth);
});





leftBtn.addEventListener("click", () => {
  toolsWrapper.scrollBy({
    left: -200, // scroll 200px left
    behavior: "smooth"
  });
});

rightBtn.addEventListener("click", () => {
  toolsWrapper.scrollBy({
    left: 200, // scroll 200px right
    behavior: "smooth"
  });
});