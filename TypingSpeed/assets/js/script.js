const API_URL = 'http://api.quotable.io/random'
const data = document.getElementById('quote')
const response = document.getElementById('text')

response.addEventListener('input', () => {
  const arrayData = data.querySelectorAll('span')
  const arrayResponse = response.value.split('')

  let right = true
  arrayData.forEach((charSpan, index) => {
    const char = arrayResponse[index]
    if (char == null) {
      charSpan.classList.remove('right')
      charSpan.classList.remove('wrong')
      right = false
    } else if (char === charSpan.innerText) {
      charSpan.classList.add('right')
      charSpan.classList.remove('wrong')
    } else {
      charSpan.classList.remove('right')
      charSpan.classList.add('wrong')
      right = false
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

NewQuote()

