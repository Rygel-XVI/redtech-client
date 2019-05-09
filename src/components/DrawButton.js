import React from 'react'

const ChooseDeckButton = ({ handleClick, text, name }) => (
  <div>
    <button onClick={handleClick} name={name} >Draw another card</button>
  </div>
)
export default ChooseDeckButton
