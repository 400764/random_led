let _0 = 0
let _1 = 0
let list: number[] = []
let n = 0
let a = 0
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    _1 = 1
    _0 = 0
    list = []
    for (let index = 0; index < 25; index++) {
        list.push(_0)
    }
    n = 0
    while (n < 3) {
        a = randint(0, 24)
        if (list[a] == 0) {
            list[a] = _1
            n += 1
            if (a % 5 == 0) {
                led.plot(4, Math.floor(a / 5) - 1)
            } else {
                if (a % 5 != 0) {
                    led.plot(a % 5 - 1, Math.floor(a / 5))
                }
            }
        } else {
            a = randint(0, 24)
        }
    }
})
basic.forever(function () {
	
})
