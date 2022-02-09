// const canvas = document.querySelector('canvas');
// const ctx = canvas.getContext('2d');
// canvas.width = width = window.innerWidth;
// canvas.height =  height = window.innerHeight;

const player = document.getElementById('player');
const stage = document.getElementById('stage');
let playerInfo = player.getBoundingClientRect();
const gameover = document.getElementById('gameover');
const restartBtn = document.querySelector('button');
let scoreCount = 0;

let jumps = false;
let jumpsOver = false;

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


window.addEventListener('keydown', e => {
    if (e.key === ' ' && (!jumps)) {
        jumps = true;
        player.setAttribute('class', 'isJumping')
        setTimeout(() => {
            player.removeAttribute('class', 'isJumping');
            jumps = false}, 800);

            setTimeout(() => {
                jumpsOver = true;
            }, 100);
            setTimeout(() => {
                jumpsOver = false;
            }, 500);
    }
});

let enemy = document.getElementById('enemy');
let enemyInfo = enemy.getBoundingClientRect();

let speed = 10;
let position = random(window.innerWidth, (window.innerWidth+500));
enemy.style.left = position;
 
function movingEnemy() {
    position -= speed;
    if (position < -250) {
        position = random(window.innerWidth, (window.innerWidth+500));
        scoreCount++;
        console.log(scoreCount);
    }
    enemy.style.left = position;
}
function gameOver() {
    speed = 0;
    gameover.style.display = 'flex';
    restartBtn.addEventListener('click', () => {
        speed = 10;
        position = random(window.innerWidth, (window.innerWidth+500));
        gameover.style.display = 'none';
    })
}
function collisionDetection() {
    if (!jumpsOver && position < (window.innerWidth / 10 + 50) && position + 50 > window.innerWidth/10 ) {
        gameOver()
    } else {
        enemy.backgroundColor = 'rgb(0,255 ,0)'
    }
}


function loop() {
    movingEnemy();
    collisionDetection(); 

    requestAnimationFrame(loop)
}
loop();


// class EvilBox {
//     constructor(x, y, sizeX, sizeY, speed) {
//         this.x = x;
//         this.y = y;
//         this.sizeX = sizeX;
//         this.sizeY = sizeY;
//         this.speed = speed;
//     }
//     draw() {
//         // if (!exists) {
//             ctx.fillStyle = "#00ff00";
//             ctx.fillRect(this.x, this.y, this.sizeX, this.sizeY);
//             // exists = true;
//         // }
//     }
//     update() {
//         this.x -= this.speed;
        
//         if ((this.x + this.sizeX) < 0) {
//             this.x = random(width, (width + 500)); 
//         }
//     }
//     collisionDetect() {
//         if (this.x >= (width/10 - this.sizeX) && this.x < width/10 + 50) {
//             if(this.y <= (player.style.top + 50)) {
//                 this.speed = 0;
//                 const gameOver = document.createElement('div').setAttribute('id', 'gameOver');
//                 const para = document.createElement('h1').setAttribute('id', 'gameOverMessage');
//                 para.textContent = 'Game Over!'
//                 document.body.appendChild(gameOver);
//                 gameOver.appendChild(para);
//             }
//         }
//     }
// }

// const evilBox = new EvilBox(
//     random(width, (width + 500)),
//     height/2,
//     50,
//     50,
//     10)

//     function loop() {
//         ctx.fillStyle = 'black';
//         ctx.fillRect(0, 0, width, height);

//         evilBox.draw();
//         evilBox.update();

//         requestAnimationFrame(loop);
//     }
//     loop()
