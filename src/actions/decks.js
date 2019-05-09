const baseUrl = 'http://localhost:3000/api/deck'

export const fetchDecks = () => {
  return dispatch => {
    fetch(baseUrl)
    .then(resp => resp.json())
    .then(decks => dispatch({ type: 'SET_DECKS', decks }))
  }
}

export const createDeck = () => {
  let data = {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  }

  return dispatch => {
    fetch(baseUrl, data)
    .then(resp => resp.json())
    .then(deck => dispatch({ type: 'ADD_DECK', deck }))
    .catch(err => console.log(err))
  }
}

export const setDeckId = (deck) => {
  return {type: "SET_DECK_ID", deck }
}

export const drawCard = (deck, loc) =>{
  console.log("action")
  return {type: "DRAW_CARD", deck, loc}
}


export const updateDeck = (deck) => {
  debugger;
  let data = {
    method: 'PATCH',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ deck })
  }

  return dispatch => {
    fetch(baseUrl + "/" + deck, data)
    .then(resp => resp.json())
    .then((recipe) => dispatch({ type: 'UPDATE_DECK', deck }))
    .catch(err => console.log(err))
  }
}

export const deleteDeck = (deck) => {
  let data = {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    }
  }

  return dispatch => {
    fetch(baseUrl + "/" + deck.id, data)
    .then(resp => resp.json())
    .then((deck) => dispatch({ type: 'DELETE_DECK', deck }))
    .catch(err => console.log(err))
  }
}
