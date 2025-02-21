import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Contacts from './components/Contacts';
import Communities from './components/Communities';
import Header from './components/Header';
import Footer from './components/Footer';
import './styles.css'; // Estilos globais

const App = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about-us" element={<AboutUs />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/communities" element={<Communities />} />
            </Routes>
            <Footer />
        </Router>
    );
};

export default App;
