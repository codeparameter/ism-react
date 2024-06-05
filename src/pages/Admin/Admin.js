import { Link, Route, Routes, Navigate, useLocation } from "react-router-dom";
// import { useCookies } from 'react-cookie';
import useLocalStorage from "../../utils/useLocalStorage";
import useFetch  from "../../utils/useFetch";
import AdminBlock from "./pages/Blocks/AdminBlock";


export default function Admin() {
  
  const prevLoc = useLocation();
  // const [cookies,] = useCookies(['user_token']);
  const [userToken,] = useLocalStorage('user_token');
  const{ pnd, res, err } = useFetch({path: 'validate-token/'});

  // if(!cookies.user_token || err){
  //   return (<Navigate to={`/login?prev=${prevLoc.pathname}`} replace={true}/>);
  // }

  if(!userToken || err){
    return (<Navigate to={`/login?prev=${prevLoc.pathname}`} replace={true}/>);
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
