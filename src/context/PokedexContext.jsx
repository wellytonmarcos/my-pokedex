import React from "react";
import { createContext, useState, useEffect } from "react";

const PokedexContext = createContext();

export function PokedexProvider({ children }) {
  const [page, setPage] = useState(() => Number(localStorage.getItem("pokedexPage")) || 1);
  const [viewMode, setViewMode] = useState(() => localStorage.getItem("pokedexViewMode") || "list");
  const [selectedPokemon, setSelectedPokemon] = useState(() => {
    const saved = localStorage.getItem("pokedexSelectedPokemon");
    return saved ? JSON.parse(saved) : null;
  });

  useEffect(() => {
    localStorage.setItem("pokedexViewMode", viewMode);
  }, [viewMode]);
  useEffect(() => {
    localStorage.setItem("pokedexPage", page);
    localStorage.setItem("pokedexSelectedPokemon", JSON.stringify(selectedPokemon));
  }, [page, selectedPokemon]);

  useEffect(() => {
    localStorage.setItem("pokedexSelectedPokemon", JSON.stringify(selectedPokemon));
  }, [selectedPokemon]);

  return <PokedexContext.Provider value={{ page, setPage, selectedPokemon, setSelectedPokemon, viewMode, setViewMode }}>{children}</PokedexContext.Provider>;
}

export { PokedexContext };
