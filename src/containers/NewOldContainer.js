import React, { Component } from 'react';
import { connect } from 'react-redux'

import ChooseDeckButton from '../components/ChooseDeckButton'
import Continue from '../components/Continue'
import Deck from '../components/Deck'


class NewOldContainer extends Component {

  constructor(props) {
    super(props)

    this.state = {
      decks: [],
      useDeckId: null,
      choiceMade: false
    }

    this.handleClick = this.handleClick.bind(this)
    this.chooseOldDeck = this.chooseOldDeck.bind(this)
  }

  renderDecks() {
    return this.state.decks.map(deck => {
      return <Deck deck={deck} key={deck.id} chooseOldDeck={this.chooseOldDeck}/>
    })
  }

  chooseOldDeck(event) {
    event.preventDefault()
    this.props.setDeckId(parseInt(event.target.name))
  }

  handleClick(event){
    event.preventDefault()
    if ( event.target.name === "new" ){
      this.props.createDeck()
    } else {
      this.setState ({
        decks: this.props.decks
      })
    }
  }

  renderContinueLink() {
    if (this.props.deckChosen === true) {
      return <Continue useDeckId={this.props.useDeckId} />
    }
  }

  render() {
    return (
      <div>
        <h1>Welcome</h1>
        <h3>  to almost  </h3>
        <h2> Texas Hold'em </h2>
        <br />
        <h4> Would you rather play with a new deck or an old deck? </h4>
        <br />

        <div>
          {this.renderContinueLink()}
        </div>

        <div>
          <ChooseDeckButton handleClick={this.handleClick} name="new" text="Play with New Deck" />
          <br />
          <ChooseDeckButton handleClick={this.handleClick} name="old" text="Play with Old Deck" />
          <br />
          {this.renderDecks()}
        </div>

      </div>
    )
  }
}

export default NewOldContainer

// export default connect(mapStateToProps, { createDeck }) (NewOldContainer);
