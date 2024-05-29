import React from "react";
import { BrowserRouter, Link, Route, Routes, Navigate } from 'react-router-dom';
import BlockList from './pages/BlockList'
import Home from './pages/Home'

function App() {
  return (
    <div className="app">
      <header></header>
      {/* <main></main>
      <aside></aside> */}

      <BrowserRouter>
        <nav>
          <Link to="/">Home</Link> <br/>
          <Link to="/blocks/">Blocks</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/blocks/" element={<BlockList/>} />
        </Routes>
      </BrowserRouter>

      <footer></footer>
    </div>
  );
}

export default App;
