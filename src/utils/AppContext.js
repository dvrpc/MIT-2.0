import React, { createContext, useRef, useState } from "react";

const AppContext = createContext();
export const AppProvider = props => {
  const info = useRef(null);
  const [isVisible, setIsVisible] = useState(true);

  return (
    <AppContext.Provider value={{ info, isVisible, setIsVisible }}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContext;
