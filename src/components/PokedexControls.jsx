import React from "react";

export default function PokedexControls({ page, totalPages, count, onPrevious, onNext, toUp, toDown, toLeft, toRight }) {
  return (
    <div className="flex justify-between flex-col items-center mt-4 px-3 flex-row">
      <div className="flex justify-center flex-col items-center">
        <div className="flex ">
          <button className="bg-sky-500 hover:bg-sky-700 text-[10px] p-2 rounded-full mr-2" onClick={onPrevious}>
            Voltar
          </button>
          <button className="bg-yellow-500 text-[10px] hover:bg-yellow-700  p-2 rounded-full" onClick={onNext}>
            Selecionar
          </button>
        </div>
        <p className="text-center text-[8px] p-2 rounded-full mr-2">
          Página: {page} de {totalPages}
        </p>
        <div className="flex justify-center items-center m-2">
          <div className="card text-[10px] bg-green-600 h-14 w-50 rounded-md flex flex-col align-center content-center p-1 shadow-md border-2 border-gray-800">
            <p className="">Base de dados:</p>
            <p> {count} Pokémons</p>
          </div>
        </div>
      </div>
      <div className="directional-control flex flex-col justify-center items-center m-4">
        <div>
          <button onClick={toUp} className="bg-gray-500  hover:bg-gray-700 text-dark h-8 w-8 flex justify-center items-center border-t-2 border-l-2 border-r-2 border-grey">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
            </svg>
          </button>
        </div>
        <div className="flex">
          <button onClick={toLeft} className="bg-gray-500  hover:bg-gray-700  text-dark h-8 w-8 flex justify-center items-center border-t-2 border-l-2 border-b-2 border-grey">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
            </svg>
          </button>
          <button className="bg-gray-500 text-dark h-8 w-8 flex justify-center items-center ">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
              <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm6-2.438c0-.724.588-1.312 1.313-1.312h4.874c.725 0 1.313.588 1.313 1.313v4.874c0 .725-.588 1.313-1.313 1.313H9.564a1.312 1.312 0 0 1-1.313-1.313V9.564Z" clipRule="evenodd" />
            </svg>
          </button>
          <button onClick={toRight} className="bg-gray-500 hover:bg-gray-700 text-dark h-8 w-8 flex justify-center items-center border-t-2 border-b-2 border-r-2 border-grey">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>
        <div>
          <button className="bg-gray-500  hover:bg-gray-700 text-dark h-8 w-8 flex justify-center items-center border-b-2 border-l-2 border-r-2 border-grey" onClick={toDown}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
