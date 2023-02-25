export default function Timer({
    minutesDisplay, 
    secondsDisplay,
    resetTimer,
}){
    
// Timer

let minutes = Number(minutesDisplay.textContent)
let timerTimeOut



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
    return{
        countdown,
        resetTimer,
        updateDisplay,
    }
}