import { HashRouter, Routes, Route } from 'react-router';
import { CoinProvider } from "./context/CoinContext";
import './App.css';
import Home from './components/Home';
import Blackjack from './games/Blackjack';
import Roulette from './games/Roulette';
import Slots from './games/Slots';

function App() {
  return <CoinProvider>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blackjack" element={<Blackjack />} />
          <Route path="/roulette" element={<Roulette />} />
          <Route path="/slots" element={<Slots />} />
        </Routes>
      </HashRouter>
  </CoinProvider>
}

export default App
