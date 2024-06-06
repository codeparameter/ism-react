import { Outlet, NavLink } from "react-router-dom";


export default function AdminBlock() {

    return (
      <div className="">
        admin blocks... <br />

        <NavLink to="create/">
          create
        </NavLink>

        
        <Outlet/>
      </div>
    );
}
