setInterval(setClock,1000);

const hourHand = document.querySelector("[data-hour-hand]");
const minuteHand = document.querySelector("[data-minute-hand]");
const secondHand = document.querySelector("[data-second-hand]");


function setClock(){
    const now = new Date();

    const secondRatio = now.getSeconds()/60;
    const minuteRatio = (secondRatio + now.getMinutes())/60;
    const hourRatio = (minuteRatio + now.getHours())/12;

    setPosition(secondHand,secondRatio)
    setPosition(minuteHand,minuteRatio)
    setPosition(hourHand,hourRatio)

}

function setPosition(element,value){
    element.style.setProperty('--rotation',value * 360);
}
setClock();


// setInterval(setClock, 1000)

// const hourHand = document.querySelector('[data-hour-hand]')
// const minuteHand = document.querySelector('[data-minute-hand]')
// const secondHand = document.querySelector('[data-second-hand]')

// function setClock() {
//   const currentDate = new Date()
//   const secondsRatio = currentDate.getSeconds() / 60
//   const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60
//   const hoursRatio = (minutesRatio + currentDate.getHours()) / 12
//   setRotation(secondHand, secondsRatio)
//   setRotation(minuteHand, minutesRatio)
//   setRotation(hourHand, hoursRatio)
// }

// function setRotation(element, rotationRatio) {
//   element.style.setProperty('--rotation', rotationRatio * 360)
// }

// setClock()