//start header
let menu = document.querySelector(".header .container .links ul");
console.log(menu);
let icons = document.querySelector(".header .container .links");
console.log(icons);
function showAndHidden(e) {
  e.target.classList.toggle("hidden");
}

icons.addEventListener("click",_=> {
    menu.classList.toggle("hidden");
});
//end header