import React from 'react'
import GreetingButton from './GreetingButton'

const App = () => (
  <GreetingButton 
    text='Нажми на меня!'
    greeting="Приветствую тебя!"
    showConsole
  />
)

export default App