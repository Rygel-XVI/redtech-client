import React from 'react'

const ChooseDeckButton = ({ handleClick, text, name }) => (
  <div>
    <button onClick={handleClick} name={name} >{text}</button>
  </div>
)
export default ChooseDeckButton
