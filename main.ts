input.onButtonPressed(Button.A, function () {
    basic.showString("55555")
})
input.onGesture(Gesture.ScreenUp, function () {
    basic.showLeds(`
        # # . # #
        # # . # #
        . . . . .
        # . . . #
        . # # # .
        `)
    basic.pause(1000)
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        . # # # .
        # . . . #
        `)
    basic.clearScreen()
})
input.onGesture(Gesture.ScreenDown, function () {
    basic.showIcon(IconNames.Heart)
    basic.clearScreen()
    basic.pause(2000)
    basic.showIcon(IconNames.Heart)
    basic.clearScreen()
    basic.showIcon(IconNames.Target)
})
input.onSound(DetectedSound.Loud, function () {
    basic.showIcon(IconNames.Heart)
    basic.clearScreen()
    basic.pause(2000)
    basic.showLeds(`
        . . # . .
        . . # . .
        . . # . .
        # # # # #
        # # # # #
        `)
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("kuy")
})
input.onButtonPressed(Button.B, function () {
    basic.showString("gu kuy 56")
})
basic.forever(function () {
	
})
