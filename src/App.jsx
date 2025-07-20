import Display from "./components/Display";
import Sidebar from "./components/Sidebar";
import BenefitDetailSidebar from "./components/BenefitDetailSidebar";
import { BenefitProvider } from "./context/BenefitContext";

const LayoutWithSidebar = () => {
  

  return (
    <div className="h-screen bg-black flex overflow-hidden">
      <Sidebar />

      {/* Área central que se ajusta si hay panel de detalle */}
      <div
      >
        <Display />
      </div>

      {/* Mostrar sidebar de detalle solo si hay beneficio seleccionado */}
      <Sidebar />
    </div>
  );
};

const App = () => {
  return (
    <BenefitProvider>
      <LayoutWithSidebar />
    </BenefitProvider>
  );
};

export default App;
