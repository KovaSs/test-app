import React from 'react'
import PropTypes from 'prop-types'

const GreetingButton = ({greeting, text, showConsole}) => {
  const showFunc = showConsole ? console.log : alert

  const alertGreeting = (greeting) => showFunc(greeting)
  
  return (
    <button onClick={alertGreeting.bind(null, greeting)}>
      {text}
    </button>
  )
}

GreetingButton.propTypes = {
  text: PropTypes.string.isRequired,
  greeting: PropTypes.string.isRequired,
  showConsole: PropTypes.bool
}

export default GreetingButton






