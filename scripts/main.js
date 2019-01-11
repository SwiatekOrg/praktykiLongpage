const btnSearch = document.getElementById('search')
const searchWindow = document.querySelector('.search-window')
const icon = document.querySelector('.fa-search')

btnSearch.addEventListener('click',()=>{
    searchWindow.classList.toggle('active')
    icon.classList.toggle('fa-search')
    icon.classList.toggle('fa-times-circle')
})