import { Link, Route, Routes } from "react-router-dom";
import AdminBlock from "./pages/Blocks/AdminBlock";


export default function Admin() {

    return (
      <div className="">
        admin <br />

        <Link to="blocks/">
            Menu: blocks + 
        </Link>
        
        <Routes>
            <Route path="blocks/*" element={<AdminBlock/>} />
        </Routes>
      </div>
    );
}
