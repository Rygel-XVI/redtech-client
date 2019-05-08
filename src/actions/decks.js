const baseUrl = 'http://localhost:3000/api/deck'

export const fetchDecks = () => {
  return dispatch => {
    fetch(baseUrl)
    .then((resp) => {
      console.log("here");
      resp.json()
    })
    .then(decks => dispatch({ type: 'SET_DECKS', decks }))
  }
}

// export const createRecipe = (recipe) => {
//   let data = {
//     method: 'POST',
//     headers: {
//       'Accept': 'application/json',
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({ recipe })
//   }
//
//   return dispatch => {
//     fetch(baseUrl, data)
//     .then(resp => resp.json())
//     .then(recipe => dispatch({ type: 'ADD_RECIPE', recipe }))
//     .catch(err => console.log(err))
//   }
// }
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
