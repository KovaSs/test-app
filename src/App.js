import React from 'react';

const EmailTable = props => {
  console.log('---',props)
  let tableItems = props.emails.map( item => (
    <tr key = {item.id}>
      <td>{item.name}</td>
      <td>{item.email}</td>
    </tr>
  ))

  return (
    <table>{tableItems}</table>
  )
}


export default EmailTable;
