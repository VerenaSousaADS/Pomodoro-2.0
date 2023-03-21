import {
    buttonCoffeeShop,
    buttonFireplace,
    buttonForest,
    buttonRain
} from "./elements.js"

export default function () {

    const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")
    const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")

    const bgSoundForest = new
    // Floresta
    Audio("./audios/Floresta.wav")

    // Chuva
    const bgSoundRain = new
    Audio("./audios/Chuva.wav")

    // Cafeteria
    const bgSoundCoffeeShop = new

    Audio("./audios/Cafeteria.wav")

    // Lareira
    const bgSoundFireplace = new

    Audio("./audios/Lareira.wav")


    bgSoundForest.loop = true
    bgSoundFireplace.loop = true
    bgSoundCoffeeShop.loop = true
    bgSoundRain.loop = true



    function pressButton() {
        buttonPressAudio.play()
    }

    function timeEnd() {
        kitchenTimer.play()
    }


    function audioForest() {
        buttonForest.classList.contains('active') ?
            bgSoundForest.play() :
            bgSoundForest.stop()
    }

    function audioRain() {
        buttonRain.classList.contains('active') ?
            bgSoundRain.play() :
            bgSoundRain.stop()
    }

    function audioCoffeeShop() {
        buttonCoffeeShop.classList.contains('active') ?
            bgSoundCoffeeShop.play() :
            bgSoundCoffeeShop.stop()
    }

    function audioFireplace() {
        buttonFireplace.classList.contains('active') ?
            bgSoundFireplace.play() :
            bgSoundFireplace.stop()
    }


    return {

        audioCoffeeShop,
        audioFireplace,
        audioForest,
        audioRain,
        pressButton,
        timeEnd
    }

}