import React from "react";

export default function PokedexHeader({ circleColor }) {
  return (
    <div className="pokedex-main-header bg-grey">
      <div className="pokedex-header bg-red pt-4">
        <div className="rounded-full bg-white h-20 w-20 ml-3 p-2 border-2 border-grey">
          <div className="rounded-full h-full w-full pokedex-main-circle border-2 border-grey" style={{ backgroundColor: circleColor }}></div>
        </div>
        <div className="w-5 h-5 rounded-full ml-2 border-2 border-grey bg-red-500"></div>
        <div className="w-5 h-5 rounded-full ml-2 border-2 border-grey bg-yellow-500"></div>
        <div className="w-5 h-5 rounded-full ml-2 border-2 border-grey bg-green-500"></div>
      </div>
    </div>
  );
}
