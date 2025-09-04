import React from "react";
import { getTypeIcon } from "../helpers/pokemonTypeIcons";

export default function PokemonList({ pokemons, selectedPokemon, onSelect }) {
  function handleTypes(types) {
    return types.map((type) => (
      <span key={type.slot} className={`type ${type.type.name} mr-2`}>
        <img src={getTypeIcon(type.type.name)} alt={type.type.name} className="w-5 h-5" />
      </span>
    ));
  }

  return (
    <div>
      {pokemons.map((pokemon) => (
        <div key={pokemon.id} className={`mx-auto flex max-w-sm items-center gap-x-4 rounded-xl ${selectedPokemon?.id === pokemon.id ? "outline" : ""}`} onClick={() => onSelect(pokemon)}>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} className="w-20" />
          <div>
            <div className="text-md font-medium text-bold">{pokemon.name}</div>
            <div className="text-md font-medium text-black dark:text-white flex">{handleTypes(pokemon.types)}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

// Usage example (this line is not part of the component file, just an illustration of the suggested change):
// <PokemonList pokemons={pokemonList.data} selectedPokemon={selectedPokemon} onSelect={setSelectedPokemon} />
