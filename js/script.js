// Controls
const buttonPlay = document.querySelector('.play')
const buttonStop = document.querySelector('.stop')
const buttonPlus = document.querySelector('.plus')
const buttonMinus = document.querySelector('.minus')

// Effects
const buttonSoundForest = document.querySelector('.forest')
const buttonSoundRain = document.querySelector('.rain')
const buttonSoundCoffeeShop = document.querySelector('.coffee-shop')
const buttonFireplace = document.querySelector('.fireplace')

// Timer
let minutesDisplay = document.querySelector('.minutes')
let secondsDisplay = document.querySelector('.seconds')
let minutes = Number(minutesDisplay.textContent)
let timerTimeOut

// function resetControls(){
   
// }


function updateDisplay(minutes, seconds){
    minutesDisplay.textContent = String(minutes).padStart(2, "0")
    secondsDisplay.textContent = String(seconds).padStart(2, "0")
}

function resetTimer(){
    updateDisplay(minutes, 0)
    clearTimeout(timerTimeOut)
}


function countdown(){
    timerTimeOut = setTimeout(function(){
        let seconds = Number(secondsDisplay.textContent)
        let minutes = Number(minutesDisplay.textContent)

        updateDisplay(minutes, 0)

        if(minutes <= 0 && seconds <= 0){
            resetTimer();
            return;
        }


        if(seconds <= 0){
            seconds = 2
            --minutes
        }

        

        updateDisplay(minutes, String(seconds - 1))

        countdown()
        
    }, 1000)
}



buttonPlay.addEventListener('click', function(){
    countdown()
})

buttonStop.addEventListener('click', function(){
    clearTimeout(timerTimeOut)
})

buttonPlus.addEventListener('click', function(){
    let minutes = Number(minutesDisplay.textContent)
    
    minutes =  minutes + 5
   
    
    updateDisplay(minutes, 0)
})
buttonMinus.addEventListener('click', function(){
    let minutes = Number(minutesDisplay.textContent)
    
    minutes =  minutes - 5
    
    
    updateDisplay(minutes, 0)
    
})

