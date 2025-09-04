import React, { useRef, useImperativeHandle, forwardRef } from "react";
import { getTypeIcon } from "../helpers/pokemonTypeIcons";
import PokemonCarousel from "./PokemonCarousel";

const PokemonDetails = forwardRef(({ selectedPokemon, carouselIndex, onCarouselChange }, ref) => {
  const scrollContainerRef = useRef(null);

  useImperativeHandle(ref, () => ({
    scrollUp: () => {
      if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollBy({ top: -50, behavior: "smooth" });
      }
    },
    scrollDown: () => {
      if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollBy({ top: 50, behavior: "smooth" });
      }
    },
  }));

  const formatStatName = (statName) => {
    const statNames = {
      hp: "HP",
      attack: "Ataque",
      defense: "Defesa",
      "special-attack": "Ataque Especial",
      "special-defense": "Defesa Especial",
      speed: "Velocidade",
    };
    return statNames[statName] || statName;
  };

  return (
    <div className="h-full flex flex-col">
      <div className="flex-shrink-0 p-2">
        <h3 className="text-lg font-bold text-center capitalize">{selectedPokemon.name}</h3>
      </div>

      <div ref={scrollContainerRef} className="flex-1 overflow-y-auto p-2 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200" style={{ maxHeight: "calc(100% - 5px)" }}>
        {/* Tipos */}
        <PokemonCarousel pokemon={selectedPokemon} currentIndex={carouselIndex} onIndexChange={onCarouselChange} />
        <div className="mb-4">
          <h4 className="font-semibold mb-2 text-sm">Tipos:</h4>
          <div className="flex flex-wrap gap-1">
            {selectedPokemon.types.map((type) => (
              <span key={type.slot} className="flex items-center bg-gray-700 text-white px-2 py-1 rounded text-xs">
                <img src={getTypeIcon(type.type.name)} alt={type.type.name} className="w-4 h-4 mr-1" />
                {type.type.name}
              </span>
            ))}
          </div>
        </div>

        {/* Informações básicas */}
        <div className="mb-4">
          <h4 className="font-semibold mb-2 text-sm">Informações:</h4>
          <div className="space-y-1 text-xs">
            <div>
              <span className="font-medium">ID:</span> #{selectedPokemon.id}
            </div>
            <div>
              <span className="font-medium">Altura:</span> {selectedPokemon.height / 10} m
            </div>
            <div>
              <span className="font-medium">Peso:</span> {selectedPokemon.weight / 10} kg
            </div>
            <div>
              <span className="font-medium">Experiência Base:</span> {selectedPokemon.base_experience}
            </div>
          </div>
        </div>

        {/* Estatísticas */}
        <div className="mb-4">
          <h4 className="font-semibold mb-2 text-sm">Estatísticas:</h4>
          <div className="space-y-2">
            {selectedPokemon.stats.map((stat) => (
              <div key={stat.stat.name} className="text-xs">
                <div className="flex justify-between mb-1">
                  <span className="font-medium">{formatStatName(stat.stat.name)}</span>
                  <span>{stat.base_stat}</span>
                </div>
                <div className="w-full bg-gray-300 rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full transition-all duration-300" style={{ width: `${Math.min((stat.base_stat / 200) * 100, 100)}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Habilidades */}
        <div className="mb-4">
          <h4 className="font-semibold mb-2 text-sm">Habilidades:</h4>
          <div className="space-y-1">
            {selectedPokemon.abilities.map((ability) => (
              <div key={ability.slot} className="text-xs">
                <span className="capitalize font-medium">{ability.ability.name}</span>
                {ability.is_hidden && <span className="text-gray-500 ml-1">(Oculta)</span>}
              </div>
            ))}
          </div>
        </div>

        {/* Movimentos (primeiros 10) */}
        <div className="mb-4">
          <h4 className="font-semibold mb-2 text-sm">Movimentos:</h4>
          <div className="grid grid-cols-1 gap-1">
            {selectedPokemon.moves.slice(0, 10).map((move, index) => (
              <div key={index} className="text-xs capitalize bg-gray-100 px-2 py-1 rounded">
                {move.move.name.replace("-", " ")}
              </div>
            ))}
            {selectedPokemon.moves.length > 10 && <div className="text-xs text-gray-500 italic">E mais {selectedPokemon.moves.length - 10} movimentos...</div>}
          </div>
        </div>
      </div>
    </div>
  );
});

PokemonDetails.displayName = "PokemonDetails";

export default PokemonDetails;
