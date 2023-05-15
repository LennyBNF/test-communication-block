input.onButtonPressed(Button.A, function () {
    radio.sendString("A")
})
input.onButtonPressed(Button.AB, function () {
    radio.sendString("")
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("B")
})
radio.setGroup(9)
