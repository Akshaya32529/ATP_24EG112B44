import { createContext, useState } from "react";

export const UserContext = createContext(null);

function ContextProvider({ children }) {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(prev => prev + 1);
  };

  return (
    <UserContext.Provider value={{ count, increment }}>
      {children}
    </UserContext.Provider>
  );
}

export default ContextProvider;