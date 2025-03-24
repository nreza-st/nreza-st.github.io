let input, button, greeting, slider, fsButton

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
}

function toggleFullscreen() 
{
  let fs = fullscreen()
  fullscreen(!fs)
}