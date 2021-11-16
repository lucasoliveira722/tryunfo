// import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import Card from './Card';

// export default class SavedCards extends Component {
//   constructor() {
//     super();

//     this.handleInputChange = this.handleInputChange.bind(this);

//     this.state = {
//       nameFilter: '',
//       rarityFilter: '',
//       trunfoFilter: false,
//     };
//   }

//   render() {
//     const { cards, handleDeleteButtonClick } = this.props;
//     const { nameFilter, rarityFilter, trunfoFilter } = this.state;

//     return (
//       <div>
//         <input
//           type="text"
//           name="nameFilter"
//           value={ nameFilter }
//           disabled={ trunfoFilter }
//           onChange={ this.handleInputChange }
//           data-testid="name-filter"
//         />
//         <select
//           name="rarityFilter"
//           value={ rarityFilter }
//           disabled={ trunfoFilter }
//           onChange={ this.handleInputChange }
//           data-testid="rare-filter"
//         >
//           <option value="">todas</option>
//           <option value="normal">normal</option>
//           <option value="raro">raro</option>
//           <option value="muito raro">muito raro</option>
//         </select>
//         <label htmlFor="trunfoFilter">
//           <input
//             type="checkbox"
//             name="trunfoFilter"
//             id="trunfoFilter"
//             checked={ trunfoFilter }
//             onChange={ this.handleInputChange }
//             data-testid="trunfo-filter"
//           />
//           Super Trunfo
//         </label>
//         {
//           (trunfoFilter
//             ? cards.filter(({ cardTrunfo }) => cardTrunfo === true)
//             : cards
//               .filter(({ cardName }) => cardName.includes(nameFilter))
//               .filter(({ cardRare }) => {
//                 if (rarityFilter) {
//                   return cardRare === rarityFilter;
//                 }
//                 return true;
//               })
//           ).map((card) => (
//             <div key={ card.cardName }>
//               <Card
//                 cardName={ card.cardName }
//                 cardDescription={ card.cardDescription }
//                 cardAttr1={ card.cardAttr1 }
//                 cardAttr2={ card.cardAttr2 }
//                 cardAttr3={ card.cardAttr3 }
//                 cardImage={ card.cardImage }
//                 cardRare={ card.cardRare }
//                 cardTrunfo={ card.cardTrunfo }
//               />
//               <button
//                 type="button"
//                 onClick={ () => handleDeleteButtonClick(card) }
//                 data-testid="delete-button"
//               >
//                 Excluir
//               </button>
//             </div>
//           ))
//         }
//       </div>
//     );
//   }
// }

// SavedCards.propTypes = {
//   cards: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
//   handleDeleteButtonClick: PropTypes.func.isRequired,
// };
