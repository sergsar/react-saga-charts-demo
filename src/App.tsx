import React from 'react';
import './App.css';
import Dashboard from './pages/Dashboard'
import {BrowserRouter, Routes, Route, Navigate, HashRouter} from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
    <HashRouter>
        <Header />
        <div className="container">
            <Routes>
                <Route path="*" element={<Navigate to="/dashboard" />} />
                <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
        </div>
    </HashRouter>
  );
}

export default App;
