import {createContext} from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";
import { LocList, LocDB } from "../../utils/GlobalContext/constantDBs/LocDB";
import {useLoc} from "../../utils/GlobalContext/states/useLoc";
import ScrollTop from "./components/ScrollTop";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const GlobalContext = createContext(null);

export default function RootLayout() {

  let constantDBs = {
    LocList,
    LocDB,
  };
  let states = {
    useLoc: useLoc('fa'),
  };
  
  return (
    <GlobalContext.Provider value={{constantDBs, states}}>
      
      <ScrollRestoration />
      

      <ScrollTop/>
      <Header/>
      

      <main className="fix">
        <div className="header-bg"></div>
        <Outlet />
      </main>

      <Footer/>
    </GlobalContext.Provider>
  )
}
