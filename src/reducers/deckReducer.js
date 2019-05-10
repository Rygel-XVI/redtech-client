export default function deckReducer( state={ decks:[], deck: null, cards: [null,null,null,null,null], useDeckId: -1 },action) {
  let updatedDecks
  let deck
  let updatedCards
  let cardArray

  switch(action.type) {
    case "SET_DECKS":
      return { ...state, decks: action.decks }

    case "ADD_DECK":
      return { ...state, useDeckId: action.deck.id, decks: [...state.decks, action.deck] }

    case "SET_DECK_ID":
      return {...state, useDeckId: action.deck, cards:[null,null,null,null,null] }

    case "UPDATE_DECK":
      updatedDecks = state.decks.filter(deck => deck.id !== action.deck.id)
      updatedDecks.push(action.deck)
      return { ...state, deck: updatedDecks }

    case "DELETE_DECK":
      updatedDecks = state.decks.filter(deck => deck.id !== action.id)
      return {...state, decks: updatedDecks}

    case "UPDATE_CARD":

      // get in use deck
      deck = state.decks.filter(d => d.id === state.useDeckId)[0]

      // remove deprecated card
      updatedCards = deck.cards.filter(c => c.id !== action.card.id)

      // push updated card to new array
      updatedCards.push(action.card)

      // set the updatedCards to the updated deck
      deck.cards = updatedCards

      // remove deck from state Decks
      updatedDecks = state.decks.filter(d => d.id !== deck.id)

      // push updated deck onto array of decks
      updatedDecks.push(deck)

       // set card loci for use in component
       cardArray = [...state.cards]
       cardArray[action.loc] = action.card

      // return new object
      return { ...state, decks: updatedDecks, cards: cardArray}

    default:
      return state
  }
}
