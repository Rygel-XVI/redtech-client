import React, { Component } from 'react';
import { connect } from 'react-redux'
import {fetchDeck} from '../actions/decks'


import Card from '../components/Card'

class PlayContainer extends Component {
  constructor(props){
    super(props)

    this.state = {

    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {

  }

  componentDidMount() {
    this.setState({
      deck: this.props.deck,
      card1: null,
      card2: null,
      card3: null,
      card4: null,
      card5: null
    })
  }

  render() {
    return (
      <div>
      <Card handleClick={this.handleClick} card={this.state.card1}/>
      <Card handleClick={this.handleClick} card={this.state.card2}/>
      <Card handleClick={this.handleClick} card={this.state.card3}/>
      <Card handleClick={this.handleClick} card={this.state.card4}/>
      <Card handleClick={this.handleClick} card={this.state.card5}/>
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
