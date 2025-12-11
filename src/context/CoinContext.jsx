import { createContext, useContext, useState, useEffect } from "react";

const CoinContext = createContext();

export function CoinProvider({ children }) {
  // Load from localStorage if exists, otherwise default to 1000.
  const [coins, setCoins] = useState(() => {
    const saved = localStorage.getItem("coins");

    return saved !== null ? Number(saved) : 1000;
  });


  // Whenever coins change, store it.
  useEffect(() => {
    localStorage.setItem("coins", coins);
  }, [coins]);

  return (
    <CoinContext.Provider value={{ coins, setCoins }}>
      {children}
    </CoinContext.Provider>
  );
}

export function useCoins() {
  return useContext(CoinContext);
}
