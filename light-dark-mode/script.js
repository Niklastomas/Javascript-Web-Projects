const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');
let isDark = false;



// Toggle between dark and light mode
function toggleDarkLightMode(isDark){
    nav.style.backgroundColor = isDark ? 'rgb(0 0 0 / 50%)' : 'rgb(255 255 255 / 50%)';
    textBox.style.backgroundColor = isDark ? 'rgb(255 255 255 / 50%)' : 'rgb(0 0 0 / 50%)';
    toggleIcon.children[0].textContent = isDark ? 'Dark Mode' : 'Light Mode';
    toggleIcon.children[1].classList.replace(isDark ? 'fa-moon' : 'fa-sun',  isDark ? 'fa-sun' : 'fa-moon');
    imageMode(isDark ? 'dark' : 'light');
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
        isDark = true;
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        toggleDarkLightMode(isDark);
    } else {
        isDark = false;
        document.documentElement.removeAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'light');
        toggleDarkLightMode(isDark);
    }
}

// Event Listener
toggleSwitch.addEventListener('change', switchTheme);

// Check Local Storage For Theme
const currentTheme = localStorage.getItem('theme')
console.log(currentTheme);

if(currentTheme !== null) {

    if(currentTheme === 'dark'){
        isDark = true;
        document.documentElement.setAttribute('data-theme', 'dark');
        toggleSwitch.toggleAttribute('checked');
        toggleDarkLightMode(isDark);
    } else {
        isDark = false;
        document.documentElement.removeAttribute('data-theme', 'dark');
        toggleDarkLightMode(isDark);
    }
}