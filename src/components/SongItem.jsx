import { useBenefit } from "../context/BenefitContext";

const SongItem = (props) => {
  const {
    name,
    desc,
    image,
    proveedor,
    precio,
    moneda,
    condiciones,
    vigencia,
    categoria,
    qr,
    modoSeleccion,
    seleccionados,
    setSeleccionados,
  } = props;

  const { setSelectedBenefit } = useBenefit();

  // Saber si este beneficio ya está seleccionado
  const estaSeleccionado = seleccionados.some((item) => item.name === name);

  // Manejar clic según modo
  const handleClick = () => {
    if (modoSeleccion) {
      if (estaSeleccionado) {
        setSeleccionados(seleccionados.filter((item) => item.name !== name));
      } else {
        setSeleccionados([
          ...seleccionados,
          { name, desc, image, proveedor, precio, moneda, condiciones, vigencia, categoria, qr },
        ]);
      }
    } else {
      setSelectedBenefit({
        name,
        desc,
        image,
        proveedor,
        precio,
        moneda,
        condiciones,
        vigencia,
        categoria,
        qr,
      });
    }
  };

  return (
    <div
      onClick={handleClick}
      className={`relative min-w-[180px] p-2 px-3 rounded cursor-pointer transition
        ${estaSeleccionado ? "bg-green-800 bg-opacity-20" : "hover:bg-[#ffffff26]"}`}
    >
      {/* Check flotante cuando está en modo selección */}
      {modoSeleccion && (
        <div
          className={`absolute top-2 right-2 px-2 py-1 text-xs rounded-full font-bold 
          ${estaSeleccionado ? "bg-green-400 text-black" : "bg-white text-black opacity-60"}`}
        >
          {estaSeleccionado ? "✓" : "+"}
        </div>
      )}

      <img className="rounded" src={image} alt="benefit cover" />
      <p className="font-bold mt-2 mb-1">{name}</p>
      <p className="text-slate-200 text-sm">{desc}</p>
    </div>
  );
};

export default SongItem;
