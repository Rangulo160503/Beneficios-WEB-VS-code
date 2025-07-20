import Display from "./components/Display";
import Sidebar from "./components/Sidebar";
import BenefitDetailSidebar from "./components/BenefitDetailSidebar";
import { BenefitProvider } from "./context/BenefitContext";

const App = () => {
  return (
    <BenefitProvider>
      <div className="h-screen bg-black relative">
        <div className="h-[90%] flex">
          <Sidebar />
          <Display />
        </div>
        <BenefitDetailSidebar />
      </div>
    </BenefitProvider>
  );
};

export default App;
