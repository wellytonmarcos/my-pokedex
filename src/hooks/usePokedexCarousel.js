import { useState, useCallback } from "react";
import { getPokemonImages } from "../utils/pokemonImageUtils";

export function usePokedexCarousel() {
  const [carouselIndex, setCarouselIndex] = useState(0);

  const moveCarouselLeft = useCallback((selectedPokemon) => {
    if (!selectedPokemon) return;

    const images = getPokemonImages(selectedPokemon);
    if (images.length > 1) {
      setCarouselIndex((prev) => (prev - 1 + images.length) % images.length);
    }
  }, []);

  const moveCarouselRight = useCallback((selectedPokemon) => {
    if (!selectedPokemon) return;

    const images = getPokemonImages(selectedPokemon);
    if (images.length > 1) {
      setCarouselIndex((prev) => (prev + 1) % images.length);
    }
  }, []);

  const resetCarousel = useCallback(() => {
    setCarouselIndex(0);
  }, []);

  return {
    carouselIndex,
    setCarouselIndex,
    moveCarouselLeft,
    moveCarouselRight,
    resetCarousel,
  };
}
