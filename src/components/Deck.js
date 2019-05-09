import React from 'react'

const Deck = ({ chooseOldDeck, handleDelete, deck }) => (
  <div key={deck.id}>
    <button onClick={chooseOldDeck} name={deck.id}>Choose {deck.id}</button> - <button onClick={handleDelete} name={deck.id}>Delete</button>
  </div>
)
export default Deck
