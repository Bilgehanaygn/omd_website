import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Manifesto from './components/Manifesto/Manifesto';
import Team from './components/Team/Team';
import GangHouse from './components/GangHouse/GangHouse';
import Staking from './components/Staking/Staking';
import Utility from './components/Utility/Utility';
import Enlightenment from './components/Enlightenment/Enlightenment';

function App() {
  useEffect(() => {
    document.title = "Degen Gang";
  })
  return (
    
    <div>
      <Header/>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/manifesto' element={<Manifesto/>} />
          <Route path='/team' element={<Team/>} />
          <Route path='/utility' element={<Utility/>} />
          <Route path='/enlightenment' element={<Enlightenment/>} />
          <Route path='/staking' element={<Staking/>} />
          <Route path='/ganghouse' element={<GangHouse/>} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
