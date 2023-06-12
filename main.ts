let humedad = 0
input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.temperature())
    basic.pause(2000)
    basic.clearScreen()
})
input.onPinPressed(TouchPin.P2, function () {
    basic.showNumber(pins.digitalReadPin(DigitalPin.P2))
    basic.pause(1000)
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(input.temperature() + 273)
})
input.onButtonPressed(Button.B, function () {
    humedad = pins.digitalReadPin(DigitalPin.P1)
    radio.sendNumber(pins.digitalReadPin(DigitalPin.P2))
    basic.showNumber(pins.digitalReadPin(DigitalPin.P2))
})
input.onPinPressed(TouchPin.P1, function () {
    basic.showNumber(pins.digitalReadPin(DigitalPin.P1))
    basic.pause(1000)
    basic.clearScreen()
})
