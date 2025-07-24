import { useBenefit } from "../context/BenefitContext";

const RightSidebar = () => {
  const { selectedBenefit, setSelectedBenefit } = useBenefit();

  if (!selectedBenefit) return null;

  return (
    <div className="w-[25%] h-full p-2 flex-col gap-2 text-white hidden lg:flex">
        <div
  className="bg-[#121212] rounded h-[5%] flex flex-col justify-around shadow p-4 cursor-pointer hover:bg-[#1e1e1e] transition"
  onClick={() => setSelectedBenefit(null)}
>
  Cerrar
</div>


      
<div className="bg-[#121212] rounded h-[15%] flex flex-col justify-around shadow p-4">
    {/* QR */}
      {selectedBenefit.qr && (
        <div className="mt-6">
          <img
            src={selectedBenefit.qr}
            alt="QR"
            className="w-32 h-32 object-contain"
          />
        </div>
      )} 
        </div>
      <div className="bg-[#121212] rounded h-[100%] flex flex-col justify-around shadow p-4">
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
      
      </div>

      

      

      

      
    </div>
  );
};

export default RightSidebar;
