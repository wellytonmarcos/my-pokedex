import React, { useEffect, useRef } from "react";
import { usePokedex } from "../context/usePokedex";
import usePokemon from "../hooks/usePokemon";

// Custom hooks
import { usePokedexNavigation } from "../hooks/usePokedexNavigation";
import { usePokedexCarousel } from "../hooks/usePokedexCarousel";
import { useLoadingAnimation } from "../hooks/useLoadingAnimation";
import { usePokedexControls } from "../hooks/usePokedexControls";
import { usePokemonAutoSelection } from "../hooks/usePokemonAutoSelection";

// Utils
import { calculatePagination, calculateOffset } from "../utils/paginationUtils";

// Components
import PokedexHeader from "./PokedexHeader";
import PokemonList from "./PokemonList";
import PokemonDetails from "./PokemonDetails";
import PokedexControls from "./PokedexControls";

export default function Pokedex() {
  const { page, setPage, selectedPokemon, setSelectedPokemon, viewMode, setViewMode } = usePokedex();
  const pokemonDetailsRef = useRef(null);

  // Configurações
  const limit = 5;
  const offset = calculateOffset(page, limit);

  // Hooks de dados
  const { pokemonList, loading, fetchPokemonListWithDetails } = usePokemon(limit, offset);

  // Hooks customizados
  const { totalPages, count } = calculatePagination(pokemonList, limit);

  const navigationHooks = usePokedexNavigation(pokemonList, page, setPage, selectedPokemon, setSelectedPokemon, totalPages);

  const carouselHooks = usePokedexCarousel();
  const { carouselIndex, setCarouselIndex } = carouselHooks;

  const controls = usePokedexControls(viewMode, setViewMode, pokemonDetailsRef, navigationHooks, carouselHooks, selectedPokemon);

  const { handlePrevious, handleNext, moveUp, moveDown, moveLeft, moveRight } = controls;

  const circleColor = useLoadingAnimation(loading);

  // Auto-seleção de Pokémon
  usePokemonAutoSelection(pokemonList, selectedPokemon, setSelectedPokemon, navigationHooks.selectLast, navigationHooks.setSelectLast);

  // Fetch de dados
  useEffect(() => {
    fetchPokemonListWithDetails(limit, (page - 1) * limit);
  }, [page, fetchPokemonListWithDetails]);

  return (
    <div className="p-4 min-h-screen bg-gray-100 font-pokedex">
      <h1>Olá, Pokedex!</h1>
      <h3 className="text-xl font-bold mb-2 text-sky-500">Selecione um Pokemon:</h3>
      <div className="pokedex-container bg-red-900 rounded-3xl border-8 border-grey mx-auto pl-3 pb-2">
        <div className="mb-4 text-center bg-red-700 h-full rounded-3xl -mt-3 -mr-3 pokedex-body border-5 border-grey">
          <PokedexHeader circleColor={circleColor} />
          <div>
            <div className="pokedex-screen-format bg-black rounded-xl p-1 h-133 mx-5">
              <div className="pokedex-screen-format bg-slate-400 rounded-xl pl-2 pb-2 h-full ">
                <div className="pokedex-screen-format bg-black rounded-xl p-1 h-full ">
                  <div className="pokedex-screen-format bg-slate-200 rounded-xl px-4 h-full ">
                    <div className="flex items-center content-center justify-center p-2">
                      <div className="dot bg-orange-500 size-2 rounded-full mx-2"></div>
                      <div className="dot bg-orange-500 size-2 rounded-full mx-2"></div>
                    </div>
                    <div className="pokedex-main-screen bg-neutral-500 h-105 border-neutral-400 border-4">
                      {loading && <p className="text-center mt-10">Carregando...</p>}
                      {!loading && pokemonList.data && pokemonList.data.length > 0 && viewMode === "list" && <PokemonList pokemons={pokemonList.data} selectedPokemon={selectedPokemon} onSelect={setSelectedPokemon} />}
                      {!loading && pokemonList.data && pokemonList.data.length > 0 && viewMode === "details" && <PokemonDetails ref={pokemonDetailsRef} selectedPokemon={selectedPokemon} carouselIndex={carouselIndex} onCarouselChange={setCarouselIndex} />}
                    </div>
                    <div className="pokedex-buttons mt-2 flex justify-between pl-10">
                      <button className="bg-red-500 h-10 w-10 border-2 border-grey rounded-full shadow-md "></button>
                      <div className="flex flex-col mt-2">
                        <div className="w-20 h-1 bg-gray-800 rounded-md mb-1"></div>
                        <div className="w-20 h-1 bg-gray-800 rounded-md mb-1"></div>
                        <div className="w-20 h-1 bg-gray-800 rounded-md mb-1"></div>
                        <div className="w-20 h-1 bg-gray-800 rounded-md mb-1"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <PokedexControls page={page} totalPages={totalPages} count={count} onPrevious={handlePrevious} onNext={handleNext} toUp={moveUp} toDown={moveDown} toLeft={moveLeft} toRight={moveRight} />
          </div>
        </div>
      </div>
    </div>
  );
}
