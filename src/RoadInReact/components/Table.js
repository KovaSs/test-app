import React from 'react'
import Button from './Button'

import '../App.css'

const largeColumn = {
  width: '40%',
}
const midColumn = {
  width: '30%',
}
const smallColumn = {
  width: '10%',
}

const isSearched = searchTerm => item =>
  item.title.toLowerCase().includes(searchTerm.toLowerCase())


const Table = ({ list, pattern, onDismiss}) => (
  <div className='table'>
    {
      list.filter(isSearched(pattern)).map(item => 
        <div key = {item.objectID} className='table-row'>
          <div style={largeColumn}> 
            <a href={item.url}>{item.title}</a>
          </div>
          <div style={midColumn}>{item.author}</div>
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
)

export default Table
