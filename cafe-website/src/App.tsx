import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Concept from './components/Concept';
import Menu from './components/Menu';
import News from './components/News';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <Concept />
        <Menu />
        <News />
      </main>
      <Footer />
    </div>
  );
}

export default App;
