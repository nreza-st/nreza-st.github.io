let y = 0
let speed = 2
function setup()
{
createCanvas(400, 200)
background(220)
}
function draw()
{
background(255)
fill(255, 237, 250, 180)
ellipse(200, y, 50, 50)
y += speed
if (y > height || y < 0) {
speed *= -1
}
}