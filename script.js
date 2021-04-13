const dropButton = document.querySelector('.dropButton');
const todayButton = document.querySelector('.todayButton');
const weekButton = document.querySelector('.weekButton');
const slider = document.querySelector('.day-panel-container');
const menu = document.querySelector('.input-menu');

function menuToggle() {
    console.log("Toggling Menu!");
    menu.classList.toggle('open-active');
}

function todayToggle() {
    console.log("Today Menu!");
    transitioning=true;
    slider.classList.toggle('open-active');
    transitioning=false;
}

function weekToggle() {
    console.log("Weekly Menu!");
}

//Slide day panels

let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add("active");
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
    console.log("Active1");
});
slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove("active");
});
slider.addEventListener('mouseup', () => {
    isDown = false; 
    slider.classList.remove("active");
});
slider.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = x - startX;
    slider.scrollLeft = scrollLeft - walk;
});

dropButton.addEventListener("click", menuToggle);
todayButton.addEventListener("click", todayToggle);
weekButton.addEventListener("click", weekToggle);