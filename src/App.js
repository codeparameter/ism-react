// import {React, useState, createContext} from "react";
import {React, useState} from "react";
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

import LinkToLogin from "./components/LinkToLogin";

import Admin from "./pages/Admin/Admin";
import BlockDetails from "./pages/blocks/BlockDetails";
import BlockList from './pages/blocks/BlockList';
import Home from './pages/Home';
import Login from './pages/Login';

// export const GlobalContext = createContext(null);

function App() {

  // const [token, setToken] = useState("");

  return (
    <div className="app">
      <header></header>
      {/* <main></main>
      <aside></aside> */}
      
      {/* <GlobalContext.Provider value={{token, setToken}} > */}
        <BrowserRouter>
          <nav>
            <Link to="/">Home</Link> <br/>
            <Link to="/blocks/">Blocks</Link><br/>
            <LinkToLogin/>
            <Link to="/admin/">admin</Link>
          </nav>
          <Routes>
            
            <Route path="/" element={<Home/>} />
            <Route path="/admin/*" element={<Admin/>} />
            <Route path="/login/" element={<Login/>} />
            <Route path="/blocks/" element={<BlockList/>} />
            <Route path="/blocks/:id/" element={<BlockDetails/>} />
          </Routes>
        </BrowserRouter>
      {/* </GlobalContext.Provider> */}

      <footer></footer>
    </div>
  );
}

export default App;
