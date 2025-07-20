import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

const BenefitContext = createContext();

export const BenefitProvider = ({ children }) => {
  const [selectedBenefit, setSelectedBenefit] = useState(null);

  return (
    <BenefitContext.Provider value={{ selectedBenefit, setSelectedBenefit }}>
      {children}
    </BenefitContext.Provider>
  );
};

export const useBenefit = () => useContext(BenefitContext);

BenefitProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
