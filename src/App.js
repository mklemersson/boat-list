import React from 'react';
import Navbar from './components/Layout/NavBar';
import BoatList from './components/BoatList/BoatList';

function App() {
  return (
    <div className="body-wrapper">
      <header>
        <Navbar />
      </header>

      <div className="container">
        <BoatList />
      </div>
    </div>
  );
}

export default App;
