
// get the class for the nav menu
const toggleMenu = document.querySelector(".menu-toggle");

// get the class for the nav lists
const openMenu = document.querySelector(".nav-list");

// get the clsss to close the nav menu
const closeMenu = document.querySelector(".nav-close");


// create the function to turn
// on and off the class '.active'
function toggleNav() {
  openMenu.classList.toggle('active');
}

// use the event listener on the open
// and close variables & call the function
toggleMenu.addEventListener('click', toggleNav);
closeMenu.addEventListener('click', toggleNav);



// use 'onclick' event listener in the 
// html & toggle '.darkmode' in css
function changeMode() {
  var themeSwitch = document.body;
  themeSwitch.classList.toggle('darkmode');
}
