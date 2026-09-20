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
game();
let spriteWidth = 1899 / 7;
let spriteHeight = 828;
let characterWidth=190;
let characterHeight=470;
frameX=0;
gameframe=0;
staggerframe=25;
function animate(){
    c.clearRect(0, 0, canvas.width, canvas.height);
    c.drawImage(background, 0, 0, canvas.width, canvas.height);
    if (gameframe % staggerframe===0){
        frameX++;
        if (frameX>=6) {
            frameX=0;
    }
}
    c.drawImage(character, frameX*spriteWidth, 0 , spriteWidth, spriteHeight,x , y, characterWidth, characterHeight);
    gameframe++;
    requestAnimationFrame(animate);
};
animate();


let audioButton = document.getElementById("audioButton");
let gameAudio = document.getElementById("gameAudio");
let isPlaying = false;
audioButton.addEventListener("click", function() {
    if (isPlaying == false) {
        gameAudio.play();
        audioButton.src = "image/mute.png";
        isPlaying = true;
    } else {
        gameAudio.pause();
        audioButton.src = "image/unmute.png";
        isPlaying = false;
    }
});

let startGame = document.getElementById("startGame");
let startAudio= document.getElementById("startAudio");
startGame.addEventListener("click", function() {
    event.preventDefault();
    gameAudio.pause();
    gameAudio.currentTime = 0;
    audioButton.src= "image/unmute.png";
    startAudio.play();
    setTimeout(function(){
        window.location.href="game.html";}, 900);
});
