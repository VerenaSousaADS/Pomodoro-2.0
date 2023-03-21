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


export default function({
    controls,
    timer,
    sound
}){

// Events

buttonPlay.addEventListener('click', function(){
    controls.play()
    timer.countdown()
    sound.pressButton()
})

buttonStop.addEventListener('click', function(){
    controls.stop()
    timer.hold()
    sound.pressButton()
})

buttonPlus.addEventListener('click', function(){
    controls.reset()
    timer.plus()
    sound.pressButton()
})
buttonMinus.addEventListener('click', function(){
   controls.reset()
   timer.minus()
   sound.pressButton()
})
 

buttonForest.addEventListener('click', function() {
    controls.soundForest()
    sound.pressButton()
    sound.audioForest()
})

buttonRain.addEventListener('click', function() {
    controls.soundRain()
    sound.pressButton()
    sound.audioRain()
})

buttonCoffeeShop.addEventListener('click', function() {
    controls.soundCoffeeShop()
    sound.pressButton()
    sound.audioCoffeeShop()
})

buttonFireplace.addEventListener('click', function() {
    controls.soundFireplace()
    sound.pressButton()
    sound.audioFireplace()
})


}