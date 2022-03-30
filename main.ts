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
})
let maqueen_anda = 0
radio.setGroup(185)
basic.forever(function () {
	
})
