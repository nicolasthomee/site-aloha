import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Inicio';
import AluguelOnibus from './pages/AluguelOnibus';
import Turismo from './pages/Turismo';
import NossaFrota from './pages/NossaFrota';
import Contato from './pages/Contato';
import Footer from './components/Footer';
import './App.css'; // Importando o CSS global do App

function App() {
    return (
        <Router>
            <Header />
            <div className="content"> {/* Wrapper para manter o conteúdo centralizado */}
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/aluguel-onibus" element={<AluguelOnibus />} />
                    <Route path="/turismo" element={<Turismo />} />
                    <Route path="/nossa-frota" element={<NossaFrota />} />
                    <Route path="/contato" element={<Contato />} />
                </Routes>
            </div>
            <Footer />
        </Router>
    );
}

export default App;