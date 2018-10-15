import React, { Component } from 'react'
import CircleChart from './CircleChart'


export class App extends Component {
  constructor(...props) {
    super(...props)
    this.state = {
      jsRate: 40,
      javaRate: 90,
      sharpRate: 30,
    }
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  
  render() {
    return (
      <div>
        <h2>Популярность языков программирования</h2>
        <div>JS:
          <input 
            type='text' 
            name='jsRate'
            value={this.state.jsRate}
            onChange={this.handleChange}
          />
        </div>
        <div>Java:
          <input 
            type='text' 
            name='javaRate'
            value={this.state.javaRate}
            onChange={this.handleChange}
          />
        </div>
        <div>C#:
          <input 
            type='text' 
            name='sharpRate'
            value={this.state.sharpRate}
            onChange={this.handleChange}
          />
        </div>
        <CircleChart rates={[
          this.state.jsRate,
          this.state.javaRate,
          this.state.sharpRate
        ]}/>
      </div>
    )
  }
}

export default App
