import React from 'react'

function Card(props) {
  return (
    <div className='card'>
      <p className='title'>{props.title}</p>
      <p className='desc'>{props.desc}</p>
      {props.children}
    </div>
  )
}

export default Card
