import React from 'react';
import Home from './components/Home/Home';
import Navbar from './components/Layout/NavBar';
import BoatList from './components/BoatList/BoatList';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="body-wrapper">
        <header>
          <Navbar />
        </header>

        <Switch>
          <div className="container pb-4">
            <Route exact path="/" component={Home} />

            <Route path="/search" component={BoatList} />
          </div>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
