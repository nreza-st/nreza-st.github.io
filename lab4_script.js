let capture
let img

function setup()

{
createCanvas(500, 500)

capture = createCapture(VIDEO)
capture.size(340, 260)
capture.hide()

img = createImg('https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjPDWQPGq-rGQ4tyrkz7jAS6V_Kh4KPB60-2jpATJxjPO0iIKNAU95YgRWuKzvHsAsvWDiCGJhUNEv-NIqiXZrC__Z6CPjVw1LJHzyr4_nkddOHyP5UDCcsqVIndJBLQXy5Gtdel_cpANU/s1600/finder.png', 'Image')
img.position(20, 90)
img.size(100, 100)
}

function draw()

{
background(255, 200, 255)

image(capture, width / 2 - 160, height / 2 - 120, 320, 240)

textSize(20)
textAlign(CENTER, CENTER)
text('❤️', width / 2, height / 2 + 140)
}