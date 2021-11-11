import React from 'react';
import './Card.css';
import PropTypes from 'prop-types';

class Card extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.props;

    return (
      <div className="card">
        <h1 data-testid="name-card">{ cardName }</h1>
        <img data-testid="image-card" src={ cardImage } alt={ cardName } />
        <p data-testid="description-card">{ cardDescription }</p>
        <h3 data-testid="attr1-card">{ cardAttr1 }</h3>
        <h3 data-testid="attr2-card">{ cardAttr2 }</h3>
        <h3 data-testid="attr3-card">{ cardAttr3 }</h3>
        <h3 data-testid="rare-card">{ cardRare }</h3>
        { cardTrunfo === true && <h3 data-testid="trunfo-card">Super Trunfo</h3> }
      </div>
    );
  }
}

Card.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

export default Card;
