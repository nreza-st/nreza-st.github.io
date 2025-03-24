// Tutorial: Conditionals and Interactivity By Greg Benedis-Grab, Layla Quiñones (from p5js.org)
// Source: https://p5js.org/tutorials/conditionals-and-interactivity/

// Initial sun position
let sunHeight = 600

// Color change
let redVal = 1
let greenVal = 1

function setup() 
{
let cnv = createCanvas(600, 400)
cnv.position(5, 110)
noStroke()
}
function draw()
{

// Fill background
  background(redVal, greenVal, 0)

//Sun
  fill(255, 135, 5, 60)
  circle(300, sunHeight, 180)
  fill(255, 100, 0, 100)
  circle(300, sunHeight, 140)
 
//Mountains
  fill(110, 50, 18)
  triangle(200, 400, 520, 253, 800, 400)
  fill(110,95,20)
  triangle(200,400,520,253,350,400)
 
  fill(150, 75, 0)
  triangle(-100, 400, 150, 200, 400, 400)
  fill(100, 50, 12)
  triangle(-100, 400, 150, 200, 0, 400)
 
  fill(150, 100, 0)
  triangle(200, 400, 450, 250, 800, 400)
  fill(120, 80, 50)
  triangle(200, 400, 450, 250, 300, 400)

// Reduce sunheight
  if (sunHeight > 130)
{
    sunHeight -= 2
}

// Increase color variables during sunrise
if (sunHeight < 480) 
{
redVal += 4
greenVal += 2
} 
}

// The following function is my addition + (Combining all of the tutorials)
function Message()
{
  setTimeout(function()
{
alert("Let this dawn be a fresh start! ☀️")
}, 1000)
}