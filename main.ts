let strip = neopixel.create(DigitalPin.P15, 24, NeoPixelMode.RGB)
music.setVolume(0)
basic.forever(function () {
    music.playMelody("C5 C C5 C C5 C C5 C ", 120)
})
basic.forever(function () {
    if (maqueen.Ultrasonic(PingUnit.Centimeters) <= 10) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 255)
        basic.pause(500)
    } else {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 255)
    }
})
