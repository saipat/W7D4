import React from 'react';

const pokemonIndexItem = (pokemon) => {
  <li>
    <h3>{pokemon.name}</h3>
    <img src={pokemon.image_url}>
  </li>
};