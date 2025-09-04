/**
 * Extrai todas as imagens disponíveis de um Pokémon
 * @param {Object} pokemon - Objeto do Pokémon
 * @returns {string[]} Array de URLs das imagens
 */
export function getPokemonImages(pokemon) {
  if (!pokemon?.sprites) return [];

  return [pokemon.sprites.front_default, pokemon.sprites.back_default, pokemon.sprites.front_shiny, pokemon.sprites.back_shiny].filter(Boolean); // Remove imagens null/undefined
}

/**
 * Verifica se um Pokémon tem múltiplas imagens
 * @param {Object} pokemon - Objeto do Pokémon
 * @returns {boolean}
 */
export function hasMultipleImages(pokemon) {
  const images = getPokemonImages(pokemon);
  return images.length > 1;
}
