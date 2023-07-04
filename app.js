
// Dark Mode switcher
function changeMode() {
  changeClasses()
  changeText()
  console.log('cliquei')
}

function changeClasses() {
  modeBtn.classList.toggle(darkModeClass); 
  Btn.classList.toggle(darkModeClass); 
  container.classList.toggle(darkModeClass); 
  modeTitle.classList.toggle(darkModeClass); 
  body.classList.toggle(darkModeClass); 
  footer.classList.toggle(darkModeClass); 
  
}

function changeText() {
  const lightText = 'Light Mode'
  const darkText  = 'Dark Mode'
  const lightIcon = `<i style='color:yellow' class="fa-solid fa-sun"></i>`
  const darkIcon  = `<i class="fa-solid fa-moon"></i>`
  if (body.classList.contains(darkModeClass)) {
      modeTitle.innerHTML = lightText
      modeBtn.innerHTML = lightIcon
      return
  } 
  modeTitle.innerHTML = darkText
  modeBtn.innerHTML = darkIcon
}

const darkModeClass = 'dark-mode'

const modeBtn    = document.getElementById('modeToggle')

const modeTitle  = document.getElementById('mode-title')
const body       = document.getElementsByTagName('body')[0]
const footer     = document.getElementsByTagName('footer')[0]

const container        = document.getElementById('info-container')
const Btn        = document.getElementById('button')


modeBtn.addEventListener('click', changeMode)


let button       = document.querySelector('#button')
let name         = document.querySelector('#name' )
let height       = document.querySelector('#height')
let mass         = document.querySelector('#mass')
let birth_year   = document.querySelector('#birth_year')
let gender       = document.querySelector('#gender')
let hair_color   = document.querySelector('#hair_color')
let skin_color   = document.querySelector('#skin_color')
let eye_color    = document.querySelector('#eye_color')
let homeworld    = document.querySelector('#homeworld')



async function getInfo() {

  updateInfoLoading()
  await fakePromise();

  let randomNumber = Math.floor((Math.random() * 88) + 1)

  let apiUrl = 'https://swapi.dev/api/people/' + randomNumber


  axios.get(apiUrl).then(function(response){
      updateInfo(response.data)
  }).catch(e => {
      console.log(updateInfoError())
  })
}

function updateInfo(data) {
  name.innerText       = 'Name: '   + data.name
  height.innerText     = 'Height: ' + data.height + ' cm'
  mass.innerText       =       `Mass: ${data.mass}`
  birth_year.innerText = `Birth year: ${data.birth_year}`
  gender.innerText     =     `Gender: ${data.gender}`
  hair_color.innerText = 'Hair color: ' + data.hair_color
  skin_color.innerText = 'Skin solor: ' + data.skin_color
  eye_color.innerText  = 'Eye color: '  + data.eye_color
  homeworld.innerText  = 'Homeworld: '  + data.homeworld
}   


function updateInfoError() {
  name.innerText       = 'Oh no there is no data about this person.' 
  height.innerText     = ''
  mass.innerHTML       = '<img src="/assets/no-data.jpeg" style="width:100%;">'
  birth_year.innerText = ''
  gender.innerText     = 'Try again!'
  hair_color.innerText = ''
  skin_color.innerText = ''
  eye_color.innerText  = ''
  homeworld.innerText  = ''
}   

function updateInfoLoading() {
  name.innerHTML       = 'We are searching for, it please wait...' 
  height.innerHTML     = '<img src="/assets/leia.gif" style="width: 100%; heigth: 80%;">'
  mass.innerText       = ''
  birth_year.innerHTML = ''
  gender.innerText     = ''
  hair_color.innerHTML = ''
  skin_color.innerText = ''
  eye_color.innerHTML  = ''
  homeworld.innerText  = ''
}

const fakePromise = () => new Promise((resolve) => setTimeout(resolve, 3000));

button.addEventListener('click', getInfo);
