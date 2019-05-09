import React from 'react'

const SaveButton = ({ saveGame, name }) => (
  <div>
    <button onClick={saveGame} name={name} >Save Game</button>
  </div>
)
export default SaveButton
