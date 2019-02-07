//menu i search ikon dzialaja tylko gdy scrolly > 150

// Wyskakiwanie okienka Search w navbarze

// const btnSearch = document.getElementById('search')
// const searchWindow = document.querySelector('.search-window')
// const icon = document.querySelector('.fa-search')

// btnSearch.addEventListener('click',function(e){
//     e.preventDefault()
//     if(window.scrollY > 150){
//         searchWindow.classList.toggle('active')
//         icon.classList.toggle('fa-search')
//         icon.classList.toggle('fa-times-circle')
//     }
// })

// Wyskakiwanie mobilnego Navbaru

const menu = document.querySelector('.hamburger')
const nav = document.querySelector('.nav-all')

menu.addEventListener('click',function(){
    // if(window.scrollY > 150){
    menu.classList.toggle('active');
    nav.classList.toggle('mobile')
    //searchWindow.classList.toggle('activeMobile')
    //}
})

// Zmniejszony navbar po zjechaniu oraz resetowanie wlaczonych
// ficzerow przy przejsciu

window.addEventListener('load',changeNav)
window.addEventListener('scroll',changeNav)


function changeNav(){
    if(window.scrollY > 150) nav.classList.add('top')
    else {
        nav.classList.remove('top')
        //searchWindow.classList.remove('active')
        //icon.classList.add('fa-search')
        //icon.classList.remove('fa-times-circle')
        nav.classList.remove('mobile')
        menu.classList.remove('active')
    }
}

//dodanie klasy dla lepszych marginow przy >1200px

const kafelki = document.querySelector('.tiles')

window.addEventListener('load',addContainerToTiles)
window.addEventListener('resize', addContainerToTiles)

function addContainerToTiles(){
    if(window.innerWidth < 1200) kafelki.classList.add('container')
    else kafelki.classList.remove('container')
  }

// Pop up z numerem

const pop = document.querySelector('.pop-number')
const closeBtn = document.querySelector('.close')

closeBtn.addEventListener('click',()=>{
    pop.classList.remove('active')
})

const popup =()=>{
    pop.classList.add('active')
}

setTimeout(popup,5000)