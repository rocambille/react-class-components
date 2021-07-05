import { useEffect, useState } from 'react';
import './App.css';

import Pokemon from './Pokemon';

function App() {
  const [pokemonList, setPokemonList] = useState([]);
  const [pokemonUrl, setPokemonUrl] = useState();

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/')
      .then((response) => response.json())
      .then((data) => setPokemonList(data.results));
  }, []);

  return (
    <div style={{display: 'flex'}}>
      <ul className="App">
        {pokemonList.map((pokemon) => <li key={pokemon.name} onClick={() => {
          setPokemonUrl(pokemon.url);
      }}>{pokemon.name}</li>)}
      </ul>
      <Pokemon pokemonUrl={pokemonUrl} />
    </div>
  );
}

export default App;
