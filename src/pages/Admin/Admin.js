import { Link, Route, Routes, Navigate } from "react-router-dom";
import { useCookies } from 'react-cookie';
import AdminBlock from "./pages/Blocks/AdminBlock";


export default function Admin() {
  

  const [cookies,] = useCookies(['user_token']);

  if(!cookies.user_token){
    return (<Navigate to="/login/" replace={true} />);
  }

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
