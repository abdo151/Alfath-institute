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
//start landing random slider
let rand = Math.floor(Math.random() * (4 - 0 + 1)) + 0;
let landing = document.querySelector(".landing");
let toggle_icon = document.querySelectorAll(".landing .toggle-icon div");
//add class active on click
toggle_icon.forEach(function (ele, index) {
  ele.onclick = function () {
    toggle_icon.forEach(function (el) {
      el.classList.remove("active");
    });
    ele.classList.add("active");
    console.log(landing);

    landing.style.backgroundImage = `url('css-folder/assets/images/${index + 1}.jpg')`;
  };
});

//end landing random slider
