function setup()
{
createCanvas(400, 400)
}

function draw() 
{
for (let x = 50; x < width; x += 50) 
    {
        for (let y = 50; y < height; y += 50) 
            {
                fill(157, 192, 139, 180)
                stroke(0, 50)
            rect(x, y, 40, 40)
        }
    }
noLoop()
}

