import React, { useState, useEffect } from "react";

export default function PokemonCarousel({ pokemon, currentIndex = 0, onIndexChange }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(currentIndex);

  // Sincroniza com o índice externo
  useEffect(() => {
    setCurrentImageIndex(currentIndex);
  }, [currentIndex]);

  if (!pokemon || !pokemon.sprites) return null;

  // Extrair todas as imagens disponíveis do pokemon
  const images = [pokemon.sprites.front_default, pokemon.sprites.back_default, pokemon.sprites.front_shiny, pokemon.sprites.back_shiny].filter(Boolean); // Remove imagens null/undefined

  const nextImage = () => {
    const newIndex = (currentImageIndex + 1) % images.length;
    setCurrentImageIndex(newIndex);
    onIndexChange?.(newIndex);
  };

  const prevImage = () => {
    const newIndex = (currentImageIndex - 1 + images.length) % images.length;
    setCurrentImageIndex(newIndex);
    onIndexChange?.(newIndex);
  };

  const goToImage = (index) => {
    setCurrentImageIndex(index);
    onIndexChange?.(index);
  };

  if (images.length === 0) return <div>Nenhuma imagem disponível</div>;

  return (
    <div className="relative w-full max-w-md mx-auto">
      {/* Imagem principal */}
      <div className="relative bg-gray-100 rounded-lg overflow-hidden aspect-square">
        <img src={images[currentImageIndex]} alt={`${pokemon.name} - ${currentImageIndex + 1}`} className="w-full h-full object-contain" />

        {/* Botões de navegação */}
        {images.length > 1 && (
          <>
            <button onClick={prevImage} className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-opacity-75">
              ‹
            </button>
            <button onClick={nextImage} className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-opacity-75">
              ›
            </button>
          </>
        )}

        {/* Indicador de posição */}
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2">
          <div className="flex space-x-1">
            {images.map((_, index) => (
              <button key={index} onClick={() => goToImage(index)} className={`w-2 h-2 rounded-full ${index === currentImageIndex ? "bg-white" : "bg-white bg-opacity-50"}`} />
            ))}
          </div>
        </div>
      </div>

      {/* Thumbnails (opcional) */}
      {images.length > 1 && (
        <div className="flex justify-center mt-2 space-x-2">
          {images.map((image, index) => (
            <button key={index} onClick={() => goToImage(index)} className={`w-12 h-12 rounded border-2 ${index === currentImageIndex ? "border-blue-500" : "border-gray-300"}`}>
              <img src={image} alt={`${pokemon.name} thumbnail ${index + 1}`} className="w-full h-full object-contain" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
