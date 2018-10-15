import React, { Component } from 'react'

export class Calculator extends Component {
  state = {
    rubAmount: '',
    rate: 65
  }

  componentDidMount() {
    this.loadActualRate()
  }

  handleAmountChange = e => {
    this.setState({
      rubAmount: e.target.value
    })
  }

  calcUSDsum = () => {
    const {rubAmount, rate} = this.state
    return (rubAmount / rate).toFixed(2)
  }
  loadActualRate = () => {
    fetch('https://neto-api.herokuapp.com/currency')
      .then(responce => responce.json())
      .then(rates => {
        const findUSD = rate => rate.code === 'USD'
        const rate = rates.find(findUSD).value.toFixed(2)
        this.setState({rate})      
      })
  }

  render() {
    const {rubAmount, rate} = this.state
    return (
      <div>
        <h3>Конвертер валют</h3>
        <button onClick={this.loadActualRate}>Обновить курс</button>
        <div>Текущий курс: {rate}</div>
        <div>
          <span>Cумма в рублях:</span>
          <input
            type='text'
            placeholder="Сумма в рублях"
            onChange={this.handleAmountChange}
            value={rubAmount}/>
        </div>
        <span> Сумма в долларах: {this.calcUSDsum()}</span>
      </div>
    )
  }
}

export default Calculator
