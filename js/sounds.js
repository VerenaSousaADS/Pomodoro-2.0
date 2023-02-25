export default function(){

const buttonSoundForest = new
// Floresta
Audio("https://drive.google.com/file/d/1CRHkV72WUMdcqec5GT_KdsqFz0z3VAOA/view")

// Chuva
const buttonSoundRain = new
Audio("https://drive.google.com/file/d/1Ip8xBqAUJ-bty51Wz8JBtX_bWXCgA0P2/view")

// Cafeteria
const buttonSoundCoffeeShop = new

Audio("https://drive.google.com/file/d/1OxLKpCwg2wrxXFNUHgZxJ51QEt0ac5RA/view")

// Lareira
const buttonSoundFireplace = new

Audio("https://drive.google.com/file/d/1MakaBPxJvTa_whaSM3kEbRcxiVd1GRCB/view")


function soundForest(){
    buttonSoundForest.forest()
}

function soundRain(){
    buttonSoundRain.rain()
}

function soundCoffeeShop(){
    buttonSoundCoffeeShop.coffeShop()
}

function soundFireplace(){
    buttonSoundFireplace.fireplace()
}

return{
    soundForest,
    soundRain,
    soundCoffeeShop,
    soundFireplace
}

}