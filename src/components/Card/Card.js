import React from 'react'

import './Card.scss'

function Card(props) {
  const { card } = props
  return (
    <div className="card-item">
      {card.cover && 
        <img src={card.cover}
          className="card-cover"
          alt="ducnhatdev-alt-img"
          onMouseDown={e => e.preventDefault()}
        />
      }
      Title:{card.title}
    </div>
  )
}

export default Card