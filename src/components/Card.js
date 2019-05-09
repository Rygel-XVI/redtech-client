import React, { Component } from 'react';

class Card extends Component {

  renderCard(){
    if (this.props.card !== null) {
      let cardString = this.props.card.suit + this.props.card.number
      return cardString
    } else {
      return "I'm a null card!"
    }
  }

  render() {
    return (
      <div>
        <button onClick={this.props.handleClick} name={this.props.name}>
          {this.renderCard()}
         </button>
         <br />
      </div>
    )
  }

}
export default Card
