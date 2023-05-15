basic.showLeds(`
    . . . . .
    . . # . .
    . # # # .
    . . # . .
    . . . . .
    `)
basic.pause(500)
basic.showLeds(`
    # # # # #
    # # . # #
    # . . . #
    # # . # #
    # # # # #
    `)
basic.pause(500)
basic.showString("!")
basic.forever(function () {
    serial.writeLine("Intensité lumineuse")
    serial.writeNumber(input.lightLevel())
    serial.writeLine("")
    serial.writeLine("Temperature")
    serial.writeNumber(input.temperature())
    serial.writeLine("")
    serial.writeLine("Champs magnetique")
    serial.writeNumber(input.magneticForce(Dimension.X))
    serial.writeLine("")
    basic.pause(1000)
})
