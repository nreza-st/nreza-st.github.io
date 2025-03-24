// Reference: p5.js join() https://p5js.org/reference/p5/join/
// Reference: p5.js concat() https://p5js.org/reference/p5/concat/
// Extension: Stop limit, and visuals

let circles = []
let wordArray = ["Believe"]
let numberArray = [111,222,333]
let wordCycle = ["Believe","Grow","Create"]
let wordIndex = 0
let maxWords = 8 // Limit words

function setup() 
{
createCanvas(400, 400)
textSize(12)
}

function draw() 
{
  background(255, 228, 240)

let phrase = join(wordArray, " ")

fill(0)

  text(`"${phrase}"`,20,30)
  text(`Angel Numbers: ${join(numberArray, ", ")}`,20,55)

for (let i = circles.length - 1; i >= 0; i--) 

{

circles[i].update()
circles[i].display()

if (circles[i].alpha <= 0) 
{
circles.splice(i, 1)
}
}
}

function mousePressed() 
{
if (wordArray.length < maxWords) 
{
    circles.push(new PulsingCircle(mouseX, mouseY))
    append(wordArray, wordCycle[wordIndex])
    wordIndex = (wordIndex + 1) % wordCycle.length
}
}

class PulsingCircle 
{
  constructor(x, y)
{
    this.x = x
    this.y = y
    this.size = 50
    this.alpha = 225
}

update() 
{
this.size += sin(frameCount * 0.3) * 0.5
this.alpha -= 2
}

  display() 

{
noStroke()
fill(231, 84, 128, this.alpha)
ellipse(this.x, this.y, this.size)
}
}