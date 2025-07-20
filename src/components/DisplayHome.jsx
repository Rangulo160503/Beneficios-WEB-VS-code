import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import AlbumItem from "./AlbumItem";
import SongItem from "./SongItem";
import { fetchBeneficios } from "../services/beneficiosService";

const DisplayHome = () => {
  const [beneficios, setBeneficios] = useState([]);

  useEffect(() => {
    const cargarBeneficios = async () => {
      const data = await fetchBeneficios();
      setBeneficios(data);
    };

    cargarBeneficios();
  }, []);

  return (
    <>
      <Navbar />

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
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default DisplayHome;
