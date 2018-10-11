import React, { Component } from 'react'

export class StatlesComponent extends Component {
  
  state = {
    isChecked: true,
    counter: 0
  }

  handleBtnCounter = () => {
    this.setState({
      counter: this.state.counter + 1
    })
  }

  handleBtn = () => {
    this.setState({
      isChecked: !this.state.isChecked
    })
  }

  render() { 
    return (
      <div>
      { this.state.isChecked ?
      <div>Привет!</div> : <div>Пока!</div>  }
      <button onClick={this.handleBtn}>{this.state.isChecked ? 'Выйти!' : 'Войти!'}</button>
      <button onClick={this.handleBtnCounter}>Значение: {this.state.counter}</button>
    </div>
    )
    
  }
}

export default StatlesComponent