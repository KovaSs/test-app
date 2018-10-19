import React, { Component } from 'react'
import Search from './components/Search'
import Table from './components/Table'
import Button from './components/Button'

import "./App.css";

const DEFAULT_QUERY = 'redux'
const PATH_BASE = 'https://hn.algolia.com/api/v1'
const PATH_SEARCH = '/search'
const PARAM_SEARCH = 'query='
const PARAM_PAGE = 'page='

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      result: null,
      searchTerm: DEFAULT_QUERY,
    }
  }
    
  fetchSearchTopStories = (searchTerm, page=0) => {
    fetch(`${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${searchTerm}&${PARAM_PAGE}${page}`)
    .then(response => response.json())
    .then(result => this.setSearchTopStories(result))
    .catch(error => error);
  }
    

  onSearchSubmit = e => {
    e.preventDefault()
    const { searchTerm } = this.state;
    this.fetchSearchTopStories(searchTerm);
  }
    
  setSearchTopStories = (result) => 
    this.setState({ result })
    
  componentDidMount() {
    const { searchTerm } = this.state
    this.fetchSearchTopStories(searchTerm)
  }
  
  
  onSearchChange = (e) => 
    this.setState({ searchTerm: e.target.value })

  onDismiss = id => {
    const isNotId = item => item.objectID !== id
    const updatedHits = this.state.result.hits.filter(isNotId) 
    this.setState({
      result: { ...this.state.result, hits: updatedHits }
    })
  }

  setSearchTopStories = result => {
    const { hits, page } = result;
    const oldHits = page !== 0
      ? this.state.result.hits
      : []
    const updatedHits = [
      ...oldHits,
      ...hits
    ];
    this.setState({
      result: { hits: updatedHits, page }
    })
  }
    

  render() {
    const {searchTerm, result} = this.state
    const page = (result && result.page) || 0
    // console.log(this.state)
    return (
      <div className = 'page'>
        <div className = 'interactions'>
          <Search
            value = {searchTerm}
            onChange = {this.onSearchChange}
            onSubmit = {this.onSearchSubmit}
          > 
            Поиск
          </Search>
          {result &&
            <Table
              list = {result.hits}
              onDismiss = {this.onDismiss}
            />
          }
          <div className='interactions'>
            <Button onClick={() => this.fetchSearchTopStories(searchTerm, page + 1)}>
              Больше историй
            </Button>
          </div>
        </div>
      </div>
    )
  }
}

export default App
