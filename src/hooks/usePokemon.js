import { useState, useEffect } from "react";
import { fetchPokemonListWithDetails, fetchPokemonDetails } from "../services/pokemon.js";

export default function usePokemon(limit = 5, offset = 0) {
  const [pokemonList, setPokemonList] = useState({ data: [], count: 0 });
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchPokemonListWithDetails(limit, offset)
      .then((data) => setPokemonList(data))
      .finally(() => setLoading(false));
  }, [limit, offset]);

  async function selectPokemon(pokemon) {
    setSelectedPokemon(pokemon);
  }

  return { pokemonList, selectedPokemon, selectPokemon, loading, fetchPokemonListWithDetails };
}
