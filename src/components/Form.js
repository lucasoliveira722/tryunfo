import React from 'react';
// import { formatters } from 'stylelint';
import './Form.css';

class Form extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: false,
      hasTrunfo: false,
    };
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  render() {
    const { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      hasTrunfo,
    } = this.state;

    return (
      <form className="form">
        <label htmlFor="cardName">
          Nome da carta
          <input
            data-testid="name-input"
            type="text"
            name="cardName"
            value={ cardName }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="cardDescription">
          Descrição
          <input
            data-testid="description-input"
            type="textarea"
            name="cardDescription"
            value={ cardDescription }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="cardAttr1">
          Atributo 1:
          <input
            data-testid="attr1-input"
            type="number"
            name="cardAttr1"
            value={ cardAttr1 }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="cardAttr2">
          Atributo 2:
          <input
            data-testid="attr2-input"
            type="number"
            name="cardAttr2"
            value={ cardAttr2 }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="cardAttr3">
          Atributo 3:
          <input
            data-testid="attr3-input"
            type="number"
            name="cardAttr3"
            value={ cardAttr3 }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="cardImage">
          Imagem
          <input
            data-testid="image-input"
            type="text"
            name="cardImage"
            value={ cardImage }
            onChange={ this.handleChange }
          />
        </label>
        <select
          data-testid="rare-input"
          name="cardRare"
          value={ cardRare }
          onChange={ this.handleChange }
        >
          <option selected value="normal">Normal</option>
          <option value="raro">Raro</option>
          <option value="muito raro">Muito Raro</option>
        </select>
        <label htmlFor="hasTrunfo">
          É Super Trunfo?
          <input
            data-testid="trunfo-input"
            type="checkbox"
            name="hasTrunfo"
            value={ hasTrunfo }
            onChange={ this.handleChange }
          />
        </label>
        <button data-testid="save-button" type="submit"> Salvar </button>
      </form>
    );
  }
}

// Form.propTypes = {
//   cardName: PropTypes.string.isRequired,
//   cardDescription: PropTypes.string.isRequired,
//   cardAttr1: PropTypes.string.isRequired,
//   cardAttr2: PropTypes.string.isRequired,
//   cardAttr3: PropTypes.string.isRequired,
//   cardImage: PropTypes.string.isRequired,
//   cardRare: PropTypes.string.isRequired,
//   cardTrunfo: PropTypes.boolean.isRequired,
//   hasTrunfo: PropTypes.boolean.isRequired,
//   isSaveButtonDisabled: PropTypes.boolean.isRequired,
//   onInputChange: PropTypes.callback.isRequired,
//   onSaveButtonClick: PropTypes.callback.isRequired,
// };

export default Form;
