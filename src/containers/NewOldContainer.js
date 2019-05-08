import React, { Component } from 'react';
import { connect } from 'react-redux'
import NewDeck from '../components/NewDeck'
import OldDeck from '../components/OldDeck'

class NewOldContainer extends Component {

  constructor(props) {
    super(props)

    this.state = {
      decks: []
    }

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount(){
    console.log('i mounted')
  }
  render() {
    return (
      <div>
      <NewDeck handleSubmit={this.handleSubmit} />
      <OldDeck handleSubmit={this.handleSubmit} />
      </div>
    )
  }
}

export default NewOldContainer
