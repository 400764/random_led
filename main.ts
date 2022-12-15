input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    _1 = 1
    _0 = 0
    list = []
    for (let index = 0; index < 25; index++) {
        list.push(_0)
    }
    n = 0
    while (n < time) {
        a = randint(1, 25)
        if (list[a] == 0) {
            list[a] = _1
            if (a % 5 == 0) {
                led.plot(4, Math.floor(a / 5) - 1)
            } else {
                if (a % 5 != 0) {
                    led.plot(a % 5 - 1, Math.floor(a / 5))
                }
            }
            n += 1
        }
        if (list[a] == 1) {
            n += 0
        }
    }
})
input.onButtonPressed(Button.AB, function () {
    time = 1
})
input.onButtonPressed(Button.B, function () {
    time += 1
})
let a = 0
let n = 0
let list: number[] = []
let time = 0
let _1 = 0
let _0 = 0
time = 1
basic.forever(function () {
	
})
