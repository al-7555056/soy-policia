input.onButtonPressed(Button.A, function () {
    si += 1
    if (si == 2) {
        si = 0
    }
})
let si = 0
let strip = neopixel.create(DigitalPin.P15, 24, NeoPixelMode.RGB)
music.setVolume(0)
basic.forever(function () {
    music.playMelody("C5 C C5 C C5 C C5 C ", 120)
})
basic.forever(function () {
    if (maqueen.Ultrasonic(PingUnit.Centimeters) <= 10) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 255)
        basic.pause(500)
        maqueen.motorStop(maqueen.Motors.All)
        music.setVolume(255)
        for (let index = 0; index < 4; index++) {
            strip.showColor(neopixel.colors(NeoPixelColors.Red))
            basic.pause(200)
            strip.showColor(neopixel.colors(NeoPixelColors.Blue))
            basic.pause(200)
        }
        strip.showColor(neopixel.colors(NeoPixelColors.Black))
        music.setVolume(0)
        if (si == 1) {
            if (randint(0, 1) == 1) {
                maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
                maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 255)
                basic.pause(500)
                maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
            } else {
                maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
                maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 255)
                basic.pause(500)
                maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
            }
        }
    } else {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
    }
})
