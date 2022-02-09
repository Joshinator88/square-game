const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

class Ball {
    constructor(x, y, radius) {
        this.x = x;
        this.y = y;
        this.radius = radius;
    }
    draw() {
        ctx.fillStyle = 'red';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, (2*Math.PI));
        ctx.fill();
    }
}

const ball = new Ball (
    window.innerWidth/2,
    window.innerHeight/2,
    40
)
ball.draw();