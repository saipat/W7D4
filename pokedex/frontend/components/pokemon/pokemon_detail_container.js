import { connect } from 'react-redux';

import { requestSinglePokemon } from '../../actions/pokemon_actions';
import PokemonDetail from './pokemon_detail';


const mapStateToProps = (state, ownProps) => {
  return {pokemon: state.entities.pokemon[ownProps.match.params.id], 
          pokemonID: ownProps.match.params.id};
};

const mapDispatchToProps = dispatch => ({
  requestSinglePokemon: (id) => dispatch(requestSinglePokemon(id))// dispatch requestAllPokemon action.
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonDetail);