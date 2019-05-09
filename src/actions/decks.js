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
  return {type: "DRAW_CARD", deck, loc}
}

//
// export const updateRecipe = (recipe) => {
//   let data = {
//     method: 'PATCH',
//     headers: {
//       'Accept': 'application/json',
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({ recipe })
//   }
//
//   return dispatch => {
//     fetch(baseUrl + "/" + recipe.id, data)
//     .then(resp => resp.json())
//     .then((recipe) => dispatch({ type: 'UPDATE_RECIPE', recipe }))
//     .catch(err => console.log(err))
//   }
// }
//
// export const deleteRecipe = (id) => {
//   let data = {
//     method: 'DELETE',
//     headers: {
//       'Accept': 'application/json',
//       'Content-Type': 'application/json',
//     }
//   }
//
//   return dispatch => {
//     fetch(baseUrl + "/" + id, data)
//     .then(resp => resp.json())
//     .then((recipe) => dispatch({ type: 'DELETE_RECIPE', recipe }))
//     .catch(err => console.log(err))
//   }
// }
