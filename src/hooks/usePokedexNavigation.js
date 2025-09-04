import { useState, useCallback } from "react";

export function usePokedexNavigation(pokemonList, page, setPage, selectedPokemon, setSelectedPokemon, totalPages) {
  const [selectLast, setSelectLast] = useState(false);

  const moveDown = useCallback(() => {
    if (!pokemonList?.data) return;

    const currentIndex = pokemonList.data.findIndex((p) => p.id === selectedPokemon.id);

    if (currentIndex === pokemonList.data.length - 1) {
      // Se está no último da lista, vai para próxima página
      if (page < totalPages) {
        setPage(page + 1);
        // O primeiro da próxima página será selecionado automaticamente pelo useEffect
      }
    } else {
      // Seleciona o próximo da lista atual
      setSelectedPokemon(pokemonList.data[currentIndex + 1]);
    }
  }, [pokemonList, selectedPokemon, page, totalPages, setPage, setSelectedPokemon]);

  const moveUp = useCallback(() => {
    if (!pokemonList?.data) return;

    const currentIndex = pokemonList.data.findIndex((p) => p.id === selectedPokemon.id);

    if (currentIndex === 0) {
      // Se está no primeiro da lista, vai para página anterior
      if (page > 1) {
        setSelectLast(true);
        setPage(page - 1);
        // O último da página anterior será selecionado pelo useEffect
      }
    } else {
      // Seleciona o anterior da lista atual
      setSelectedPokemon(pokemonList.data[currentIndex - 1]);
    }
  }, [pokemonList, selectedPokemon, page, setPage, setSelectedPokemon]);

  return {
    moveUp,
    moveDown,
    selectLast,
    setSelectLast,
  };
}
