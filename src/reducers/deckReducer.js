export default function deckReducer( state={ decks:[] },action) {

  switch(action.type) {
    case "SET_DECKS":
      return { ...state, decks: action.decks }
    case "ADD_DECK":
      return { ...state, decks: [...state.decks, action.deck] }
    case "UPDATE_DECK":
      let updatedDecks = state.decks.filter(deck => deck.id !== action.deck.id)
      updatedDecks.push(action.deck)
      return { ...state, deck: updatedDecks }
    case "DELETE_DECK":
      return {...state, Decks: state.Decks.filter(deck => deck.id !== action.deck.id)}
    default:
      return state
  }
}
