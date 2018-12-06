import { requestAllPokemon } from '../../actions/pokemon_actions';
import PokemonIndexItem from './pokemon_index_item';
import React from 'react';

class PokemonIndex extends React.Component{
  render () {
    return (
      <ul>
        {this.props.pokemon.map( poke => <PokemonIndexItem pokemon = poke/>)}
      </ul>
    )
  }
  componentDidMount () {
    this.props.requestAllPokemon();
  }
}

export default PokemonIndex;