const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');


// Dark Mode Styles
function darkMode(){

    switchMode(
        'rgb(0 0 0 / 50%)',
        'rgb(255 255 255 / 50%)',
        'Dark Mode',
        'fa-moon',
        'fa-sun',
        'dark'
    );
}

// Light Mode Styles
function lightMode(){
    switchMode(
        'rgb(255 255 255 / 50%)',
        'rgb(0 0 0 / 50%)',
        'Light Mode',
        'fa-sun',
        'fa-moon',
        'light'
    );
}

function switchMode(navColor, textBoxColor, textContent, addIcon, removeIcon, color){
    nav.style.backgroundColor = navColor;
    textBox.style.backgroundColor = textBoxColor;
    toggleIcon.children[0].textContent = textContent;
    toggleIcon.children[1].classList.replace(removeIcon, addIcon);
    imageMode(color)
}



// Dark or Light Images
function imageMode(color){
    image1.src = `img/undraw_proud_coder_${color}.svg`;
    image2.src = `img/undraw_feeling_proud_${color}.svg`;
    image3.src = `img/undraw_conceptual_idea_${color}.svg`;
}



// Switch Them Dynamically
function switchTheme(event) {
    if(event.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        darkMode();
    } else {
        document.documentElement.removeAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'light');
        lightMode();
    }
}

// Event Listener
toggleSwitch.addEventListener('change', switchTheme);

// Check Local Storage For Theme
const currentTheme = localStorage.getItem('theme')
console.log(currentTheme);

if(currentTheme !== null) {

    if(currentTheme === 'dark'){
        document.documentElement.setAttribute('data-theme', 'dark');
        toggleSwitch.toggleAttribute('checked');
        darkMode();
    } else {
        document.documentElement.removeAttribute('data-theme', 'dark');
        lightMode();
    }
}