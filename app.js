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

