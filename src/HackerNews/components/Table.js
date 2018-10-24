import React, { Component } from 'react'
import Button from './Button'
import Sort from './Sort'
import {SORTS} from '../App'

import '../App/index.css'

const largeColumn = {
  width: '40%',
}
const medColumn = {
  width: '30%',
}
const smallColumn = {
  width: '10%',
}

/* Для реализации поиска на стороне клиента
  const isSearched = searchTerm => item =>
  item.title.toLowerCase().includes(searchTerm.toLowerCase())
 */

export class Table extends Component {
  state = {
    sortKey: 'NONE',
    isSortReverse: false
  }

  onSort = sortKey => {
    const isSortReverse = this.state.sortKey === sortKey && !this.state.isSortReverse
    this.setState({sortKey, isSortReverse})
   }

  render () {
    const { list, onDismiss } = this.props
    const { sortKey, isSortReverse } = this.state
    const sortedList = SORTS[sortKey](list)
    const reverseSortedList = isSortReverse
      ? sortedList.reverse()
      : sortedList
    return (
    <div className='table'>
      <div className="table-header">
        <span style={largeColumn}>
          <Sort
            sortKey={'TITLE'}
            onSort={this.onSort}
            activeSortKey={sortKey}
          >
            Title
          </Sort>
        </span>
        <span style={medColumn}>
          <Sort
            sortKey={'AUTHOR'}
            onSort={this.onSort}
            activeSortKey={sortKey}
          >
            Author
          </Sort>
        </span>
        <span style={smallColumn}>
          <Sort
            sortKey={'COMMENTS'}
            onSort={this.onSort}
            activeSortKey={sortKey}
          >
            Comment
          </Sort>
        </span>
        <span style={smallColumn}>
          <Sort
            sortKey={'POINTS'}
            onSort={this.onSort}
            activeSortKey={sortKey}
          >
            Очки
          </Sort>
        </span>
        <span style={smallColumn}>
          Архив
        </span>
    </div>
      {
        reverseSortedList.map(item => 
          <div key = {item.objectID} className='table-row'>
            <div style={largeColumn}> 
              <a href={item.url}>{item.title}</a>
            </div>
            <div style={medColumn}>{item.author}</div>
            <div style={smallColumn}>{item.num_comments}</div>
            <div style={{width: '10%'}}>{item.points}</div>
            <div>
              <Button onClick={() => onDismiss(item.objectID)} className='button-inline'>
                Отбросить
              </Button>
            </div>
            <br/>
          </div>
        )
      }
    </div>
  )}
}

export default Table