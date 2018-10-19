import React from 'react'


const Search = ({ value, onChange, children}) => (
  <form>
    <div>{children}</div>
    <input 
      type = 'text'
      value = {value}
      onChange={onChange}
    />
  </form>
)

export default Search