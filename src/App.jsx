import { HashRouter, Routes, Route } from 'react-router';
import './App.css';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Blackjack from './games/Blackjack';
import Poker from './games/Poker';
import Roulette from './games/Roulette';
import Slots from './games/Slots';

function App() {
  return <HashRouter>
    <Routes>
      <Route path = "/" element = {<Home/>}></Route>
      <Route path = "/about" element = {<AboutMe/>}></Route>
      <Route path = "/blackjack" element = {<Blackjack/>}></Route>
      <Route path = "/poker" element = {<Poker/>}></Route>
      <Route path = "/roulette" element = {<Roulette/>}></Route>
      <Route path = "/slots" element = {<Slots/>}></Route>
    </Routes>
  </HashRouter>
}

export default App
