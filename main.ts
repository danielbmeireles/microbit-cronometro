let cronometro_ativo = 0
let cronometro = 0
input.onButtonPressed(Button.A, function () {
    cronometro_ativo = 0
    while (cronometro_ativo == 0) {
        cronometro += 1
        basic.showNumber(cronometro)
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
input.onButtonPressed(Button.B, function () {
    cronometro_ativo = -1
    basic.showNumber(cronometro)
})
