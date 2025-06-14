import { createContext, useContext, useState } from "react";

const EnquiryContext = createContext();

export function EnquiryProvider({ children }) {
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);

  return (
    <EnquiryContext.Provider
      value={{ isEnquiryModalOpen, setIsEnquiryModalOpen }}
    >
      {children}
    </EnquiryContext.Provider>
  );
}

export const useEnquiry = () => useContext(EnquiryContext);
