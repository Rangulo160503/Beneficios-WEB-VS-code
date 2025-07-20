import { useBenefit } from "../context/BenefitContext";

const AlbumItem = ({ image, name, desc, id }) => {
  const { setSelectedBenefit } = useBenefit();

  const handleClick = () => {
    setSelectedBenefit({ image, name, desc, id });
  };

  return (
    <div
      onClick={handleClick}
      className="min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]"
    >
      <img className="rounded" src={image} alt={`imagen de ${name}`} />
      <p className="font-bold mt-2 mb-1">{name}</p>
      <p className="text-slate-200 text-sm">{desc}</p>
    </div>
  );
};

export default AlbumItem;
