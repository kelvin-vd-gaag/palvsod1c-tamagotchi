let hunger = 50;
let energy = 50;
let joy = 50;
document.getElementById("hunger-value").innerText = "Honger: " +  hunger;
document.getElementById("energy-value").innerText = "Energie: " +  energy;
document.getElementById("joy-value").innerText = "Plezier: " +  joy;

let music = new Audio("background-music.mp3");


function start_game(){
    music.play();
    document.getElementById("start-game-menu").style.display = "none";
}