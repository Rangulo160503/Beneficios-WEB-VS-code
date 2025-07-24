// src/context/BenefitSearchContext.jsx
import { createContext, useState } from 'react';

export const BenefitSearchContext = createContext();

export const BenefitSearchProvider = ({ children }) => {
  const [terminoBusqueda, setTerminoBusqueda] = useState("");

  return (
    <BenefitSearchContext.Provider value={{ terminoBusqueda, setTerminoBusqueda }}>
      {children}
    </BenefitSearchContext.Provider>
  );
};
