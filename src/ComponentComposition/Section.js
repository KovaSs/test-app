import React, { Component } from 'react'

export class Section extends Component {
  state = {
    hidden: true
  }
  toggleSelection = () => {
    this.setState({
      hidden: !this.state.hidden
    })
  }
  render() {
    return (
      <section>
        <h2>{this.props.title}</h2>
        <div>
          {this.props.children(this.state.hidden)}
        </div>
        <button onClick={this.toggleSelection}>Переключить</button>
      </section>
    )
  }
}

export default Section
