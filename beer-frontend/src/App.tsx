import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Home, Payment } from 'pages';
import * as Header from 'containers/Header';

import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Header.connected />
        <Route path="/" exact component={Home} />
        <Route path="/payment" component={Payment} />
      </div>
    </Router>
  );
}

export default App;
