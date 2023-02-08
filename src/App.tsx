import React from 'react';
import './App.css';
import Dashboard from './pages/Dashboard'
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
        <Header />
        <div className="container">
            <Routes>
                <Route path="*" element={<Navigate to="/dashboard" />} />
                <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
        </div>
    </BrowserRouter>
  );
}

export default App;
