import React, { Component } from 'react';
import { connect } from 'react-redux'

import ChooseDeckButton from '../components/ChooseDeckButton'
import Continue from '../components/Continue'
import Deck from '../components/Deck'
import {setDeckId, deleteDeck} from '../actions/decks'


class SelectDeckContainer extends Component {

  constructor(props) {
    super(props)

    this.state = {
      showDecks: false
    }

    this.handleClick = this.handleClick.bind(this)
    this.chooseOldDeck = this.chooseOldDeck.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
  }

// handles rendering of deck list
  renderDecks() {
    if (this.state.showDecks){
      return this.props.decks.map(deck => {
        return <Deck deck={deck} key={deck.id} chooseOldDeck={this.chooseOldDeck} handleDelete={this.handleDelete}/>
      })
    }
  }

// handles button for old deck
  chooseOldDeck(event) {
    event.preventDefault()
    this.props.setDeckId(parseInt(event.target.name))
  }

// handles deletion of decks
  handleDelete(event) {
    event.preventDefault()
    console.log(event.target.name)
    this.props.deleteDeck(parseInt(event.target.name))
  }

// handles clicking on either button for selecting new or old deck
  handleClick(event){
    event.preventDefault()
    if ( event.target.name === "new" ){
      this.props.createDeck()
    } else {
      this.setState ({
        showDecks: !this.state.showDecks
      })
    }
  }

// renders "start game" when a deck is chosen
  renderContinueLink() {
    if (this.props.deckChosen === true) {
      return <Continue useDeckId={this.props.useDeckId} />
    }
  }

  componentDidMount() {
    console.log("mounted")
      this.props.setDeckId()
  }

  render() {
    return (
      <div className='select-container'>
        <h1>Welcome</h1>
        <h3>  to almost  </h3>
        <h2> Texas Hold'em </h2>
        <br />
        <h4> Would you rather play with a new deck or an old deck? </h4>
        <br />

        <div>
          {this.renderContinueLink()}
          <br />
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

// export default SelectDeckContainer

export default connect(null, { setDeckId, deleteDeck }) (SelectDeckContainer);
