import { Outlet, NavLink, ScrollRestoration } from "react-router-dom";
import LoginNavLink from "../components/LoginNavLink";

export default function RootLayout() {
  return (
    <div className="root-layout">
      {/* <ScrollRestoration /> */}
      <header style={{position: 'fixed', top: '0', width: '100%', 'z-index': '999999', background: 'white'}}>
        <nav>
          <h1>ism router</h1>
          <NavLink to="/">Home</NavLink>
          {/* <NavLink to="about">About</NavLink>
          <NavLink to="help">Help</NavLink> */}
          <NavLink to="admin">admin</NavLink>
          <LoginNavLink />
          <NavLink to="blocks">blocks</NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  )
}
