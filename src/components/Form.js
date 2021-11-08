import React from 'react';
import './Form.css';

class Form extends React.Component {
  render() {
    return (
      <div id="form">
        <label htmlFor="cardName">
          Nome da carta
          <input
            data-testid="name-input"
            type="text"
            name="cardName"
          />
        </label>
        <label htmlFor="cardDescription">
          Descrição
          <input
            data-testid="description-input"
            type="textarea"
            name="cardDescription"
          />
        </label>
        <label htmlFor="cardAttribute1">
          Atributo 1:
          <input
            data-testid="attr1-input"
            type="number"
            name="cardAttribute1"
          />
        </label>
        <label htmlFor="cardAttribute2">
          Atributo 2:
          <input
            data-testid="attr2-input"
            type="number"
            name="cardAttribute2"
          />
        </label>
        <label htmlFor="cardAttribute3">
          Atributo 3:
          <input
            data-testid="attr3-input"
            type="number"
            name="cardAttribute3"
          />
        </label>
        <label htmlFor="cardImage">
          Imagem
          <input
            data-testid="image-input"
            type="text"
            name="cardImage"
          />
        </label>
        <select data-testid="rare-input">
          <option selected value="normal">Normal</option>
          <option value="raro">Raro</option>
          <option value="muito-raro">Muito Raro</option>
        </select>
        <label htmlFor="superTrunfo">
          É Super Trunfo?
          <input
            data-testid="trunfo-input"
            type="checkbox"
            name="superTrunfo"
          />
        </label>
        <button data-testid="save-button" type="submit"> Salvar </button>
      </div>
    );
  }
}

export default Form;
