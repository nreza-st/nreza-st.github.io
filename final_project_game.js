let hearts = []
let heartbreaks = []
let sparkles = []
let backgroundHearts = []

let score = 0
let bestScore = 0
let level = 1
let timer = 60
let winScore = 50

let catcher
let gameStarted = false
let gameOver = false
let gameWon = false
let showingBackgroundHearts = true

let spawnTimer = 0
let spawnRate = 60

let restartButton
let timerInterval
let canvas
let gradientBg

function setup() 
{
canvas = createCanvas(600, 500)
canvas.parent('gameContainer')

textAlign(CENTER, CENTER)
catcher = new Catcher()

restartButton = createButton('Try Again 💖')
restartButton.id('restartButton')
restartButton.parent('gameContainer')
restartButton.mousePressed(restartGame)
restartButton.hide()

bestScore = getItem('bestScore') || 0

let startBtn = select('#startButton')
startBtn.mousePressed(() => 
{
gameStarted = true
showingBackgroundHearts = false
startBtn.hide()
startTimer()
})

for (let i = 0; i < 20; i++) 
{
backgroundHearts.push(new BackgroundHeart())
}

gradientBg = createGraphics(width, height)
drawGradient(gradientBg)
}

function draw() 
{
image(gradientBg, 0, 0, width, height)
if (showingBackgroundHearts) 
{
for (let heart of backgroundHearts)
{
heart.move()
heart.display()
}
}

if (!gameStarted) return

if (gameOver || gameWon) 
{
drawHUD()
bounceEndText()
restartButton.show()
return
}

drawHUD()

catcher.update()
catcher.display()

spawnTimer++;
if (spawnTimer >= spawnRate)
{
if (random() < 0.75) 
{
hearts.push(new FallingItem(random(30, width - 30), 'heart'))
} else 
{
heartbreaks.push(new FallingItem(random(30, width - 30), 'heartbreak'))
}
spawnTimer = 0
if (spawnRate > 20) spawnRate--;
}

for (let i = hearts.length - 1; i >= 0; i--) 
{
hearts[i].move()
hearts[i].display()
if (catcher.catches(hearts[i])) 
{
score++
if (score % 10 === 0) level++
hearts.splice(i, 1)
spawnSparkles(catcher.x, catcher.y)
if (score >= winScore) 
{
winGame()
}
} else if (hearts[i].y > height) 
{
hearts.splice(i, 1);
}
}

for (let i = heartbreaks.length - 1; i >= 0; i--) 
{
heartbreaks[i].move()
heartbreaks[i].display()
if (catcher.catches(heartbreaks[i])) 
{
endGame()
} 
else if (heartbreaks[i].y > height) 
{
heartbreaks.splice(i, 1)
}
}

for (let i = sparkles.length - 1; i >= 0; i--) 
{
sparkles[i].update()
sparkles[i].display()
if (sparkles[i].life <= 0)
{
sparkles.splice(i, 1);
}
}
}

function drawHUD() 
{
fill(80)
textSize(16)
text(`Score: ${score}`, 70, 20)
text(`Best: ${bestScore}`, width - 70, 20)
text(`Level: ${level}`, width / 2, 20)
text(`Time: ${timer}`, width / 2, 50)
}

function startTimer() 
{
timer = 60;
timerInterval = setInterval(() => 
{
timer--;
if (timer <= 0 && !gameWon) 
{
endGame()
}
}, 1000)
}

function endGame() 
{
gameOver = true
clearInterval(timerInterval)
if (score > bestScore) 
{
bestScore = score
storeItem('bestScore', bestScore)
}
}

function winGame() 
{
gameWon = true;
clearInterval(timerInterval)
if (score > bestScore) 
{
bestScore = score;
storeItem('bestScore', bestScore)
}
}

function restartGame() 
{
  score = 0
  level = 1
  timer = 60
  hearts = []
  heartbreaks = []
  sparkles = []
  gameOver = false
  gameWon = false
  gameStarted = true
  spawnRate = 60
  spawnTimer = 0
  showingBackgroundHearts = false
  restartButton.hide()
  startTimer()
}

class Catcher 
{
  constructor() 
{
this.size = 50
}

update() 
{
this.x = constrain(mouseX, this.size / 2, width - this.size / 2);
this.y = height - 50 + sin(frameCount * 0.1) * 5;
}

display() 
{
textSize(48)
text('💗', this.x, this.y)
}
catches(item) 
{
return dist(this.x, this.y, item.x, item.y) < 35
}
}

class FallingItem 
{
constructor(x, type) 
{
this.x = x
this.y = -20
this.speed = random(3, 5)
this.type = type
}

move() 
{
this.y += this.speed
}

display() 
{
textSize(32)
if (this.type === 'heart') {
text('💗', this.x, this.y)
} else 
{
text('💔', this.x, this.y)
}
}
}

class Sparkle 
{
constructor(x, y) 
{
this.x = x
this.y = y
this.size = random(10, 18)
this.life = 255
this.vx = random(-1.5, 1.5)
this.vy = random(-1.5, 1.5)
this.rotation = random(0, 360)
this.rotationSpeed = random(-2, 2)
}
  
update() 
{
this.x += this.vx
this.y += this.vy
this.rotation += this.rotationSpeed
this.life -= 6
}

display()
{
push()
translate(this.x, this.y)
rotate(radians(this.rotation))
textSize(this.size)
fill(255, 105, 180, this.life)
text('💗', 0, 0)
pop()
}
}

class BackgroundHeart 
{
constructor() 
{
this.x = random(width)
this.y = random(height)
this.speed = random(0.2, 0.8)
this.size = random(16, 24)
}

move() 
{
this.y += this.speed
if (this.y > height) 
{
this.y = 0;
this.x = random(width)
}
}

display() 
{
fill(255, 182, 193, 150)
textSize(this.size)
text('💗', this.x, this.y)
}
}

function drawGradient(pg) 
{
pg.noStroke()
for (let y = 0; y < height; y++) 
{
let inter = map(y, 0, height, 0, 1)
let c = lerpColor(color(255, 230, 245), color(255, 210, 230), inter)
pg.fill(c)
pg.rect(0, y, width, 1)
}
}

function spawnSparkles(x, y) 
{
for (let i = 0; i < 8; i++) 
{
sparkles.push(new Sparkle(x, y))
}
}

function bounceEndText() 
{
let bounce = sin(frameCount * 0.1) * 10;
fill(0)
textSize(36)
if (gameWon) 
{
text('You Win! 🎉', width / 2, height / 2 - 40 + bounce)
} else
{
text('Game Over 💔', width / 2, height / 2 - 40 + bounce)
}
textSize(18)
text(`Score: ${score} | Best: ${bestScore} | Level: ${level}`, width / 2, height / 2 + bounce)
}