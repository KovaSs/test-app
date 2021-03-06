import React, { Component } from 'react'
import Search from './components/Search'
import Table from './components/Table'

import "./App.css";


const list = [
  {
    title: 'React',
    url: 'https://reactjs.org/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: 'Redux',
    url: 'https://redux.js.org/',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
  }
];

class App extends Component {
    state = {
      list,
      searchTerm: ''
    }
  
  onSearchChange = (e) => 
    this.setState({ searchTerm: e.target.value })

  onDismiss = id => {
    const isNotId = item => item.objectID !== id
    const updatedList = this.state.list.filter(isNotId) 
    this.setState({list: updatedList})
  }

  render() {
    const {searchTerm, list} = this.state
    // console.log(this.state)
    return (
      <div className = 'page'>
        <div className = 'interactions'>
          <Search
            value = {searchTerm}
            onChange = {this.onSearchChange}
          > 
            Поиск
          </Search>
          <Table
            list = {list}
            pattern = {searchTerm}
            onDismiss = {this.onDismiss}
          />
        </div>
      </div>
    )
  }
}

export default App
