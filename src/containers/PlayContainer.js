import React, { Component } from 'react';
import { connect } from 'react-redux'
import {drawCard, updateDeck} from '../actions/decks'


import Card from '../components/Card'
import SaveButton from '../components/SaveButton'

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
    this.saveGame = this.saveGame.bind(this)
  }

  saveGame(event) {
    let deck = this.props.decks.filter(d => d.id === this.props.useDeckId)[0]
    this.props.updateDeck(deck)
  }

  handleClick(event) {
    let arrayLoc = parseInt(event.target.name)
    if (this.props.cards[arrayLoc] === null) {
      this.props.drawCard(this.props.deck, arrayLoc)
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
        <div className="save">
        <SaveButton saveGame={this.saveGame}/>
        </div>
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

export default connect(mapStateToProps, { drawCard, updateDeck }) (PlayContainer)
