import { useCallback } from "react";

export function usePokedexControls(viewMode, setViewMode, pokemonDetailsRef, navigationHooks, carouselHooks, selectedPokemon) {
  const { moveUp: navMoveUp, moveDown: navMoveDown } = navigationHooks;

  const { moveCarouselLeft, moveCarouselRight, resetCarousel } = carouselHooks;

  const handlePrevious = useCallback(() => {
    if (viewMode === "list") {
      navMoveUp();
    } else {
      setViewMode("list");
    }
  }, [viewMode, navMoveUp, setViewMode]);

  const handleNext = useCallback(() => {
    if (viewMode === "list") {
      setViewMode("details");
      resetCarousel();
    } else {
      navMoveDown();
    }
  }, [viewMode, navMoveDown, setViewMode, resetCarousel]);

  const moveDown = useCallback(() => {
    if (viewMode === "details") {
      // No modo details, faz scroll para baixo
      if (pokemonDetailsRef.current) {
        pokemonDetailsRef.current.scrollDown();
      }
      return;
    }

    // No modo list, navega pelos pokémons
    navMoveDown();
  }, [viewMode, pokemonDetailsRef, navMoveDown]);

  const moveUp = useCallback(() => {
    if (viewMode === "details") {
      // No modo details, faz scroll para cima
      if (pokemonDetailsRef.current) {
        pokemonDetailsRef.current.scrollUp();
      }
      return;
    }

    // No modo list, navega pelos pokémons
    navMoveUp();
  }, [viewMode, pokemonDetailsRef, navMoveUp]);

  const moveLeft = useCallback(() => {
    if (viewMode === "details" && selectedPokemon) {
      moveCarouselLeft(selectedPokemon);
    }
  }, [viewMode, selectedPokemon, moveCarouselLeft]);

  const moveRight = useCallback(() => {
    if (viewMode === "list") {
      setViewMode("details");
      resetCarousel(); // Reset carrossel ao entrar em details
    } else if (viewMode === "details" && selectedPokemon) {
      moveCarouselRight(selectedPokemon);
    }
  }, [viewMode, selectedPokemon, setViewMode, resetCarousel, moveCarouselRight]);

  return {
    handlePrevious,
    handleNext,
    moveUp,
    moveDown,
    moveLeft,
    moveRight,
  };
}
