import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  constructor() {
    super();

    this.onInputChange = this.onInputChange.bind(this);
    this.validationSaveButton = this.validationSaveButton.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
    this.delete = this.delete.bind(this);

    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: 'Normal',
      hasTrunfo: false,
      cardTrunfo: false,
      isSaveButtonDisabled: true,
      savedCards: [],

      nameFilter: '',
    };
  }

  onInputChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    }, this.validationSaveButton);
  }

  onSaveButtonClick() {
    const {
      savedCards,
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.state;

    const newCard = {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    };

    this.setState({
      savedCards: [...savedCards, newCard],
      cardName: '',
      cardDescription: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardImage: '',
      cardRare: 'Normal',
      cardTrunfo: false,
    });

    if (cardTrunfo) {
      this.setState({ hasTrunfo: true });
    }
  }

  validationSaveButton() {
    const valorMaximo = 90;
    const valorMinimo = 0;
    const somaTotal = 210;
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
    } = this.state;

    // Conversão do objeto em número demonstrado em https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Number
    const somaAtributos = Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3);
    if ((cardName.length !== 0
      && cardDescription.length !== 0
      && cardImage.length !== 0
      && cardRare.length !== 0)
      // && valorMinimo <= Number(cardAttr1) <= valorMaximo
      && Number(cardAttr1) >= valorMinimo
      && Number(cardAttr1) <= valorMaximo
      // && valorMinimo <= Number(cardAttr2) <= valorMaximo
      && Number(cardAttr2) >= valorMinimo
      && Number(cardAttr2) <= valorMaximo
      // && valorMinimo <= Number(cardAttr3) <= valorMaximo
      && Number(cardAttr3) >= valorMinimo
      && Number(cardAttr3) <= valorMaximo
      && somaAtributos <= somaTotal) {
      this.setState({
        isSaveButtonDisabled: false,
      });
    } else {
      this.setState({
        isSaveButtonDisabled: true,
      });
    }
  }

  delete(index) {
    const { savedCards } = this.state;
    // https://cursos.alura.com.br/forum/topico-remover-elemento-do-array-que-esta-no-state-64599
    savedCards.splice(index, 1);
    this.setState(() => ({
      savedCards,
    }));
    const checkTrunfo = savedCards.some((card) => card.cardTrunfo === true);
    if (checkTrunfo) {
      this.setState({
        hasTrunfo: true,
      });
    } else {
      this.setState({
        hasTrunfo: false,
      });
    }
  }

  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      hasTrunfo,
      cardTrunfo,
      isSaveButtonDisabled,
      savedCards,
      nameFilter,
    } = this.state;

    return (
      <>
        <div>
          <h1>Tryunfo</h1>
          <Form
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
            hasTrunfo={ hasTrunfo }
            isSaveButtonDisabled={ isSaveButtonDisabled }
            onInputChange={ this.onInputChange }
            onSaveButtonClick={ this.onSaveButtonClick }
          />
          <Card
            cardName={ cardName }
            cardDescription={ cardDescription }
            cardAttr1={ cardAttr1 }
            cardAttr2={ cardAttr2 }
            cardAttr3={ cardAttr3 }
            cardImage={ cardImage }
            cardRare={ cardRare }
            cardTrunfo={ cardTrunfo }
          />
        </div>
        <div>
          <h1>Seu Baralho</h1>

          {/* https://upmostly.com/tutorials/react-filter-filtering-arrays-in-react-with-examples */}
          <label htmlFor="nameFilter">
            Filtro: Nome
            {/* savedCards.filter((card) => nameFilter).map(filteredCards => "Cartas colocadas") */}
            <input
              data-testid="name-filter"
              type="text"
              name="nameFilter"
              value={ nameFilter }
              onChange={ this.onInputChange }
            />
          </label>
          {
            savedCards.map((card, index) => (
              <div key={ index }>
                <Card
                  key={ card.cardName }
                  cardName={ card.cardName }
                  cardDescription={ card.cardDescription }
                  cardAttr1={ card.cardAttr1 }
                  cardAttr2={ card.cardAttr2 }
                  cardAttr3={ card.cardAttr3 }
                  cardImage={ card.cardImage }
                  cardRare={ card.cardRare }
                  cardTrunfo={ card.cardTrunfo }
                />
                <button
                  type="button"
                  onClick={ () => this.delete(index) }
                  data-testid="delete-button"
                >
                  Excluir
                </button>
              </div>))
          }
        </div>
      </>
    );
  }
}

export default App;
