import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import styled from 'styled-components';
import About from "./components/About";
import './App.css';

function App() {
  return (
    //BEM
    <div className="app">
      <Router>
      <>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Header />
          
        <Switch>
          <Route path="/pabloarmandosandoval/" exact>
            {/**About page */}
            <About />
          </Route>
        </Switch>
      </>
    </Router>
      {/**"Items => snapping"*/}
      {/**"Items => snapping"*/}
      {/**"Items => snapping"*/}
      {/**"Items => snapping"*/}
    </div>
  );
}

export default App;