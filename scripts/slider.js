const slider = document.querySelector('.slider')
// Klasy dodawane do kolejnych slide'ów
const listOfItems = ['fa-apple','fa-book','fa-bug','fa-calendar','fa-camera','fa-ban'] 
// Pobranie wsyzstkich sladjów 
const listOfSlider = [...slider.querySelectorAll('.sliderItem')]
// Ilosc musi byc mniejsza od liczby itemow
const startIcons = 4
const widthOfItem = slider.parentElement.offsetWidth/startIcons
let translateX = 0
let counter = 0

// Skopiowanie wszystkich itemow jeszcze raz 
listOfSlider.forEach((item,i)=>{
    item.style.width = `${widthOfItem}px`
    item.firstChild.classList.add(`${listOfItems[i]}`)
    slider.appendChild(item.cloneNode(true))
})

// Na wypadek gdyby liczba itemow byla rowna widocznym na poczatku
slider.appendChild(listOfSlider[0].cloneNode(true))

// Ustawienie szerokosci slajdera
slider.style.width = `${widthOfItem * 2 * listOfSlider.length + widthOfItem}px`

function sliderRoll(){
    if(counter === listOfSlider.length){
        slider.style.transition = "all 0s linear"
        translateX = 0
        slider.style.transform = `translateX(${translateX}px)`
        counter = 0
    }
    translateX -= slider.parentElement.offsetWidth/startIcons;
    slider.style.transform = `translateX(${translateX}px)`
    counter++;
    slider.style.transition = 'all 1s linear'
}


setTimeout(()=>console.log('XD'),0)
window.addEventListener('resize',function(){

})

setInterval(sliderRoll,3000);