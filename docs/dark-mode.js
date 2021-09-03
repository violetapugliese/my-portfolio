var btnChangeDarkMode = document.querySelector('.header__dark-mode');
var btnDark = document.querySelector('.dark-mode-icon');
var btnLight = document.querySelector('.light-mode-icon');
var darkMode = document.querySelectorAll('.dark-mode');
var bgDarkMode = document.querySelectorAll('.bg-dark-mode');
var btnProfileDark = document.querySelectorAll('.btn-color-profile');
var borderBtnProfileDark = document.querySelectorAll('.border-profile');


btnChangeDarkMode.addEventListener('click', changeDarkMode);
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