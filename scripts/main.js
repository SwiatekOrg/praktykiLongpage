//menu i search ikon dzialaja tylko gdy scrolly > 150

// Wyskakiwanie okienka Search w navbarze

const btnSearch = document.getElementById('search')
const searchWindow = document.querySelector('.search-window')
const icon = document.querySelector('.fa-search')

btnSearch.addEventListener('click',function(e){
    e.preventDefault()
    if(window.scrollY > 150){
        searchWindow.classList.toggle('active')
        icon.classList.toggle('fa-search')
        icon.classList.toggle('fa-times-circle')
    }
})

// Wyskakiwanie mobilnego Navbaru

const menu = document.querySelector('.hamburger')
const nav = document.querySelector('.nav-all')

menu.addEventListener('click',function(){
    if(window.scrollY > 150){
    menu.classList.toggle('active');
    nav.classList.toggle('mobile')
    searchWindow.classList.toggle('activeMobile')
    }
})

// Zmniejszony navbar po zjechaniu oraz resetowanie wlaczonych
// ficzerow przy przejsciu

document.addEventListener('scroll',function(){
    if(window.scrollY > 150) nav.classList.add('top')
    else {
        nav.classList.remove('top')
        searchWindow.classList.remove('active')
        icon.classList.add('fa-search')
        icon.classList.remove('fa-times-circle')
        nav.classList.remove('mobile')
        menu.classList.remove('active')
    }
})