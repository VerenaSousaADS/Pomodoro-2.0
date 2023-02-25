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
})

buttonStop.addEventListener('click', function(){
    controls.stop()
})

buttonPlus.addEventListener('click', function(){
   controls.plus()
})
buttonMinus.addEventListener('click', function(){
   controls.minus()
    
})




buttonForest.addEventListener('click', function(){
    controls.forest()
    sound.soundForest()
})

buttonFireplace.addEventListener('click', function(){
    controls.fireplace()
    sound.soundFireplace()

})

buttonRain.addEventListener('click', function(){
    controls.rain()
    sound.soundRain()


}) 

buttonCoffeeShop.addEventListener('click', function(){
    controls.coffeeShop()
    sound.soundCoffeeShop()
}) 
}