import React, { Component } from 'react';
import { connect } from 'react-redux'
import {setDeckId, updateDeck, drawCard} from '../actions/decks'

import Card from '../components/Card'

class PlayContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      card1: null,
      card2: null,
      card3: null,
      card4: null,
      card5: null,
    }

    this.handleClick = this.handleClick.bind(this)
    this.newGame = this.newGame.bind(this)
  }

  newGame(event) {
    event.preventDefault()
    this.props.setDeckId(-1)
  }

// handles clicking of cards. in the future make thinner if possible
  handleClick(event) {
    let arrayLoc = parseInt(event.target.name)
    let cards
    let chosenCard
    if (this.props.cards[arrayLoc] === null) {
      cards = this.props.deck.cards.filter(c => c.location === "deck")
      chosenCard = cards[Math.floor(Math.random()*cards.length)]
      chosenCard.location = "table"
      this.props.drawCard(chosenCard, arrayLoc)
    }
  }

  render() {
    return (
      <div className="card-container">
      <Card handleClick={this.handleClick} card={this.props.cards[0]} name="0"/>
      <br />
      <Card handleClick={this.handleClick} card={this.props.cards[1]} name="1"/>
      <br />
      <Card handleClick={this.handleClick} card={this.props.cards[2]} name="2"/>
      <br />
      <Card handleClick={this.handleClick} card={this.props.cards[3]} name="3"/>
      <br />
      <Card handleClick={this.handleClick} card={this.props.cards[4]} name="4"/>
      <br />
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    deck: state.decks.filter(deck => deck.id === state.useDeckId)[0],
    decks: state.decks,
    cards: state.cards
  }
}

export default connect(mapStateToProps, { updateDeck, setDeckId, drawCard }) (PlayContainer)
