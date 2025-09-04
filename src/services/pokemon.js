// src/services/pokemon.js
import { list } from "postcss";
import { createApiClient } from "./requests";

const pokeApi = createApiClient("https://pokeapi.co/api/v2");

export function fetchPokemonList(limit = 5, offset = 0) {
  return pokeApi.get(`/pokemon?limit=${limit}&offset=${offset}`);
}

export function fetchPokemonDetails(nameOrId) {
  return pokeApi.get(`/pokemon/${nameOrId}`);
}

export async function fetchPokemonListWithDetails(limit = 5, offset = 0) {
  const listResponse = await fetchPokemonList(limit, offset);
  const results = listResponse.results || [];
  const details = await Promise.all(results.map((p) => fetchPokemonDetails(p.name)));
  let newList = { ...listResponse, data: details };
  return newList;
}
