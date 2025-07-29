import { useEffect, useState, useContext } from "react";
import Navbar from "./Navbar";
import SongItem from "./SongItem";
import { fetchBeneficios } from "../services/beneficiosService";
import { BenefitSearchContext } from "../context/BenefitSearchContext";

const DisplayHome = () => {
  // Estados principales
  const [beneficios, setBeneficios] = useState([]);
  const [modoSeleccion, setModoSeleccion] = useState(false);
  const [seleccionados, setSeleccionados] = useState([]);
  const [mostrarModal, setMostrarModal] = useState(false);
  const [correo, setCorreo] = useState("");

  // Contexto de búsqueda
  const { terminoBusqueda } = useContext(BenefitSearchContext);

  // Cargar beneficios al montar componente
  useEffect(() => {
    const cargarBeneficios = async () => {
      const data = await fetchBeneficios();
      setBeneficios(data);
    };

    cargarBeneficios();
  }, []);

  // Filtros
  const beneficiosFiltrados = beneficios.filter((item) =>
    item.titulo.toLowerCase().includes(terminoBusqueda.toLowerCase())
  );

  const hayBusqueda = terminoBusqueda.trim() !== "";


  return (
    <>
      <Navbar />

      {!hayBusqueda && (
        <>
          <div className="mb-4">
            <h1 className="my-5 font-bold text-2xl">Beneficios destacados</h1>
            <div className="flex overflow-auto">
              {beneficios.slice(6).map((item, index) => (
                <SongItem
                  key={item.id || index}
                  name={item.titulo}
                  desc={item.descripcion}
                  image={item.imagenUrl}
                  proveedor={item.proveedor}
                  precio={item.precio}
                  categoria={item.categoria}
                  vigencia={item.vigencia}
                  moneda={item.moneda}
                  condiciones={item.condiciones}
                  qr={item.codigoQrUrl}
                  modoSeleccion={modoSeleccion}
                  seleccionados={seleccionados}
                  setSeleccionados={setSeleccionados}
                />
              ))}
            </div>
          </div>

          <div className="mb-4">
            <h1 className="my-5 font-bold text-2xl">Más utilizados este mes</h1>
            <div className="flex overflow-auto">
              {beneficios.slice(6).map((item, index) => (
                <SongItem
                  key={item.id || index}
                  name={item.titulo}
                  desc={item.descripcion}
                  image={item.imagenUrl}
                  proveedor={item.proveedor}
                  precio={item.precio}
                  categoria={item.categoria}
                  vigencia={item.vigencia}
                  moneda={item.moneda}
                  condiciones={item.condiciones}
                  qr={item.codigoQrUrl}
                  modoSeleccion={modoSeleccion}
                  seleccionados={seleccionados}
                  setSeleccionados={setSeleccionados}
                />
              ))}
            </div>
          </div>
        </>
      )}

      {hayBusqueda && (
        <div className="mt-10 border-t border-gray-700 pt-6">
          <h2 className="text-white text-2xl font-bold mb-4">Resultados de búsqueda</h2>
          <div className="flex overflow-auto">
            {beneficiosFiltrados.length > 0 ? (
              beneficiosFiltrados.map((item, index) => (
                <SongItem
                  key={item.id || index}
                  name={item.titulo}
                  desc={item.descripcion}
                  image={item.imagenUrl}
                  proveedor={item.proveedor}
                  precio={item.precio}
                  categoria={item.categoria}
                  vigencia={item.vigencia}
                  moneda={item.moneda}
                  condiciones={item.condiciones}
                  qr={item.codigoQrUrl}
                  modoSeleccion={modoSeleccion}
                  seleccionados={seleccionados}
                  setSeleccionados={setSeleccionados}
                />
              ))
            ) : (
              <p className="text-gray-400">No se encontraron resultados.</p>
            )}
          </div>
        </div>
      )}

      {seleccionados.length > 0 && (
        <div className="mt-10 bg-[#1e1e1e] p-6 rounded shadow text-white">
          <h2 className="text-xl font-bold mb-4">Beneficios seleccionados</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {seleccionados.map((b, i) => (
              <div key={i} className="bg-[#2a2a2a] p-4 rounded">
                <h3 className="font-semibold">{b.name}</h3>
                <p className="text-sm">{b.proveedor}</p>
                <p className="text-sm">
                  {b.precio} {b.moneda}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 🔜 Aquí vendrá el modal cuando mostrarModal sea true */}
      {mostrarModal && (
  <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
    <div className="bg-white rounded p-6 w-[90%] max-w-md text-black shadow-lg">
      <h2 className="text-xl font-bold mb-4">Enviar catálogo por correo</h2>

      <input
        type="email"
        placeholder="Ingrese su correo"
        value={correo}
        onChange={(e) => setCorreo(e.target.value)}
        className="w-full p-2 border rounded mb-4"
      />

      <ul className="max-h-40 overflow-y-auto text-sm mb-4 list-disc list-inside">
        {seleccionados.map((b, i) => (
          <li key={i}>{b.name}</li>
        ))}
      </ul>

      <div className="flex justify-end gap-4">
        <button
          onClick={() => setMostrarModal(false)}
          className="text-gray-500 hover:text-red-500"
        >
          Cancelar
        </button>
        <button
          onClick={() => {
            if (!correo || !correo.includes("@")) {
              alert("Correo inválido");
              return;
            }

            console.log("Enviar a:", correo, seleccionados);
            // 🔜 Aquí se conectará con el backend para enviar

            setMostrarModal(false);
            setCorreo("");
          }}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Enviar
        </button>
      </div>
    </div>
  </div>
)}

    </>
  );
};

export default DisplayHome;
