import AnalogClock from './AnalogClock.js';


const get = (target) => {
    return document.querySelector(target)
}

//AnalogClock에 있는 바늘, 숫자 모양 그려주기
document.querySelectorAll('.analog-clock').forEach(AnalogClock);

const $handHour = get(".hand.hour")
const $handMinute = get(".hand.minute")
const $handSecond = get(".hand.second")

//시간 구해오는 함수
const getTime = () => {
    setInterval(() => {
        const date = new Date();

        const hours = date.getHours()           //시간
        const minutes = date.getMinutes()       //분
        const secondes = date.getSeconds()      //초

        rotateHand(hours, minutes, secondes)    //바늘 회전을 그려주는 함수
    })
}

//시간, 분, 초를 이용해서 회전 함수
//360 / 60 = 6도 한번 움직일때 마다 6도씩 움직인다.
const rotateHand = (hours, minutes, secondes) => {
    $handHour.style.setProperty("--deg", hours * 6)
    $handMinute.style.setProperty("--deg", minutes * 6)
    $handSecond.style.setProperty("--deg", secondes * 6)
}

const init = () => {
    window.addEventListener("DOMContentLoaded", () => {
        getTime()
    })
}

init()