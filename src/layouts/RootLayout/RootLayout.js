import { Outlet, ScrollRestoration } from "react-router-dom";
import ScrollTop from "./components/ScrollTop";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function RootLayout() {
  return (
    <div className="root-layout">
      
      <ScrollRestoration />
      

      <ScrollTop/>
      <Header/>
      

      <main className="fix">
        <Outlet />
      </main>

      <Footer/>
    </div>
  )
}
