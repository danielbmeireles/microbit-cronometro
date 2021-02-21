let cronometro_ativo = 0
let cronometro = 0
// Apertando o botão A você inicia o cronômetro
input.onButtonPressed(Button.A, function () {
    cronometro_ativo = 0
    while (cronometro_ativo == 0) {
        cronometro += 1
        basic.showNumber(cronometro)
    }
})
// Apertando os botões A e B simultaneamente você zera o cronômetro
input.onButtonPressed(Button.AB, function () {
    cronometro_ativo = -1
    cronometro = 0
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
// Apertando o botão B você para o cronômetro
input.onButtonPressed(Button.B, function () {
    cronometro_ativo = -1
    basic.showNumber(cronometro)
})
