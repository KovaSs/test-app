import React from 'react'

export const todos = ['Написать книгу', 'Написать отчет', 'Купить молоко', 'Забрать машину']

export const List = props => (
  <ul>
    {props.children(props.items)}
    <li><b>Всего: {props.items.length}</b></li>
  </ul>
)

