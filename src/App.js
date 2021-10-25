import React from 'react';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Project from './components/Project/Project';
import Header from './components/Header/Header';
import { ThemeProvider } from './context/ThemeProvider';
import { GlobalStyle } from "./theme/GlobalStyle";
import AppLayout from './AppLayout';

function App() {
  return (
    <>
      <ThemeProvider>
        <GlobalStyle />
        <AppLayout>
          <Header />
          <Home />
          <About />
          <Project />
          <Contact />
          <Footer />
        </AppLayout>
      </ThemeProvider>
    </>
  );
}

export default App;
