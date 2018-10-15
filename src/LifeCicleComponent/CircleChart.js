import React, { Component } from 'react'
import Chart from 'chart.js'

export class CircleChart extends Component {
  constructor(...props) {
    super(...props)
    this.data = {
      datasets: [{
        data: props[0].rates,
        backgroundColor: ['yellow', 'red', 'green']
      }],
      labels: ['JavaScript', 'Java', 'C#']
    };    
  }

  componentDidMount() {
    this.chart = new Chart('myChart', {
      type: 'doughnut',
      data: this.data
    })
  }

  componentWillReceiveProps(newProps) {
    this.updateChart(newProps.rates)
  }

  updateChart = rates => {
    this.chart.data.datasets[0].data = rates
    this.chart.update()
  }

  render() {
    return (
      <div>
        <canvas id='myChart' width='10' height='10'/>
      </div>
    )
  }
}

export default CircleChart
