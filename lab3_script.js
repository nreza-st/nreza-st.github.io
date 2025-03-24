let slider, dropdown, button
let bgColor = '#FFBABA'
let shapeSize = 50
let shapeColor = '#678A74'

function setup()
{
createCanvas(400, 400)
background(bgColor)

slider = createSlider(40, 100, 90)
slider.position(180, height - 368)

dropdown = createSelect()
dropdown.position(width - 70, 32.5)
dropdown.option('Pink', '#FFBABA')
dropdown.option('Green', '#678A74')
dropdown.changed(() => bgColor = dropdown.value())

button = createButton('RANDOM COLOR!')
button.position(width / 1 - 130, height - -100)
button.mousePressed(() => shapeColor = [random(255), random(255), random(255)])

textInput = createInput()
textInput.position(10, 500)

displayButton = createButton('Display Text')
displayButton.position(160, 500)
displayButton.mousePressed(() => userText = textInput.value())

userText =''
}

function draw()
{

background(bgColor)
fill(shapeColor)
rectMode(CENTER)
rect(width / 2, height / 2, slider.value(), slider.value())
fill(0)
textAlign(CENTER, CENTER)
textSize(slider.value() / 4)
text(userText, width / 2, height / 2)
}
