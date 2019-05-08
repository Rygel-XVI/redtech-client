import React, { Component } from 'react';
import { connect } from 'react-redux'
import logo from './logo.svg';
import './App.css';

import NewOldContainer from './containers/NewOldContainer'

class App extends Component {

  componentDidMount() {
    // fetches all old decks
  }

  render() {
    return (
      <div className="App">
      <NewOldContainer />
      </div>
    );
  }
}
export default App;
