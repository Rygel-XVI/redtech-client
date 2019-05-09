import React, { Component } from 'react';
import { connect } from 'react-redux'
import {drawCard} from '../actions/decks'


import Card from '../components/Card'

class PlayContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      card1: null,
      card2: null,
      card3: null,
      card4: null,
      card5: null
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event) {
    let arrayLoc = parseInt(event.target.name)
    this.props.drawCard(this.props.deck, arrayLoc)
  }

  render() {
    return (
      <div>
      <Card handleClick={this.handleClick} card={this.props.cards[0]} name="0"/>
      <br />
      <Card handleClick={this.handleClick} card={this.props.cards[1]} name="1"/>
      <br />
      <Card handleClick={this.handleClick} card={this.props.cards[2]} name="2"/>
      <br />
      <Card handleClick={this.handleClick} card={this.props.cards[3]} name="3"/>
      <br />
      <Card handleClick={this.handleClick} card={this.props.cards[4]} name="4"/>
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

export default connect(mapStateToProps, { drawCard }) (PlayContainer);

// on mount component should fetch the deck based on the deck id passed into the params on the frontend
// should render 5 cards
