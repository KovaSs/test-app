import React from 'react'

const OfferModal = props => (
  <div>
    <div>
      <h2>{props.title}</h2>
      <a href={props.link}>Узнать подробнее</a>
    </div>
    <button>Закрыть</button>
  </div>
)

export default OfferModal