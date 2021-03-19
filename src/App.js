import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import styled from 'styled-components';
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
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

            {/**Skills page */}
            <Skills />

            {/**Experience page */}
            <Experience />

            {/**Projects page */}
            <Projects />

            {/**Educations page */}
            <Education />

            {/**Contact page */}
            <Contact />

            {/**Footer */}
            <Footer />
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