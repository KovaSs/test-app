import React, { Component } from 'react'

export class OrderList extends Component {
  constructor(...props) {
    super(...props)
    this.state = {
      orders: []
    }
  }

  componentDidMount() {
    fetch(`/api/orders/`)
      .then(result => result.json())
      .then(orders => this.setState({orders}))
  }

  render() {
    return (
      <OrderListView orders = {this.state.orders}/>
    )
  }
}

export default OrderList
