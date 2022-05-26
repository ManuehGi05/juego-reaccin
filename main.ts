let game_started = false
basic.forever(function () {
    game_started = true
    basic.showIcon(IconNames.Heart)
    while (game_started) {
        if (input.pinIsPressed(TouchPin.P1)) {
            game_started = false
        } else {
            if (input.pinIsPressed(TouchPin.P2)) {
                basic.showString("B")
            }
        }
    }
    basic.clearScreen()
})
