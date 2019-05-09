import React, { Component } from 'react';
import { connect } from 'react-redux'
import './App.css';

import NewOldContainer from './containers/NewOldContainer'
import {fetchDecks} from './actions/decks'


class App extends Component {

  componentDidMount() {
      this.props.fetchDecks()
  }

  render() {
    return (
      <div className="App">
      <NewOldContainer />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    decks: state.decks,
  }
}

export default connect(mapStateToProps, { fetchDecks }) (App);
