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

 background.onload = function() {
character.onload = function() {
         game();
     };
 
    };

let spriteWidth = 1750 / 8;
let spriteHeight = 846/3;
let characterWidth=160;
let characterHeight=220;
let x =60;
let y = 420;
frameX=0;
gameframe=0;
staggerframe=3;
let moving= false;
let speed=3.5;
let direction= "right";
let jumping= false;
let velocityY=0;
let gravity=0.8;
let keys={
    ArrowRight:false,
    ArrowLeft:false
};
let score=0;
let coins = [];
let coinWidth = 70;
let coinHeight = 70;
let coinTimer = 0;

function createCoin() {
    let lastCoinX = canvas.width;
    if (coins.length > 0) {
        lastCoinX = coins[coins.length - 1].x;
    }
    let newCoin = {
        x: lastCoinX + 300,
        y: 320 + Math.random() * 190,
        collected: false
    };
    coins.push(newCoin);
}


function checkCoinCollision() {
    for (let i = 0; i < coins.length; i++) {
        let currentCoin = coins[i];
        if (
            !currentCoin.collected &&
            x < currentCoin.x + coinWidth &&
            x + characterWidth > currentCoin.x &&
            y < currentCoin.y + coinHeight &&
            y + characterHeight > currentCoin.y
        ) {
            score += 20;
            currentCoin.collected = true;
            coinSound.currentTime = 0;
            coinSound.play();
        }
    }
}
function drawScore() {
    c.fillStyle = "green";
    c.fillRect(20, 20, 210, 60);
    c.strokeStyle = "#ffffff";
    c.lineWidth = 2;
    c.strokeRect(20, 20, 210, 60);
    c.fillStyle = "white";
    c.font = "25px Arial";
    c.drawImage(coin, 35, 30, 40, 40);
    c.fillText(
        "Score: " + score, 85, 60
    );
}

function animate(){
    c.clearRect(0, 0, canvas.width, canvas.height);
    backgroundX -= backgroundSpeed;
    if (backgroundX <= -canvas.width) {
        backgroundX = 0;
    }
    c.drawImage( background, backgroundX, 0, canvas.width, canvas.height);
c.drawImage(background, backgroundX + canvas.width, 0, canvas.width, canvas.height);
    moving=false;
    if (keys.ArrowRight){
        x+=speed;
        direction="right";
        moving=true;
    }
    if (keys.ArrowLeft){
        x-=speed;
        direction="left";
        moving=true;
    }
    if (jumping){
        y+=velocityY;
        velocityY+=gravity;
        if (y>=420){
            y=420;
            jumping=false;
            velocityY=0;
            frameX=0;
        }
    }
    if (jumping){
        if (gameframe%staggerframe===0){
            frameX++;
            if(frameX>=8){
                frameX=0;
            }
        }
}
else if (moving){
    if(gameframe%staggerframe===0){
        frameX++;
        if(frameX>=8){
            frameX=0;
        }
    }
}
else{
    frameX=0;
}
let row=0;
if (jumping){
    row=2;
}
else if (direction==="right"){
    row=0;
}
else if( direction==="left"){
    row=1;
}
c.drawImage(character, frameX * spriteWidth, row * spriteHeight, spriteWidth, spriteHeight, x, y, characterWidth, characterHeight);
drawScore();
for (let i = 0; i < coins.length; i++) {
    let currentCoin = coins[i];
    if (!currentCoin.collected) {
        c.drawImage(coin, currentCoin.x, currentCoin.y, coinWidth, coinHeight);
    }
}