import { useBenefit } from "../context/BenefitContext";

const RightSidebar = () => {
  const { selectedBenefit, setSelectedBenefit } = useBenefit();

  if (!selectedBenefit) return null;

  return (
    <div className="fixed top-0 right-0 w-[350px] h-full bg-[#121212] text-white px-6 pt-4 pb-6 rounded-l-lg overflow-auto z-50 border-l border-gray-700 shadow-2xl">
      {/* Botón Cerrar */}
      <div className="text-right mb-4">
        <button
          className="text-sm text-gray-400 hover:text-red-400 transition"
          onClick={() => setSelectedBenefit(null)}
        >
          ✖ Cerrar
        </button>
      </div>

      {/* Imagen */}
      {selectedBenefit.image && (
        <img
          src={selectedBenefit.image}
          className="w-full h-40 object-cover rounded mb-4"
          alt="benefit"
        />
      )}

      {/* Título */}
      <h2 className="text-xl font-bold mb-2">{selectedBenefit.name}</h2>

      {/* Descripción */}
      <p className="text-sm text-gray-300 mb-4">{selectedBenefit.desc}</p>

      {/* Detalles */}
      <ul className="text-sm space-y-1 text-gray-400">
        {selectedBenefit.proveedor && (
          <li>
            <span className="font-semibold text-white">Proveedor:</span> {selectedBenefit.proveedor}
          </li>
        )}
        {selectedBenefit.precio && (
          <li>
            <span className="font-semibold text-white">Precio:</span> ₡{selectedBenefit.precio}
          </li>
        )}
        {selectedBenefit.categoria && (
          <li>
            <span className="font-semibold text-white">Categoría:</span> {selectedBenefit.categoria}
          </li>
        )}
        {selectedBenefit.vigencia && (
          <li>
            <span className="font-semibold text-white">Vigencia:</span> {selectedBenefit.vigencia}
          </li>
        )}
        {selectedBenefit.moneda && (
          <li>
            <span className="font-semibold text-white">Moneda:</span> {selectedBenefit.moneda}
          </li>
        )}
        {selectedBenefit.condiciones && (
          <li>
            <span className="font-semibold text-white">Condiciones:</span> {selectedBenefit.condiciones}
          </li>
        )}
      </ul>

      {/* QR */}
      {selectedBenefit.qr && (
        <div className="mt-6">
          <p className="font-semibold text-white mb-2">Código QR:</p>
          <img
            src={selectedBenefit.qr}
            alt="QR"
            className="w-32 h-32 object-contain"
          />
        </div>
      )}
    </div>
  );
};

export default RightSidebar;
