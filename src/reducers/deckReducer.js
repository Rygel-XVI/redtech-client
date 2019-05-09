export default function deckReducer( state={ decks:[] },action) {

  switch(action.type) {
    case "SET_DECKS":
      return { ...state, decks: action.decks }
    case "ADD_DECK":
      return { ...state, useDeckId: action.deck.id, decks: [...state.decks, action.deck] }
    case "SET_DECK_ID":
      return {...state, useDeckId: action.deck}
    case "UPDATE_DECK":
      let updatedDecks = state.decks.filter(deck => deck.id !== action.deck.id)
      updatedDecks.push(action.deck)
      return { ...state, deck: updatedDecks }
    case "DELETE_DECK":
      return {...state, decks: state.decks.filter(deck => deck.id !== action.deck.id)}
    default:
      return state
  }
}
