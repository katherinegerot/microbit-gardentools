function getLight () {
    l = input.lightLevel()
    led.plotBarGraph(
    l,
    255
    )
}
let l = 0
weatherbit.startWeatherMonitoring()
basic.forever(function () {
    getLight()
})
