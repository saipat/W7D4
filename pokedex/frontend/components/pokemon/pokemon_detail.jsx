import React from 'react';

class PokemonDetail extends React.Component{
    render(){
      if (!this.props.pokemon){
        return "Loading...";
      }
      return (
        <div>
          <h1>{this.props.pokemon.name}</h1>
         <img src={this.props.pokemon.image_url} alt={this.props.pokemon.name} />
         <div>
            {this.props.items.map((item) => {
              return (
                <div>
                  <h3>{item.happiness}</h3>
                  <h3>{item.name}</h3>
                  <img src={item.image_url}/>
                </div>)
            })}
         </div>
        </div>
      );
    }
    componentDidMount () {
      this.props.requestSinglePokemon(this.props.pokemonID);
    }
      
    componentDidUpdate(prevProps){
      if (prevProps.match.params.pokemonID !== this.props.match.params.pokemonID) {
        this.props.requestSinglePokemon(this.props.match.params.pokemonID);
      }
    }
}


export default PokemonDetail;