import React from 'react'

const Deck = ({ chooseOldDeck, deck }) => (
  <div>
    <button onClick={chooseOldDeck} key={deck.id} name={deck.id}>Choose {deck.id}</button>
  </div>
)
export default Deck
