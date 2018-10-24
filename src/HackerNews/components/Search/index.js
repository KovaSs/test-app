import React, { Component } from 'react'

/* Функциональный компонент
const Search = ({ value, onChange, onSubmit, children}) => {
  // Добавление фокуса на input с помощью ref
  let input
  return (
  <form onSubmit={onSubmit}>
    <div>{children}</div>
    <input 
      type = 'text'
      value = {value}
      onChange={onChange}
      ref = { node => input = node}
    />
    <button type='submit'>
      {children}
    </button>
  </form>
)}
 */


export class Search extends Component {
  // Добавление фокуса на input с помощью ref
  componentDidMount() {
    if(this.input) {
      this.input.focus()
    }
  }

  render() {
    const { value, onChange, onSubmit, children} = this.props
    return (
      <form onSubmit={onSubmit}>
        <div>{children}</div>
        <input 
          type = 'text'
          value = {value}
          onChange={onChange}
          ref = { node => {this.input = node}}
        />
        <button type='submit'>
          {children}
        </button>
      </form>
    )
  }
}

export default Search