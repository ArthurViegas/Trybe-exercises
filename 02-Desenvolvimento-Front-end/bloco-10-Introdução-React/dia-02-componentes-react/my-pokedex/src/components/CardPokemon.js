import { Component  } from "react";
import '../App.css';
// import Teste from './Teste'

class cardPokemon extends Component {
  render () {
    const { pokemon } = this.props;
    return (
      <div className="PokeCard" onClick={() => console.log(pokemon.name)}>
        <h1>{ pokemon.name }</h1>
        <img src={ pokemon.image } alt= { pokemon.name }></img>
        <p>{ pokemon.type }</p>
        <p>{ `${pokemon.averageWeight.value} - ${pokemon.averageWeight.measurementUnit}` }</p>
      </div>
    )
  }
}

export default cardPokemon
