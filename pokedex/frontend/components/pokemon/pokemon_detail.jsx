import React from 'react';

class PokemonDetail extends React.Component{
    render(){
      if (!this.props.pokemon){
        return "Loading...";
      }
      return (
        <div>
          <h1>{this.props.pokemon.name}</h1>
          <img src={this.props.pokemon.image_url} />
          
        </div>
      );
    }
    componentDidMount () {
      this.props.requestSinglePokemon(this.props.pokemonID);
    }
    
    
    componentDidUpdate(prevProps){
      if(prevProps === this.props){
        this.props.requestSinglePokemon(this.props.match.params.pokemonId);
      }
    }
}


export default PokemonDetail;