import React from 'react';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './Pages/Home/Home';
import Team from './Pages/Team/Team';
import Career from './Pages/Career/Career';
import Portfolio from './Pages/Portfolio/Portfolio';
import Services from './Pages/Services/Services';

const App = () => {
  return (
    <div>
      <Header />
      <main className='main'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/team' element={<Team />} />
          <Route path='/career' element={<Career />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/services' element={<Services />} />
        </Routes>
      </main>

      <Footer />

    </div>
  );
};

export default App;