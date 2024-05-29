import React from "react";
import { BrowserRouter, Link, Route, Routes, Navigate } from 'react-router-dom';
import BlockDetails from "./pages/blocks/BlockDetails";
import BlockList from './pages/blocks/BlockList'
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
          <Route path="/blocks/:id" element={<BlockDetails/>} />
        </Routes>
      </BrowserRouter>

      <footer></footer>
    </div>
  );
}

export default App;
