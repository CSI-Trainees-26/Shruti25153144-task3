const canvas = document.getElementById("canvas");
const c = canvas.getContext("2d");
let background= new Image();
background.src="image/game.jpeg";
let character= new Image();
character.src="image/player-sprite.png";

let backgroundX = 0;
let backgroundSpeed = 2.2;
let gameLogin = document.getElementById("gameLogin");
gameLogin.volume = 0.7;
gameLogin.play();
document.addEventListener("click", function() {
    gameLogin.play();} , { once: true }
);

let coin = new Image();
coin.src = "image/coin.png";
let coinSound = new Audio("audio/coin.mpeg");