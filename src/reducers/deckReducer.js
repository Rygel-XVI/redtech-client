export default function deckReducer( state={ decks:[], deck: null, cards: [null,null,null,null,null], useDeckId: -1 },action) {
  let updatedDecks

  switch(action.type) {
    case "SET_DECKS":
      return { ...state, decks: action.decks }
    case "ADD_DECK":
      return { ...state, useDeckId: action.deck.id, decks: [...state.decks, action.deck] }
    case "SET_DECK_ID":
      return {...state, useDeckId: action.deck}
    case "UPDATE_DECK":
      updatedDecks = state.decks.filter(deck => deck.id !== action.deck.id)
      updatedDecks.push(action.deck)
      return { ...state, deck: updatedDecks }
    case "DELETE_DECK":
      return {...state, decks: state.decks.filter(deck => deck.id !== action.deck.id)}
    case "DRAW_CARD":
    // find all cards currently in the deck
      let possibleCards = action.deck.cards.filter(c => c.location === "deck")
    // pick a card in the deck
      let pickedCard = possibleCards[Math.floor(Math.random()*possibleCards.length)]
    // set it's location from deck to table
      pickedCard.location = "table"
    // filter out that card from the deck
      action.deck.cards = action.deck.cards.filter(c => c.id !== pickedCard.id)
    // push the updated card onto the deck
      action.deck.cards.push(pickedCard)
    // filter out the current deck from the decks array and save in separate array
      updatedDecks = state.decks.filter(deck => deck.id !== action.deck.id)
    // push updated deck onto decks array
      updatedDecks.push(action.deck)
      state.cards[action.loc] = pickedCard
      debugger;
      return { ...state, decks: updatedDecks, cards: state.cards}
    default:
      return state
  }
}
