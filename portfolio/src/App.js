import React from 'react';
// import './App.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Project from './components/Project/Project';
import { GlobalStyle } from "./GlobalStyle";

function App() {
  return (
    <>
    <GlobalStyle></GlobalStyle>
      <Header />
      <Home />
      <About />
      <Project />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
