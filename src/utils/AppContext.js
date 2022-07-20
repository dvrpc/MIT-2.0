import React, { createContext, useRef, useState } from "react";

const AppContext = createContext();
export const AppProvider = props => {
  const info = useRef(null);
  const [isVisible, setIsVisible] = useState(true);
  const [tools, setTools] = useState([]);
  const [nameFilter, setNameFilter] = useState("");
  const [focusFilter, setFocusFilter] = useState([]);
  const [principleFilter, setPrincipleFilter] = useState([]);

  return (
    <AppContext.Provider
      value={{
        info,
        isVisible,
        setIsVisible,
        tools,
        setTools,
        focusFilter,
        setFocusFilter,
        principleFilter,
        setPrincipleFilter,
        nameFilter,
        setNameFilter,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContext;
