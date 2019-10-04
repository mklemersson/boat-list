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
        <BoatList containerClass="boat-list col-md-8 mr-auto ml-auto" />
      </div>
    </div>
  );
}

export default App;
