import { createContext, useState } from "react";

export const CoinContext = createContext();

export function CoinProvider({ children }) {
  const [coins, setCoins] = useState(1000); // default starting amount

  const addCoins = (amount) => setCoins(prev => prev + amount);
  const removeCoins = (amount) => setCoins(prev => Math.max(prev - amount, 0));

  return (
    <CoinContext.Provider value={{ coins, setCoins, addCoins, removeCoins }}>
      {children}
    </CoinContext.Provider>
  );
}
