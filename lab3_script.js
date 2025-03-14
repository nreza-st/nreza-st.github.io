let slider, dropdown, button
let bgColor = '#FFBABA'
let shapeSize = 50
let shapeColor = '#678A74'

function setup() 
{
    createCanvas(600, 400)
    background(bgColor)

    slider = createSlider(20, 100, 50)
    slider.position(50, height - 50)

    dropdown = createSelect()
    dropdown.position(width - 150, 20)
    dropdown.option('Pink', '#FFBABA')
    dropdown.option('Green', '#678A74')
    dropdown.changed(() => bgColor = dropdown.value())

    button = createButton('RANDOM COLOR!')
    button.position(width / 2 - 50, height - 50)
    button.mousePressed(() => shapeColor = [random(255), random(255), random(255)])

}

function draw() 
{
    background(bgColor)
    fill(shapeColor)
    noStroke()
    ellipse(width / 2, height / 2, slider.value())
}
