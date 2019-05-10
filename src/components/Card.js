import React, { Component } from 'react';
// import logo from '../images/JPEG/2H.jpg'

class Card extends Component {

  renderCard(){
    if (this.props.card !== null) {
      let cardString = this.props.card.suit + this.props.card.number
      return cardString
    } else {
      return "I'm a null card!"
    }
    // if (this.props.card !== null) {
    //   return < img src={require(`${this.props.card.image_location}`)} name={this.props.name} />
    // } else {
    //   return  <button onClick={this.props.handleClick} name={this.props.name}>Pick a Card</button>
    // }
  }

  render() {
    return (
      <div className='card'>
      <button onClick={this.props.handleClick} name={this.props.name}>
        {this.renderCard()}
      </button>
         <br />
      </div>
    )
  }

}
export default Card

//   <<<<<< possible environment issue? >>>>>>>>
// had trouble loading local file as card image reverted to displaying the card code
// add small components to position in the card component one for the top right and bottom left for suit and the other is alternative method but clunky
