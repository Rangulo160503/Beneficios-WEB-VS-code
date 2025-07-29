import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";
import React from "react";

const Sidebar = ({
  setMostrarModal,
  modoSeleccion,
  setModoSeleccion,
  seleccionados,
  setSeleccionados,
}) => {
  const navigate = useNavigate();

  return (
    <div className="w-[25%] h-full p-2 flex-col gap-2 text-white hidden lg:flex">
      {/* Navegación principal */}
      <div className="bg-[#121212] rounded h-[15%] flex flex-col justify-around shadow p-4">
        <div
          onClick={() => navigate("/")}
          className="flex items-center gap-3 cursor-pointer hover:text-green-400"
        >
          <img className="w-6 filter invert" src={assets.home_icon} alt="Inicio" />
          <p className="font-bold">Inicio</p>
        </div>

        <div className="flex items-center gap-3 mt-2">
          <img className="w-6 filter invert" src={assets.search_icon} alt="Buscar" />
          <input
            type="text"
            placeholder="Buscar"
            className="bg-transparent placeholder-white text-white font-bold outline-none border-none focus:outline-none focus:ring-0"
            onChange={(e) => console.log("Buscar:", e.target.value)} // reemplazar luego por setBusqueda si se usa contexto
          />
        </div>
      </div>

      {/* Crea tu catálogo */}
      <div className="bg-[#121212] rounded h-[25%] flex flex-col justify-around shadow p-4">
        <h1 className="my-5 font-bold text-2xl">Crea tu catálogo</h1>

        <div className="bg-[#121212] rounded px-4 py-4">
          <div className="p-4">
            {!modoSeleccion ? (
              <button
                onClick={() => setModoSeleccion(true)}
                className="bg-white text-black px-4 py-2 rounded w-full"
              >
                Crear nuevo catálogo
              </button>
            ) : (
              <div className="flex flex-col gap-2">
                <button
                  onClick={() => {
                    if (seleccionados.length === 0) {
                      alert("Debes seleccionar al menos un beneficio.");
                      return;
                    }
                    setMostrarModal(true);
                  }}
                  className="bg-green-600 text-white px-4 py-2 rounded w-full"
                >
                  Guardar catálogo
                </button>

                <button
                  onClick={() => {
                    setModoSeleccion(false);
                    setSeleccionados([]);
                  }}
                  className="bg-gray-500 text-white px-4 py-2 rounded w-full"
                >
                  Cancelar
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Tus catálogos */}
      <div className="bg-[#121212] rounded h-full flex flex-col justify-around shadow p-4">
        <h1 className="my-5 font-bold text-2xl">Tus catálogos</h1>
        <div>
          {/* Aquí podrías mapear catálogos guardados más adelante */}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
