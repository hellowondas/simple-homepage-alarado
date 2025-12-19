const toggleMenu = document.querySelector(".menu-toggle");
const openMenu = document.querySelector(".nav-list");
const closeMenu = document.querySelector(".nav-close");


/* i had earlier written the code using just the event listener way but i wanted to simplify it, so i created a function that changes the state (active) of the element selected & used that function in the event listener that is listening for clicks in both buttons */
function toggleNav() {
  openMenu.classList.toggle('active');
}

toggleMenu.addEventListener('click', toggleNav);
closeMenu.addEventListener('click', toggleNav);