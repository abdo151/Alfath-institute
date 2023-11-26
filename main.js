// start header
let menu = document.querySelector(".header .container .links ul");
let icons = document.querySelector(".header .container .links .icons");

// Toggle menu visibility
function toggleMenu() {
  menu.classList.toggle("hidden");
}

// Event listener for the menu icon click
icons.addEventListener("click", (event) => {
  // Prevent clicks from being detected outside the icons
  event.stopPropagation();
  toggleMenu();
});

// Event listener for the document
document.addEventListener("click", (event) => {
  // If the click target is not the menu or its children, and the menu is not hidden, hide it
  if (!menu.contains(event.target) && !menu.classList.contains("hidden")) {
    toggleMenu();
  }
});
// end header
//start landing
let landing = document.querySelector(".landing-background");
// // landing image change
function change_background() {
  let imageNum = 0;
  function changeImage() {
    imageNum++;
    if (imageNum <= 5) {
      landing.src = `css-folder/assets/images/${imageNum}.jpg`;
    } else {
      imageNum = 1;
    }
  }
  setInterval(changeImage, 3000);
}
change_background();
//end landing random slider
