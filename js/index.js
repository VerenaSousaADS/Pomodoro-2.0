import Controls from "./controls.js";
import Sound from "./sounds.js";
import Timer from "./timer"
import Events from "./events.js"

import{
    buttonCoffeeShop,
    buttonFireplace,
    buttonForest,
    buttonRain,
    buttonPlay,
    buttonStop,
    buttonPlus,
    buttonMinus
}from "./elements.js"

const controls = Controls({
    buttonCoffeeShop,
    buttonFireplace,
    buttonForest,
    buttonRain,
    buttonPlay,
    buttonStop,
    buttonPlus,
    buttonMinus

})

const timer = Timer ({
    minutesDisplay, 
    secondsDisplay,
    resetTimer
})

const sound = Sound()

Events({controls, timer, sound})