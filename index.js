"use strict"
var $ = document.querySelector.bind(document);
var $$ = document.querySelectorAll.bind(document);

const buttonLight = $('.button-change-icon_light')
const buttonDark  = $('.button-change-icon_dark')
const main = $('#main')

buttonLight.addEventListener('click', function() {
    this.style.left = "unset"
    this.style.right = "0"
    this.style.animation = "fadeOut 0.5s linear"
    this.style.display = "none"
    buttonDark.style.display = "block"
    buttonDark.style.animation = "fadeIn 0.3s linear"
    buttonDark.style.left = "unset" 
    buttonDark.style.right = "0"
    main.style.backgroundImage = "linear-gradient(to right, #20323b, #3f4142)"
    main.style.color = "#b5e1f7"
    $$('.infomation_contact_item').forEach(e => e.style.color = "#b5e1f7")
});
buttonDark.addEventListener('click', function() {
    this.style.right = "unset"
    this.style.left = "0"
    this.style.animation = "fadeOut 0.3s linear"
    this.style.display = "none";
    buttonLight.style.display = "block"
    buttonLight.style.animation = "fadeIn 0.3s linear"
    buttonLight.style.left = "0"
    buttonLight.style.right = "unset"
    main.style.backgroundImage = "linear-gradient(to right, #d8e6ed,#b5e1f7)"
    main.style.color = "#3f4142"
    $$('.infomation_contact_item').forEach(e => e.style.color = "#3f4142")

});


// Image slider
const nextBtn = $('.icon-arrow-right')
const prevBtn = $('.icon-arrow-left')
const sImage = $$('.image')

let currentIndex = 0;
nextBtn.addEventListener('click', ()=> {
    changeSlider(currentIndex + 1)
    clearInterval(interval)
})
prevBtn.addEventListener('click', ()=> {
    changeSlider(currentIndex - 1)
    clearInterval(interval)
})

function changeSlider(index) {
    if (index < 0) {
        index = sImage.length - 1
    }
    if (index > sImage.length - 1) {
        index = 0
    }
    sImage.forEach(e => e.classList.remove('active'))
    sImage[index].classList.add('active')
    currentIndex = index
}

// Setinterval slider
function autoSlider() {
    changeSlider(currentIndex + 1)
}
const interval = setInterval(autoSlider, 5000)

