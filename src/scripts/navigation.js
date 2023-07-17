const hamburger = document.querySelector('.hamburger');
const header = document.querySelector('.header');

hamburger.addEventListener('click', ()=> {
  header.classList.toggle('expanded');
})

// close the navigation when the screen resize up to 800px 


