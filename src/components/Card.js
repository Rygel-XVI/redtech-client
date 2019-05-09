import React from 'react'

const Card = ({ handleClick, text, name }) => (
  <div>
    <button onClick={handleClick} name={name} >{text}</button>
  </div>
)
export default Card
