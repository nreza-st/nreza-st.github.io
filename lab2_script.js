let ball=
{
x: 0,
y: 0,
size: 20,
speedX: 6,
speedY: 5,
color: [229, 0, 70],

    display()
    {
    fill(this.color)
    noStroke()
    ellipse(this.x, this.y, this.size)
    },

    move() 
    {
    this.x += this.speedX
    this.y += this.speedY
        if (this.x > width || this.x < 0) this.speedX *= -1
        if (this.y > height || this.y < 0) this.speedY *= -1
    }
}


function setup()
{
    createCanvas(windowWidth, windowHeight)
    ball.x = width / 2
    ball.y = height / 2
}

function draw()
{
background(255)
ball.move()
ball.display()
}


