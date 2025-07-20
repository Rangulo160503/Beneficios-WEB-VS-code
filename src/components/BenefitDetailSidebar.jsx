import { useBenefit } from "../context/BenefitContext";

const BenefitDetailSidebar = () => {
  const { selectedBenefit, setSelectedBenefit } = useBenefit();

  if (!selectedBenefit) return null;

  return (
    <div className="fixed top-0 right-0 w-[400px] h-full bg-white dark:bg-gray-900 shadow-xl p-6 z-50 overflow-y-auto border-l border-gray-300">
      <button
        className="text-sm text-red-500 mb-4"
        onClick={() => setSelectedBenefit(null)}
      >
        ✖ Cerrar
      </button>

      {selectedBenefit.image && (
        <img
          src={selectedBenefit.image}
          className="w-full h-48 object-cover rounded mb-4"
          alt="benefit"
        />
      )}

      <h2 className="text-2xl font-bold mb-2">{selectedBenefit.name}</h2>

      <p className="text-gray-700 dark:text-gray-300 mb-4">
        {selectedBenefit.desc}
      </p>

      <ul className="text-sm space-y-2">
        {selectedBenefit.proveedor && (
          <li>
            <strong>Proveedor:</strong> {selectedBenefit.proveedor}
          </li>
        )}
        {selectedBenefit.precio && (
          <li>
            <strong>Precio:</strong> ₡{selectedBenefit.precio}
          </li>
        )}
        {selectedBenefit.categoria && (
          <li>
            <strong>Categoría:</strong> {selectedBenefit.categoria}
          </li>
        )}
        {selectedBenefit.vigencia && (
          <li>
            <strong>Vigencia:</strong> {selectedBenefit.vigencia}
          </li>
        )}
        {selectedBenefit.moneda && (
          <li>
            <strong>Moneda:</strong> {selectedBenefit.moneda}
          </li>
        )}
        {selectedBenefit.condiciones && (
          <li>
            <strong>Condiciones:</strong> {selectedBenefit.condiciones}
          </li>
        )}
      </ul>

      {selectedBenefit.qr && (
        <div className="mt-6">
          <h3 className="font-semibold mb-2">Código QR:</h3>
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

export default BenefitDetailSidebar;
