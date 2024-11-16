document.addEventListener("DOMContentLoaded", () => {

  let navbar = document.querySelector(".menu__navbar");

  window.addEventListener("scroll", () => {
    let scroll = window.scrollY;

    navbar.classList.remove("menu__navbar--fixed");
    
    if (scroll > 120)
      navbar.classList.add("menu__navbar--fixed");
  })

})