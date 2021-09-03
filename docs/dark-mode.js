var d = new Date()
var h = d.getHours()

const greeting = document.getElementById('greeting');

var btnChangeDarkMode = document.querySelector('.header__dark-mode');
var btnDark = document.querySelector('.dark-mode-icon');
var btnLight = document.querySelector('.light-mode-icon');
var darkMode = document.querySelectorAll('.dark-mode');
var bgDarkMode = document.querySelectorAll('.bg-dark-mode');
var btnProfileDark = document.querySelectorAll('.btn-color-profile');
var borderBtnProfileDark = document.querySelectorAll('.border-profile');


function changeDarkMode(){
    [].forEach.call(darkMode, el => {
        el.classList.toggle('light-mode');
    });
    [].forEach.call(bgDarkMode, el => {
        el.classList.toggle('light-mode');
    });
    [].forEach.call(btnProfileDark, el => {
        el.classList.toggle('btn-color-profile-dark');
    });
    [].forEach.call(borderBtnProfileDark, el => {
        el.classList.toggle('border-profile-dark');
    });
    btnDark.classList.toggle('none');
    btnLight.classList.toggle('none');
}
function identifyBacklight(){
    if(h < 12){
        greetingMorning();
    } else if (h > 12 && h < 19){
        greetingAfternoon();
    } else {
        greetingNight();
    }
}
function greetingMorning(){
    greeting.innerHTML += `¡Buen día!`    
}
function greetingAfternoon(){
    greeting.innerHTML += `¡Buenas tardes!`    
}
function greetingNight(){
    greeting.innerHTML += `¡Buen noche!`    
}
window.onload = function () {
    if(h < 19 ){
        changeDarkMode();
    }
    identifyBacklight();
}

btnChangeDarkMode.addEventListener('click', changeDarkMode);