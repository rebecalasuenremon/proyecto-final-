radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        maqueen_anda = 1
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 50)
        basic.showLeds(`
            . . # . .
            . # # # .
            # # # # #
            . . # . .
            . . # . .
            `)
    }
    if (receivedNumber == 0) {
        maqueen_anda = 0
        maqueen.motorStop(maqueen.Motors.All)
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    }
    if (receivedNumber == 2) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 50)
        maqueen.motorStop(maqueen.Motors.M2)
        basic.showLeds(`
            . . # . .
            . . # # .
            # # # # #
            . . # # .
            . . # . .
            `)
        if (maqueen_anda == 0) {
            maqueen.motorStop(maqueen.Motors.All)
        } else {
            maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 50)
        }
    }
    if (receivedNumber == 3) {
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 50)
        maqueen.motorStop(maqueen.Motors.M1)
        basic.showLeds(`
            . . # . .
            . # # . .
            # # # # #
            . # # . .
            . . # . .
            `)
        if (maqueen_anda == 0) {
            maqueen.motorStop(maqueen.Motors.All)
        } else {
            maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 50)
        }
    }
    if (receivedNumber == 4) {
        linea_negra = !(linea_negra)
    }
})
let linea_negra = false
let maqueen_anda = 0
music.playMelody("A F E F D G E F ", 120)
basic.showString("Hola")
radio.setGroup(185)
basic.forever(function () {
    maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOn)
    basic.pause(100)
    maqueen.writeLED(maqueen.LED.LEDLeft, maqueen.LEDswitch.turnOff)
    basic.pause(100)
    maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOn)
    basic.pause(100)
    maqueen.writeLED(maqueen.LED.LEDRight, maqueen.LEDswitch.turnOff)
    basic.pause(100)
})
basic.forever(function () {
    if (maqueen.Ultrasonic(PingUnit.Centimeters) == 6) {
        maqueen.motorStop(maqueen.Motors.All)
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
        radio.sendNumber(0)
    }
    if (linea_negra) {
        if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 0 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 0) {
            maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 50)
        } else {
            if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 0 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 1) {
                maqueen.motorStop(maqueen.Motors.M1)
                maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 50)
            }
            if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 1 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 0) {
                maqueen.motorStop(maqueen.Motors.M2)
                maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 50)
            }
        }
    } else {
        maqueen.motorStop(maqueen.Motors.All)
    }
})
