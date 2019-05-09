import React, { Component } from 'react';
import { connect } from 'react-redux'

import ChooseDeckButton from '../components/ChooseDeckButton'
import {createDeck} from '../actions/decks'

class NewOldContainer extends Component {

  constructor(props) {
    super(props)

    this.state = {
      decks: [],
      useDeckId: null,
      choiceMade: false
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event){
    event.preventDefault()
    if ( event.target.name === "new" ){
      this.props.createDeck()
    }
    this.setState ({
      choiceMade: true
    })
  }

//   this.setState({
//       ingredient: {
//         ...this.state.ingredient,
//         [event.target.name]: event.target.value
//       }
// })


// elevate this to <App />
  componentDidMount(){
    //dispatch to fetch old decks if any exist
  }

  render() {
    return (
      <div>
      <h1>Welcome</h1>
      <h3>  to almost  </h3>
      <h2> Texas Hold'em </h2>
      <br />
      <h4> Would you rather play with a new deck or an old deck? </h4>

      <div>
        <ChooseDeckButton handleClick={this.handleClick} name="new" text="Play with New Deck" />
        <ChooseDeckButton handleClick={this.handleClick} name="old" text="Play with Old Deck" />
      </div>

      </div>
    )
  }
}

export default connect(null, { createDeck }) (NewOldContainer);
