import React, { Component } from 'react';
import { connect } from 'react-redux'
import {fetchDeck} from '../actions/decks'


import Card from '../components/Card'

class PlayContainer extends Component {
  constructor(props){
    super(props)
  }

  // renderFiveCards() {
  //   return this.props.map(deck => {
  //     return <Deck deck={deck} key={deck.id} chooseOldDeck={this.chooseOldDeck}/>
  //   })
  // }


  render() {
    return (
      <div>
      {!!this.props.deck ? "true" : "false"}
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    deck: state.decks.filter(deck => deck.id === state.useDeckId)[0]
  }
}

export default connect(mapStateToProps, { fetchDeck }) (PlayContainer);

// on mount component should fetch the deck based on the deck id passed into the params on the frontend
// should render 5 cards
