import React, { Component } from 'react';

class Card extends Component {

  renderCard(){

    if (this.props.card !== null) {
      let cardImage = this.props.card.image_location

      return < img src={require(`../images/JPEG/${cardImage}.jpg`)} name={this.props.name} className='card-image' />
    } else {
      return < img src={require(`../images/JPEG/blue_back.jpg`)} name={this.props.name} className='card-image' />
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
