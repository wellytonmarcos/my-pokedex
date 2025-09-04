/**
 * Calcula informações de paginação
 * @param {Object} pokemonList - Lista de Pokémons com count
 * @param {number} limit - Limite por página
 * @returns {Object} Informações de paginação
 */
export function calculatePagination(pokemonList, limit) {
  const count = pokemonList?.count || 0;
  const totalPages = Math.ceil(count / limit);

  return {
    totalPages,
    count,
  };
}

/**
 * Calcula o offset baseado na página e limite
 * @param {number} page - Página atual
 * @param {number} limit - Limite por página
 * @returns {number} Offset calculado
 */
export function calculateOffset(page, limit) {
  return (page - 1) * limit;
}
