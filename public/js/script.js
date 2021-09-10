const API_URL = 'https://api.quotable.io/random'
const data = document.getElementById('quote')
const response = document.getElementById('text')
const timerElement = document.getElementById('timer')
const WPM = document.getElementById('wpm')
const content = document.getElementById('container')
const result = document.getElementById('result')
const times = document.getElementById('times')
const errors = document.getElementById('errors')

mistakes=0
charactersTyped=0
time=30
timeElapsed=0
timeLeft=time
time_const=30
theme=2
test=false


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
    {return false;}
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
    clearInterval(timer)

    if (time_const == 15) {
      document.getElementById('time-choice1').style.color = '#79a616';
    }
    else if (time_const == 30) {
      document.getElementById('time-choice2').style.color = '#79a616';
    }
    else if (time_const == 45) {
      document.getElementById('time-choice3').style.color = '#79a616';
    }
    else if (time_const == 60) {
      document.getElementById('time-choice4').style.color = '#79a616';
    }
    if (theme ==  1) {
      document.getElementById('theme-choice2').style.color = '#79a616';
    }
    if (theme ==  2) {
      document.getElementById('theme-choice2').style.color = '#79a616';
    }
    if (theme ==  3) {
      document.getElementById('theme-choice2').style.color = '#79a616';
    }
    if (theme ==  4) {
      document.getElementById('theme-choice2').style.color = '#79a616';
    }

    timerElement = setInterval(updateTime, 1000);
    timeElapsed=0
    mistakes=0
    charactersTyped=0
    timeLeft=time
}

function prestart() {
  result.style.display = "none"
  NewQuote()
  clearInterval(timer)
  response.disabled = true;

  if (time_const == 15) {
    document.getElementById('time-choice1').style.color = '#79a616';
  }
  else if (time_const == 30) {
    document.getElementById('time-choice2').style.color = '#79a616';
  }
  else if (time_const == 45) {
    document.getElementById('time-choice3').style.color = '#79a616';
  }
  else if (time_const == 60) {
    document.getElementById('time-choice4').style.color = '#79a616';
  }
  if (theme == 1) {
    document.getElementById('theme-choice2').style.color = '#79a616';
  }
  if (theme == 2) {
    document.getElementById('theme-choice2').style.color = '#79a616';
  }
  if (theme == 3) {
    document.getElementById('theme-choice2').style.color = '#79a616';
  }
  if (theme == 4) {
    document.getElementById('theme-choice2').style.color = '#79a616';
  }
  
  document.addEventListener('keypress', (e) => {
    if (e.code === "Space") {
      document.getElementById("quote").style.webkitFilter = "none";
      document.getElementById("quote").style.mozFilter = "none";
      document.getElementById("quote").style.oFilter = "none";
      document.getElementById("quote").style.msFilter = "none";
      document.getElementById("quote").style.filter = "none";
    }
  });
  
  if (test == true) {
    response.disabled = false;
  }

  timerElement.innerHTML = timeLeft
  timeElapsed = 0
  mistakes = 0
  charactersTyped = 0
  timeLeft = time
}

function enabletextarea() {
  response.disabled = false;
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

document.getElementById('time-choice1').onclick = function () {
  time = 15;
  timeLeft = 15;
  time_const =15;
  timerElement.innerHTML = timeLeft
  document.getElementById('time-choice1').style.color = '#79a616';
  document.getElementById('time-choice2').style.color = '#48494b';
  document.getElementById('time-choice3').style.color = '#48494b';
  document.getElementById('time-choice4').style.color = '#48494b';
}

document.getElementById('time-choice2').onclick = function () {
  time = 30;
  timeLeft = 30;
  time_const = 30;
  timerElement.innerHTML = timeLeft
  document.getElementById('time-choice1').style.color = '#48494b';
  document.getElementById('time-choice2').style.color = '#79a616';
  document.getElementById('time-choice3').style.color = '#48494b';
  document.getElementById('time-choice4').style.color = '#48494b';
}

document.getElementById('time-choice3').onclick = function () {
  time = 45;
  timeLeft = 45;
  time_const = 45;
  timerElement.innerHTML = timeLeft
  document.getElementById('time-choice1').style.color = '#48494b';
  document.getElementById('time-choice2').style.color = '#48494b';
  document.getElementById('time-choice3').style.color = '#79a616';
  document.getElementById('time-choice4').style.color = '#48494b';
}

document.getElementById('time-choice4').onclick = function () {
  time = 60;
  timeLeft = 60;
  time_const = 60;
  timerElement.innerHTML = timeLeft
  document.getElementById('time-choice1').style.color = '#48494b';
  document.getElementById('time-choice2').style.color = '#48494b';
  document.getElementById('time-choice3').style.color = '#48494b';
  document.getElementById('time-choice4').style.color = '#79a616';
}

prestart()
