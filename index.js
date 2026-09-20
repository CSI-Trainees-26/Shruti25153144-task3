const canvas = document.getElementById("canvas1");
const c = canvas.getContext("2d");
let background= new Image();
background.src="image/bg.png";

let character = new Image();
character.src="image/wave.png";
let x=400;
let y=200;
function game() {
     c.clearRect(0, 0, canvas.width, canvas.height);
     c.drawImage(background, 0, 0, canvas.width, canvas.height);
     c.drawImage(character, x, y, 600, 500);
     requestAnimationFrame(game);
     }