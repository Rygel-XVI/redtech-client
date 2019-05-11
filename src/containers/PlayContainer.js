import React, { Component } from 'react';
import { connect } from 'react-redux'
import {setDeckId, updateDeck, drawCard} from '../actions/decks'

import Card from '../components/Card'
import Card2 from '../components/Card2'

// due to issues with loading dynamic images I added old code for Card2 to allow you to see how the cards are drawn properly
// Card component can be used to see my code for implementing the images.
class PlayContainer extends Component {
  constructor(props){
    super(props)


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

  renderCards() {
    let index = -1
    return this.props.cards.map (card => {
      index++
      return <Card card={card} handleClick={this.handleClick} name={index} />
    })
  }

  render() {
    return (
      <div className="card-container">
        {this.renderCards()}
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
