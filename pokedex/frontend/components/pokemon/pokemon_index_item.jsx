import React from 'react';
import { Link } from 'react-router-dom';

const pokemonIndexItem = ({pokemon}) => {
  console.log(pokemon);
  return (
      <li className="lists">
      <Link to={`/pokemon/${pokemon.id}`}>
        <h3 className="names">{pokemon.name}</h3>
        <img src={pokemon.image_url} className="small"/>
      </Link>
      </li>
  )
  
};
export default pokemonIndexItem;