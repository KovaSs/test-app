import React, { Component } from 'react'
import axios from 'axios'
import {sortBy} from 'lodash'
import Search from '../components/Search'
import Table from '../components/Table'
import Button from '../components/Button'
import withLoading from '../HOC/withLoading'
import {
 DEFAULT_QUERY,
 DEFAULT_HPP,
 PATH_BASE,
 PATH_SEARCH,
 PARAM_SEARCH,
 PARAM_PAGE,
  PARAM_HPP
} from '../constants'

import "./index.css";

const ButtonWithLoading = withLoading(Button)

export const SORTS = {
  NONE: list => list,
  TITLE: list => sortBy(list, 'title'),
  AUTHOR: list => sortBy(list, 'author'),
  COMMENTS: list => sortBy(list, 'num_comments').reverse(),
  POINTS: list => sortBy(list, 'points').reverse(),
}



const updateSearchTopStoriesState = (hits, page) => prevState => {
  const { searchKey, results } = prevState
  const oldHits = results && results[searchKey]
    ? results[searchKey].hits
    : []
  const updatedHits = [
    ...oldHits,
    ...hits
  ]

  return {
    results: {
      ...results,
      [searchKey]: { hits: updatedHits, page }
    },
    isLoading: false
  }
}

class App extends Component {
  _isMounted = false

  constructor(props) {
    super(props)
    this.state = {
      results: null,
      searchKey: '',
      searchTerm: DEFAULT_QUERY,
      error: null,
      isLoading: false
    }
  }
  
  /* Ассинхронный запрос к API с помощью fetch
  fetchSearchTopStories = (searchTerm, page=0) => {
    fetch(`${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${searchTerm}&${PARAM_PAGE}${page}&${PARAM_HPP}${DEFAULT_HPP}`)
    .then(response => response.json())
    .then(result => this.setSearchTopStories(result))
    .catch(error => this.setState({error}))
  } */

  // Ассинхронный запрос к API с помощью axios
  fetchSearchTopStories = (searchTerm, page=0) => {
    this.setState({isLoading: true})

    axios(`${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${searchTerm}&${PARAM_PAGE}${page}&${PARAM_HPP}${DEFAULT_HPP}`)
    .then(result => this._isMounted && this.setSearchTopStories(result.data))
    .catch(error => this._isMounted && this.setState({error}))
  }

  onSearchSubmit = e => {
    e.preventDefault()
    const { searchTerm } = this.state
    this.setState({searchKey : searchTerm})
    if (this.needsToSearchTopStories(searchTerm)) {
      this.fetchSearchTopStories(searchTerm)
    }
    e.preventDefault()
  }
    
  componentDidMount() {
    this._isMounted = true
    const { searchTerm } = this.state

    this.setState({searchKey : searchTerm})
    this.fetchSearchTopStories(searchTerm)
  }

  componentWillUnmount() {
    this._isMounted = false
  }

  // Предотвращение запроса к API, если уже имеются кеш данные
  needsToSearchTopStories = searchTerm => 
    !this.state.results[searchTerm];
  
  onSearchChange = (e) => 
    this.setState({ searchTerm: e.target.value })

  onDismiss = id => {
    const {results, searchKey} = this.state
    const {hits, page} = results[searchKey]

    const isNotId = item => item.objectID !== id
    const updatedHits = hits.filter(isNotId)

    this.setState({
      results: { 
        ...results, 
       [searchKey]: { hits: updatedHits, page} }
    })
  }

  setSearchTopStories = result => {
    const { hits, page } = result
    this.setState( updateSearchTopStoriesState(hits, page))
  }

  render() {
    const {
      searchTerm,
      results, 
      searchKey, 
      error, 
      isLoading
    } = this.state
    const page = (
      results && 
      results[searchKey] && 
      results[searchKey].page
    ) || 0
    const list = (
      results && 
      results[searchKey] && 
      results[searchKey].hits
    ) || []
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
          {error ?
            <p> Что-то пошло не так</p> :
            <Table
              list = {list}
              onDismiss = {this.onDismiss}
            />
          }
          <div className='interactions'>
            {           
              <ButtonWithLoading 
                isLoading = {isLoading}
                onClick={() => this.fetchSearchTopStories(searchKey, page + 1)}
              >
                Больше историй
              </ButtonWithLoading>
            }
          </div>
        </div>
      </div>
    )
  }
}

export default App
