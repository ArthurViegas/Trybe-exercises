import { Component } from 'react';
import pokemons from '../data'
import CardPokemon from './CardPokemon';
import '../App.css';

class PokeList extends Component {
  constructor() {
    super();
    this.state = {
      typedValue: '',
    };
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(event) {
    this.setState({
      typedValue: event.target.value
    })
  }
  render() {
    return (
      <div className="div-section">
      <input className='input'
      onChange={this.handleChange}
      value={this.state.typedValue}
      type='text'
      />
      <section className="PokeSection">
        {console.log(this.state.typedValue)}
        {pokemons.filter((poke) => poke.type.includes(this.state.typedValue))
        .map((pokemon) => {
          return <CardPokemon key={pokemon.id} pokemon={pokemon}/>
        })}
      </section>
      </div>
    )
  }
}

export default PokeList
