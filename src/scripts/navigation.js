const hamburger = document.querySelector('.hamburger');
const header = document.querySelector('.header');
const listItems = document.querySelectorAll('.item');

hamburger.addEventListener('click', ()=> {
  header.classList.toggle('expanded');
})

listItems.forEach((item) => item.addEventListener('click', () => {
      header.classList.remove('expanded');
}))



