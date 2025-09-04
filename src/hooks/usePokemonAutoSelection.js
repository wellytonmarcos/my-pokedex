import { useEffect } from "react";

export function usePokemonAutoSelection(pokemonList, selectedPokemon, setSelectedPokemon, selectLast, setSelectLast) {
  useEffect(() => {
    if (pokemonList?.data && pokemonList.data.length > 0 && (!selectedPokemon || !pokemonList.data.some((p) => p.id === selectedPokemon.id))) {
      if (selectLast) {
        setSelectedPokemon(pokemonList.data[pokemonList.data.length - 1]);
        setSelectLast(false);
      } else {
        setSelectedPokemon(pokemonList.data[0]);
      }
    }
  }, [pokemonList, setSelectedPokemon, selectedPokemon, selectLast, setSelectLast]);
}
