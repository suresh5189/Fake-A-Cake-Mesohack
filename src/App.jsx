import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Header from './components/Header';
import Home from './components/Home';
import Detail from './components/Details';
import './App.css';

function App() {
    return (
        <div className="App">
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<Login />} />
                </Routes>
                <Routes>
                    <Route path="/home" element={<Home />} />
                </Routes>
                <Routes>
                    <Route path="/details/:id" element={<Detail />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;


