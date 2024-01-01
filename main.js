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

// start our staff
const counters = document.querySelectorAll(".number");
const speed = 200; // The lower the slower

counters.forEach((counter) => {
  const updateCount = () => {
    const target = +counter.getAttribute("data-target");
    const count = +counter.innerText;

    // Lower inc to slow and higher to speed up
    const inc = target / speed;

    // Check if target is reached
    if (count < target) {
      // Add inc to count and output in counter
      counter.innerText = Math.ceil(count + inc);
      // Call function every ms
      setTimeout(updateCount, 1);
    } else {
      counter.innerText = target;
    }
  };

  const handleScroll = () => {
    const statsPosition = counter.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    if (statsPosition < screenPosition) {
      updateCount();
      window.removeEventListener("scroll", handleScroll);
    }
  };

  window.addEventListener("scroll", handleScroll);
});

// end our staff
// start FAQ
document.querySelectorAll('.faq-question').forEach(question => {
  question.addEventListener('click', function() {
    var faqItem = this.parentNode;
    faqItem.classList.toggle('active');
  });
});

// end FAQ