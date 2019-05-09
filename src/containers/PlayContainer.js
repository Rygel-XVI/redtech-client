import React, { Component } from 'react';
import { connect } from 'react-redux'
import {fetchDeck} from '../actions/decks'


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

  handleClick() {

  }

  render() {
    return (
      <div>
      <Card handleClick={this.handleClick} card={this.state.card1}/>
      <br />
      <Card handleClick={this.handleClick} card={this.state.card2}/>
      <br />
      <Card handleClick={this.handleClick} card={this.state.card3}/>
      <br />
      <Card handleClick={this.handleClick} card={this.state.card4}/>
      <br />
      <Card handleClick={this.handleClick} card={this.state.card5}/>
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    deck: state.decks.filter(deck => deck.id === state.useDeckId)[0],
    decks: state.decks
  }
}

export default connect(mapStateToProps, { fetchDeck }) (PlayContainer);

// on mount component should fetch the deck based on the deck id passed into the params on the frontend
// should render 5 cards
