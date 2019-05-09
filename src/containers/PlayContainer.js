import React, { Component } from 'react';
import { connect } from 'react-redux'

import Card from '../components/Card'

class PlayContainer extends Component {
  constructor(props){
    super(props)
  }

  


  componentDidMount() {
    debugger;
  }

  render() {
    return (
      <div>
      PlayContainer
      </div>
    )
  }

}

export default connect() (PlayContainer);

// on mount component should fetch the deck based on the deck id passed into the params on the frontend
// should render 5 cards
