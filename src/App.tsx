import './App.css'

import React from 'react'
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom'

import Header from './components/Header'
import Dashboard from './pages/Dashboard'

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
  )
}

export default App
