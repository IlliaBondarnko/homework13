const burger = document.querySelector(".header-burger");
const navMenu = document.querySelector(".header-menu");
const body = document.querySelector(".body");
const logo = document.querySelector(".header-logo");

burger.addEventListener("click", onClick);

function onClick(e) {
  burger.classList.toggle("active");
  navMenu.classList.toggle("active");
  body.classList.toggle("lock");
  logo.classList.toggle("passive");
}

// не знаю як зробити так, щоб логотип webstudio зник

