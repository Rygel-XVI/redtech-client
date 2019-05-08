import React, { Component } from 'react';
import { connect } from 'react-redux'
import NewDeck from '../components/NewDeck'
import OldDeck from '../components/OldDeck'
import {fetchDecks} from '../actions/decks'

class NewOldContainer extends Component {

  constructor(props) {
    super(props)

    this.state = {
      decks: []
    }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event){
    event.preventDefault()
     // this.props.fetchDecks()
  }

  componentDidMount(){
    //dispatch to fetch old decks if any exist
    this.props.fetchDecks()
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
        <NewDeck handleClick={this.handleClick} />
        <OldDeck handleClick={this.handleClick} />
      </div>

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    decks: state.decks
  }
}

export default connect(mapStateToProps, { fetchDecks }) (NewOldContainer);
