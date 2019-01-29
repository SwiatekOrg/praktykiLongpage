// Wyskakiwanie okienka Search w navbarze

const btnSearch = document.getElementById('search')
const searchWindow = document.querySelector('.search-window')
const icon = document.querySelector('.fa-search')

btnSearch.addEventListener('click',function(e){
    e.preventDefault()
    searchWindow.classList.toggle('active')
    icon.classList.toggle('fa-search')
    icon.classList.toggle('fa-times-circle')
})

// Wyskakiwanie mobilnego Navbaru

const menu = document.querySelector('.hamburger')
const nav = document.querySelector('.nav-all')

menu.addEventListener('click',function(){
    menu.classList.toggle('active');
    nav.classList.toggle('mobile')
})

// Zmniejszony navbar po zjechaniu