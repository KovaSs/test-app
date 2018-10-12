import React, { Component } from 'react'
import ReactDOM from 'react-dom'; 
// import App from './App'; 
// import event from './Event'; 
// import StatlesComponent from './StatlesComponent'; 
// import {SearchForm, SearchFormClass} from './ControldAndUncontroldComponent'; 
import FormField from './ControldAndUncontroldComponent/FormField'; 

/* const App = () => (
  <div>
    <SearchForm/>
    <SearchFormClass/>
  </div>
)
 */

 class App extends Component {
  state = {
    email: '',
    password: ''
  } 
  render() {
    
    return (
      <form onSubmit={this.submit}>
        <FormField
        name='email'
        label='Электронная почта: '
        value={this.state.email}
        onChange={this.handleInput}
        />
        <FormField
        name='password'
        label='Пароль: '
        value={this.state.password}
        onChange={this.handleInput}
        />
        <button type='submit'>Войти</button>
      </form>
     )
   }
  firstToUpper = string => {
    if(!string) return string
    const part = string.slice(1).toLowerCase()
    return `${string[0].toUpperCase()}${part}`
    } 
  changeCity = e => {
    this.setState ({
      city: this.firstToUpper(e.currentTarget.value)
    })
    const field = e.currentTarget
    field.value = this.firstToUpper(field.value)
   }
  submit = e => {
    e.preventDefault()
    console.log('submit ► ', this.state)
   }
   // Универсальный обработчик событий
  handleInput = e => {
    const field = e.currentTarget
      this.setState ({
      [field.name]: field.value
    })
   }
 }
 

ReactDOM.render(<App /> , document.getElementById('root'));


