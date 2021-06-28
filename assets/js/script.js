const API_URL = 'https://api.quotable.io/random'
const data = document.getElementById('quote')
const response = document.getElementById('text')
const timerElement = document.getElementById('timer')
const WPM = document.getElementById('wpm')
const content = document.getElementById('container')
const result = document.getElementById('result')
const times = document.getElementById('times')
const errors = document.getElementById('errors')

let mistakes = 0
let charactersTyped = 0
let time= 10
let timeElapsed = 0
let timeLeft=time


response.addEventListener('input', () => {
  const arrayData = data.querySelectorAll('span')
  const arrayResponse = response.value.split('')
  charactersTyped++
  arrayData.forEach((charSpan, index) => {
    const char = arrayResponse[index]
    if (char == null) {
      charSpan.classList.remove('right')
      charSpan.classList.remove('wrong')
    } else if (char === charSpan.innerText) {
      charSpan.classList.add('right')
      charSpan.classList.remove('wrong')
    } else {
      charSpan.classList.remove('right')
      charSpan.classList.add('wrong')
      mistakes++
    }
  })

    if (arrayData.length === arrayResponse.length) NewQuote()
})

function getQuote() {
  return fetch(API_URL)
    .then(response => response.json())
    .then(data => data.content)
}

async function NewQuote() {
  const quote = await getQuote()
  data.innerHTML = ''
  quote.split('').forEach(char => {
    const charSpan = document.createElement('span')
    charSpan.innerText = char
    data.appendChild(charSpan)
  })
  response.value = null
}

function disablekeyboard(){
  document.onkeydown = function (e)
    { return false;}
}

function end(){
    disablekeyboard();
    hide()
    wpm = Math.round((((charactersTyped / 5) / timeElapsed) * 60))
    WPM.innerHTML = wpm
    times.innerHTML = time +'s'
    errors.innerHTML = mistakes
}

function start(){
    result.style.display="none"
    NewQuote()
    clearInterval(timer)
    timerElement = setInterval(updateTime, 1000);
    timeElapsed=0
    mistakes=0
    charactersTyped=0
    timeLeft=time
}
                     
function hide(){
    content.style.display = "none"
    result.style.display= "block"
}


function updateTime() {
    if (timeLeft > 0) {
        timeLeft--
        timeElapsed++
        timerElement.innerHTML=timeLeft
    }
    else {
        end();
    }
}

start()
