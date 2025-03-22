//! prevent default behavior
document.addEventListener('contextmenu', (e) => {
  if(!window.innerWidth < 475){
    e.preventDefault()
  }
}, false)

document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault()
})

//! check if the animation is running.
let isContextTxt = false
window.addEventListener('contextmenu', () => {
  const contextMenu = document.querySelector('.context-menu')

  if (isContextTxt) {
    return;
  }

  contextMenu.classList.add('slide-in')
  isContextTxt = true

  setTimeout(() => {
    contextMenu.classList.remove('slide-in')
    isContextTxt = false
  }, 4000)
})

//! button function
const notifyBtn = document.querySelector('.notify-btn')
const email = document.getElementById('email')
const emptyMail = document.getElementById('err1')
const invalidMail = document.getElementById('err2')


const emailRegex = /^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/;

notifyBtn.addEventListener('click', () => {
  const hasValue = email.value.trim()
  const isValid = email.value.match(emailRegex)

  if (!hasValue) {
    email.classList.add('err-state')
    emptyMail.classList.add('show')
    email.focus()
  }
  else if (!isValid) {
    email.classList.add('err-state')
    invalidMail.classList.add('show')
  }
  else{
    email.value = ''
  }
})

email.addEventListener('keydown', () => {
  emptyMail.classList.remove('show')
  email.classList.remove('err-state')
  invalidMail.classList.remove('show')
})


//! dark theme toggle functions
const toggleThemeBtn = document.querySelector('.theme-btn')
const body = document.body

const savedTheme = localStorage.getItem('theme')

if(savedTheme === 'dark') {
  body.classList.add('darkThemeColors')
  toggleThemeBtn.textContent = 'Light'
}

toggleThemeBtn.addEventListener('click', () => {

  if(toggleThemeBtn.textContent == 'Dark') {
    body.classList.add('darkThemeColors')
    toggleThemeBtn.textContent = 'Light'
    localStorage.setItem('theme', 'dark')
  }
  else if(toggleThemeBtn.textContent == 'Light') {
    body.classList.remove('darkThemeColors')
    toggleThemeBtn.textContent = 'Dark'
    localStorage.setItem('theme', 'light')
  }
})