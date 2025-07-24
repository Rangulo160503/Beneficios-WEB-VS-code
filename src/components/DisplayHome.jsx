import { useEffect, useState, useContext } from "react";
import Navbar from "./Navbar";
import AlbumItem from "./AlbumItem";
import SongItem from "./SongItem";
import { fetchBeneficios } from "../services/beneficiosService";
import { BenefitSearchContext } from "../context/BenefitSearchContext";

const DisplayHome = () => {
  const [beneficios, setBeneficios] = useState([]);
  const [modoSeleccion, setModoSeleccion] = useState(false);
  const [seleccionados, setSeleccionados] = useState([]);

  const { terminoBusqueda } = useContext(BenefitSearchContext);

  useEffect(() => {
    const cargarBeneficios = async () => {
      const data = await fetchBeneficios();
      setBeneficios(data);
    };

    cargarBeneficios();
  }, []);

  const beneficiosFiltrados = beneficios.filter((item) =>
    item.titulo.toLowerCase().includes(terminoBusqueda.toLowerCase())
  );

  // 🔍 Depuración
  console.log("terminoBusqueda:", `"${terminoBusqueda}"`);
  console.log("beneficiosFiltrados:", beneficiosFiltrados.length);

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

      {/* Resultados de búsqueda */}
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
    </>
  );
};

export default DisplayHome;
