// basic light function
let l = 0
images.createImage(`
    . # . . .
    . # . . .
    . # . . .
    . # . . .
    . # # # .
    `).showImage(0)
basic.forever(function () {
    l = input.lightLevel()
    led.plotBarGraph(l,255)
})
