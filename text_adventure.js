let input, button, greeting, slider, fsButton
let sparkles = []

function setup() 

{

  input = createInput()
  input.position(20, 70)

let cnv = createCanvas(525, 525)
cnv.position(20, 110)

  button = createButton('Insert Name')
  button.position(input.x + input.width + 10, 70)
  button.mousePressed(showGreeting)

  slider = createSlider(12, 32, 20)
  slider.position(button.x + button.width + 10, 70)

fsButton = createButton('Fullscreen')
fsButton.position(slider.x + slider.width + 10, 70)
fsButton.mousePressed(toggleFullscreen)
  
greeting = ''

}

function draw()

{

background(200, 225, 255)
fill(0)
textSize(slider.value())
textAlign(CENTER, CENTER)
text(greeting, width / 2, height / 2)

// Draw sparkles
  for (let i = sparkles.length - 1; i >= 0; i--) 
{
    sparkles[i].update()
    sparkles[i].display()
    if (sparkles[i].alpha <= 0) 
    {
      sparkles.splice(i, 1)
    }
}

}

function keyPressed() 

{
  if (keyCode === ESCAPE) 
  {
    fullscreen(false)
  }
  if (key === 'r' || key === 'R') 
  {
    greeting = ''
  }
}

function showGreeting() 

{
  const name = input.value()
  greeting = `Hello ${name}! \u2665`

for (let i = 0; i < 20; i++) 
  {
    sparkles.push(new Sparkle(random(width), random(height / 2, height - 50)))
  }
}

function toggleFullscreen() 

{
  let fs = fullscreen()
  fullscreen(!fs)
}

class Sparkle 

{
  constructor(x, y) 
  {
    this.x = x
    this.y = y
    this.size = random(3, 8)
    this.alpha = 255
  }

  update() 
  {
    this.alpha -= 4
  }

  display() 
  {
    noStroke()
    fill(255, 255, 150, this.alpha)
    ellipse(this.x, this.y, this.size)
  }

}
