import Display from "./components/Display";
import Sidebar from "./components/Sidebar";
import RightSidebar from "./components/RightSidebar";
import BenefitDetailSidebar from "./components/BenefitDetailSidebar";
import { BenefitProvider } from "./context/BenefitContext";
import { BenefitSearchProvider } from "./context/BenefitSearchContext"; // ← nuevo
import React, { useState } from 'react';

const LayoutWithSidebar = () => {
  const [modoSeleccion, setModoSeleccion] = useState(false);
  const [seleccionados, setSeleccionados] = useState([]);

  return (
    <div className="h-screen bg-black flex overflow-hidden">
      <Sidebar
        modoSeleccion={modoSeleccion}
        setModoSeleccion={setModoSeleccion}
        seleccionados={seleccionados}
        setSeleccionados={setSeleccionados}
      />

      <div>
        <Display />
      </div>

      <RightSidebar />
    </div>
  );
};

const App = () => {
  return (
    <BenefitProvider>
      <BenefitSearchProvider> {/* Agregado */}
        <LayoutWithSidebar />
      </BenefitSearchProvider>
    </BenefitProvider>
  );
};

export default App;
