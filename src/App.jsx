import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header'
import Builder from './components/Builder'
import DetailedBurger from './components/DetailedBurger';
import Navigation from './components/Navigation';

function App() {

  return (
    <>
      <div className="container">
        <Routes>
          <Route path="/" element={<Header></Header>}></Route>
          <Route path="/builder" element={<Builder></Builder>}></Route>
          <Route path="/builder/:id" element={<DetailedBurger></DetailedBurger>}></Route>
        </Routes>
        <Navigation></Navigation>
      </div>
  
    </>
  )
}

export default App
