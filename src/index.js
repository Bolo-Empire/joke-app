import generateJoke from './generateJoke'
import './styles/main.scss'
import laughingface from './assets/laughingface.png'

const laughImg = document.getElementById('laughImg')
laughImg.src = laughingface

const jokeBtn = document.getElementById('jokeBtn')
jokeBtn.addEventListener('click', generateJoke)

generateJoke()