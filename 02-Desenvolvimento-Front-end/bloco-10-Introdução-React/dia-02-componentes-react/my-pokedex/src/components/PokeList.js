import { Component } from 'react';
import pokemons from '../data'
import CardPokemon from './CardPokemon';
import '../App.css';

class PokeList extends Component {
  render() {
    return (
      <section className="PokeSection">
        {pokemons.map((pokemon) => {
          return <CardPokemon key={pokemon.id} pokemon={pokemon}/>
        })}
      </section>
    )
  }
}

export default PokeList
