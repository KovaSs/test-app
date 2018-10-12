import React from 'react'

const FormField = props => (
  <div>
    <label>
      {props.label}
      <input
        type = {props.type || 'text'}
        name = {props.name}
        value = {props.value}
        onChange = {props.onChange}
      />
    </label>
  </div>
)

export default FormField