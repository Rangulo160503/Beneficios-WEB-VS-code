import React, { useState } from "react";
import Display from "./components/Display";
import Sidebar from "./components/Sidebar";
import RightSidebar from "./components/RightSidebar";
import BenefitDetailSidebar from "./components/BenefitDetailSidebar";
import { BenefitProvider } from "./context/BenefitContext";
import { BenefitSearchProvider } from "./context/BenefitSearchContext"; // ← contexto de búsqueda

const LayoutWithSidebar = () => {
  const [modoSeleccion, setModoSeleccion] = useState(false);
  const [seleccionados, setSeleccionados] = useState([]);
  const [mostrarModal, setMostrarModal] = useState(false); // ✅ nuevo estado para modal

  return (
    <div className="h-screen bg-black flex overflow-hidden">
      <Sidebar
        setMostrarModal={setMostrarModal}
        modoSeleccion={modoSeleccion}
        setModoSeleccion={setModoSeleccion}
        seleccionados={seleccionados}
        setSeleccionados={setSeleccionados}
      />

      <div>
        <Display
          mostrarModal={mostrarModal}
          setMostrarModal={setMostrarModal}
          modoSeleccion={modoSeleccion}
          setModoSeleccion={setModoSeleccion}
          seleccionados={seleccionados}
          setSeleccionados={setSeleccionados}
        />
      </div>

      <RightSidebar />
    </div>
  );
};

const App = () => {
  return (
    <BenefitProvider>
      <BenefitSearchProvider>
        <LayoutWithSidebar />
      </BenefitSearchProvider>
    </BenefitProvider>
  );
};

export default App;
