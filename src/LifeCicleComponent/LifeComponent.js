import React, { Component } from 'react'

export class LifeComponent extends Component {
  constructor(props) {
    super(props)
    console.log(props)
  }

  render() {
    return (
      <div>
        {this.props.name}
      </div>
    )
  }
}

LifeComponent.defaultProps = {
  name: "Component"
}



export default LifeComponent
