import React from 'react';
import './styles/main.css';
import './styles/variables.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Services from './components/Services/Services';
import Doctors from './components/Doctors/Doctors';
import Testimonials from './components/Testimonials/Testimonials';
import ChaplinCorner from './components/ChaplinCorner/ChaplinCorner';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Doctors />
        <Testimonials />
        <ChaplinCorner />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;