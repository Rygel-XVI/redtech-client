import React, { Component } from 'react';
import { NavLink, Route, Router } from 'react-router-dom';

class Continue extends Component {

  componentDidMount(){
    debugger;
  }

  render() {

    return (
      <div>
        <NavLink className='navlink' to={{ pathname: "/pick5/" + this.props.useDeckId + "/play", state: this.props.useDeckId }}>Start Game</NavLink>
      </div>
    )
  }

}

export default Continue
