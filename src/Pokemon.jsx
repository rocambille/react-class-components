import React, { useEffect, useState } from 'react';

function Pokemon({pokemonUrl}) {
  const [pokemonData, setPokemonData] = useState();

  useEffect(() => {
    if (pokemonUrl) {
      fetch(pokemonUrl)
        .then((response) => response.json())
        .then((data) => setPokemonData(data));
    }
  }, [pokemonUrl]);

  return pokemonData ? (
    <article style={{flex: '1'}}>
      <h1>{pokemonData.name}</h1>
      <p>height: {pokemonData.height}</p>
      <p>weight: {pokemonData.weight}</p>
    </article>
  ) : null;
}

export default Pokemon;
