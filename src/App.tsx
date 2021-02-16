import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Component/Header';
import Services from './Component/Services';
import Portfolio from './Component/Portfolio';
import About from './Component/About';
import Team from './Component/Team';
import Clients from './Component/Clients';
import Contacts from './Component/Contacts';
import Footer from './Component/Footer';

function App() {
  return (
    <div className="App">
        <Header/>
        <Services/>
        <Portfolio/>
        <About/>
        <Team/>
        <Clients/>
        <Contacts/>
        <Footer/>
    </div>
  );
}

export default App;
