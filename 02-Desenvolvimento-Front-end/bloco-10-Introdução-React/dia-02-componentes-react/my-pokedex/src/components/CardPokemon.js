import { Component  } from "react";
import '../App.css';

class cardPokemon extends Component {
  render () {
    const { pokemon } = this.props;
    return (
      <div className="PokeCard">
        <h1>{ pokemon.name }</h1>
        <img src={ pokemon.image } ></img>
        <p>{ pokemon.type }</p>
        <p>{ `${pokemon.averageWeight.value} - ${pokemon.averageWeight.measurementUnit}` }</p>
      </div>
    )
  }
}

export default cardPokemon
