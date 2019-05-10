import React, { Component } from 'react';
// import logo from '../images/JPEG/2H.jpg'

class Card extends Component {

  renderCard(){
    // if (this.props.card !== null) {
    //   let cardString = this.props.card.suit + this.props.card.number
    //   return cardString
    // } else {
    //   return "I'm a null card!"
    // }
    if (this.props.card !== null) {
      // debugger;
      let cardImage = this.props.card.image_location
      return < img src={require(`${cardImage}`)} name={this.props.name} className='card-image' />
    } else {
      return < img src={require(`../images/JPEG/blue_back.jpg`)} name={this.props.name} className='card-image' />
      // return  <button onClick={this.props.handleClick} name={this.props.name}>Pick a Card</button>
    }
  }

  render() {
    return (
      <div className='card'>
      {this.renderCard()}
      <br />
      <button onClick={this.props.handleClick} name={this.props.name}> Draw Card </button>
         <br />
      </div>
    )
  }

}
export default Card


// this works standalone but still working on dynamically rendering it successfully
// < img src={require(`../images/JPEG/2C.jpg`)} name={this.props.name} />

// other options include requiring them all separately in an array and trying that
