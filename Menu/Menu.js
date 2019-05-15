const toggleMenu = () => {
  // Toggle the "menu--open" class on your menu refence.
  if(menu.classList.toggle("menu--open")){
    TweenMax.fromTo(menu, 0.5, { left: -350 }, { left: 0});
  } else {
    TweenMax.fromTo(menu, 0.5, { left: 0 }, { left: -350});
  }
};

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector(".menu");
// create a reference to the ".menu-button" class
const menuButton = document.querySelector(".menu-button");
// Using your menuButton reference, add a click handler that calls toggleMenu

menuButton.addEventListener("click", () => {
  toggleMenu();
});
