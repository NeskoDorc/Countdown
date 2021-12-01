const inputContainer = document.getElementById('input-container')
const countdownForm = document.getElementById('countdownForm')
const datePicker = document.getElementById('date-picker')
const countdownEl = document.getElementById('countdown')
const countdownElTitle = document.getElementById('countdown-title')
const countdownBtn = document.getElementById('countdown-button')
const timeElements = document.querySelectorAll('span')
const completeEl = document.getElementById('complete')
const completeElInfo = document.getElementById('complete-info')
const completeBtn = document.getElementById('complete-button')



let countdownTitle = ''
let countownDate = ''
let countdownValue = Date
let countdownActive

const second = 1000
const minute = second * 60
const hour = minute * 60
const day = hour * 24

const today = new Date().toISOString().split('T')[0]
    // today.split('T')
datePicker.setAttribute('min', today)


function updateDom() {
    countdownActive = setInterval(() => {
        const now = new Date().getTime()
        const distance = countdownValue - now
        console.log(distance / 3600)
        const days = Math.floor(distance / day)
        const hours = Math.floor((distance % day) / hour)

        const minutes = Math.floor((distance % hour) / minute)
        const secundes = Math.floor((distance % minute) / second)
        console.log(days, hours, minutes, secundes)

        inputContainer.hidden = true


        if (distance < 0) {
            countdownEl.hidden = true
            clearInterval(countdownActive)
            completeElInfo.textContent = `${countdownTitle} finished on ${countownDate}`
            console.log('finis')
            completeEl.hidden = false

        } else {
            countdownElTitle.textContent = ` ${countdownTitle} `
            timeElements[0].textContent = `${days}`
            timeElements[1].textContent = `${hours}`
            timeElements[2].textContent = `${minutes}`
            timeElements[3].textContent = `${secundes}`

            completeEl.hidden = true
            countdownEl.hidden = false
        }


    }, second)
}

function updateCountdown(e) {
    e.preventDefault();

    countdownTitle = e.srcElement[0].value
    countownDate = e.srcElement[1].value


    if (countdownTitle === '' || countownDate === '') {
        alert('Plaese fill form')
    } else {

        countdownValue = new Date(countownDate).getTime()

        updateDom()
    }




}


// const inputContainer = document.getElementById('input-container')
// const inputContainer = document.getElementById('input-container')
// const inputContainer = document.getElementById('input-container')
function reset() {
    completeEl.hidden = true
    countdownEl.hidden = true
    inputContainer.hidden = false
    clearInterval(countdownActive)

    countdownTitle = ''
    countownDate = ''

}

// event Listenetrs


countdownForm.addEventListener('submit', updateCountdown)
countdownBtn.addEventListener('click', reset)
completeBtn.addEventListener('click', reset)