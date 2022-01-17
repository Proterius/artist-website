const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName('navbar-links')[0];
console.log("kurwica");
toggleButton.addEventListener('click',function(){
navbarLinks.classList.toggle('active')


});