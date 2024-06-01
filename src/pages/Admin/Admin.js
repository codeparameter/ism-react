import { Link, Route, Routes, Navigate } from "react-router-dom";
import { useCookies } from 'react-cookie';
import useFetch  from "../../utils/useFetch";
import AdminBlock from "./pages/Blocks/AdminBlock";


export default function Admin() {
  
  const [cookies,] = useCookies(['user_token']);
  const{ pnd, res, err } = useFetch({path: 'validate-token/'});

  if(!cookies.user_token || err){
    return (<Navigate to="/login/" replace={true} />);
  }

  return pnd?
  (
    <div>loading...</div>
  )
  :
  (
    <div className="">
      admin <br />

      <Link to="blocks/">
          Menu: blocks + 
      </Link>
      
      <Routes>
          <Route path="blocks/*" element={<AdminBlock/>} />
      </Routes>
    </div>
  )
  ;
}
