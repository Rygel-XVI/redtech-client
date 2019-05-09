import React, { Component } from 'react';
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';

import NewOldContainer from './containers/NewOldContainer'
import PlayContainer from './containers/PlayContainer'

import {fetchDecks, createDeck, setDeckId} from './actions/decks'


class App extends Component {

  componentDidMount() {
      this.props.fetchDecks()
  }

  render() {
    return (
      <div className="App">

        <Router>

          <React.Fragment>
          <Switch>
             <Route exact path="/" render={(props) =>  <NewOldContainer
                                                         decks={this.props.decks}
                                                         useDeckId={this.props.useDeckId}
                                                         deckChosen={this.props.deckChosen}
                                                         createDeck={this.props.createDeck}
                                                         setDeckId={this.props.setDeckId}/>
} />
             <Route path="/pick5/:useDeckId/play" render={(props) => <PlayContainer
                                                          decks={this.props.decks}
                                                          useDeckId={this.props.useDeckId}/>
                                                        } />
           </Switch>
          </React.Fragment>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    decks: state.decks,
    useDeckId: state.useDeckId || -1,
    deckChosen: state.useDeckId > -1 ? true : false
  }
}

export default connect(mapStateToProps, { fetchDecks, createDeck, setDeckId }) (App);
