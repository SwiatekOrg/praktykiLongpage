const menu = document.querySelector('.hamburger')
const nav = document.querySelector('.nav-all')

menu.addEventListener('click',function(){
    menu.classList.toggle('active');
    nav.classList.toggle('mobile')
})

window.addEventListener('load',changeNav)
window.addEventListener('scroll',changeNav)


function changeNav(){
    if(window.scrollY > 150) nav.classList.add('top')
    else {
        nav.classList.remove('top')
        nav.classList.remove('mobile')
        menu.classList.remove('active')
    }
}

const kafelki = document.querySelector('.tiles')

window.addEventListener('load',addContainerToTiles)
window.addEventListener('resize', addContainerToTiles)

function addContainerToTiles(){
    if(window.innerWidth < 1200) kafelki.classList.add('container')
    else kafelki.classList.remove('container')
  }