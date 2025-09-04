import { useContext } from "react";
import { PokedexContext } from "./PokedexContext";

export function usePokedex() {
  return useContext(PokedexContext);
}
