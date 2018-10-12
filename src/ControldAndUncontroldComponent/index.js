import React, { Component } from 'react'

// реализация с помощью функуионального компонента
export const SearchForm = props => {
  let searchText;

  const heandleSubmit = e => {
    e.preventDefault()
    console.log(searchText.value)
  }

  return (
    <form onSubmit={heandleSubmit}>
      <input ref={field => searchText = field}/>
      <button type='submit'>Поиск</button>
    </form>
  )
}

// реализация с помощью умного компонента
export class SearchFormClass extends Component {
  heandleSubmit = e => {
    e.preventDefault()
    console.log(this.searchText.value)
  }
  render() {
    return (
      <form onSubmit={this.heandleSubmit}>
        <input ref={el => this.searchText = el}/>
        <button type='submit'>Поиск</button>
      </form>
    )
  }
}
