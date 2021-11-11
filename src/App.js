import React from 'react';
import Card from './components/Card';
import Form from './components/Form';

class App extends React.Component {
  constructor() {
    super();

    this.onInputChange = this.onInputChange.bind(this);

    // this.state = {
    //   cardName: '',
    //   cardDescription: '',
    //   cardAttr1: '',
    //   cardAttr2: '',
    //   cardAttr3: '',
    //   cardImage: '',
    //   cardRare: false,
    //   hasTrunfo: false,
    // };
  }

  onInputChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <div>
        <h1>Tryunfo</h1>
        <Form />
        <Card />
      </div>
    );
  }
}

export default App;
