var canvas = document.getElementById('the-canvas'),
    ctx = canvas.getContext('2d'),
    width = 800,
    height = 600,
    updateX = 1,
    updateY = 1;

canvas.width = width;
canvas.height = height;

var ball = {
    x: 10,
    y: height / 2,
    radius: 10,
    color: 'black',

    draw: function () {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx.fillStyle = this.color;
        ctx.fill();
    }
};

function clearCanvas() {
    ctx.clearRect(0, 0, width, height);
}

function update() {
    clearCanvas();
    ball.draw();

    if (ball.x < 10 || ball.x > width - 10) {
        updateX = -updateX;
    }
    if (ball.y < 10 || ball.y > height - 10) {
        updateY = -updateY;
    }

    ball.x += updateX;
    ball.y += updateY;
}


setInterval(update, 60 / 1000);
