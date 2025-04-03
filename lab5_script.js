let score = 0
let highScore = 0
let playerName = ''
let savedName = ''
let heartX, heartY
let gameOver = false
let nameInput
let saveButton
let tryAgainButton
let info

function setup()
{
createCanvas(300, 400)
heartX = width / 2
heartY = height / 2

nameInput = createInput('')
nameInput.position(10, 530)

saveButton = createButton("Save Name")
saveButton.position(160, 530)
saveButton.mousePressed(saveName)

tryAgainButton = createButton("Restart")
tryAgainButton.position(249, 530)
tryAgainButton.mousePressed(restartGame)
tryAgainButton.hide()

info = createDiv('')
info.position(320, 114)
info.style('font-size', '13px')

let savedScore = getItem("highScore")
let storedName = getItem("playerName")

if (savedScore) highScore = int(savedScore)
if (storedName) 
{
savedName = storedName
nameInput.value(savedName)
}

updateDisplay()
setTimeout(endGame, 10000)
}

function draw() 
{
background(255, 225, 240)

if (!gameOver) 
{
textSize(50)
textAlign(CENTER, CENTER)
text("💗", heartX, heartY)
} 
else {
fill(0)
textSize(40)
text("Game Over", width / 2, height / 2)
}
}

function mousePressed() 
{
if (!gameOver) 
{
let d = dist(mouseX, mouseY, heartX, heartY)
if (d < 30) 
{
score++
heartX = random(50, width - 35)
heartY = random(50, height - 35)
}
}
}

function saveName() 
{
playerName = nameInput.value()
if (playerName != "") 
{
storeItem("playerName", playerName)
savedName = playerName
updateDisplay()
}
}

function updateDisplay() 
{
info.html(
"Score: " + score +
"<br>High Score: " + highScore +
"<br>Player: " + (savedName || "None")
)
}

function endGame() 
{
gameOver = true
if (score > highScore) 
{
highScore = score
storeItem("highScore", highScore)
if (playerName || savedName) 
{
storeItem("playerName", playerName || savedName)
}
}
updateDisplay()
tryAgainButton.show()
}

function restartGame() 
{
score = 0
gameOver = false
heartX = width / 2
heartY = height / 2
tryAgainButton.hide()
updateDisplay()
setTimeout(endGame, 10000)
}