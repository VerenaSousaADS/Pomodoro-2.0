export default function Controls({
    buttonCoffeeShop,
    buttonFireplace,
    buttonForest,
    buttonRain,
    buttonPlus,
    buttonMinus,
    buttonStop,
    buttonPlay
}){

// timer

function play(){
    countdown()
}

function stop(){
    clearTimeout(timerTimeOut)
}

function plus(){
    let minutes = Number(minutesDisplay.textContent)
    
    minutes =  minutes + 5
   
    
    updateDisplay(minutes, 0)
}

function minus(){
    let minutes = Number(minutesDisplay.textContent)
    
    minutes =  minutes - 5
    
    
    updateDisplay(minutes, 0)
}


//effects

function forest(){
    buttonForest.classList.toggle('color')
}

function rain(){
    buttonRain.classList.toggle('color')
}

function coffeeShop(){
    buttonCoffeeShop.classList.toggle('color')
}

function fireplace(){
    buttonFireplace.classList.toggle('color')
}

return {
    forest,
    rain,
    forest,
    coffeeShop,
    fireplace,
    play,
    stop,
    minus,
    plus
}

}