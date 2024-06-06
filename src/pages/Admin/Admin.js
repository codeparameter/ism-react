import { NavLink, Outlet, Navigate, useLocation } from "react-router-dom";
import useLocalStorage from "../../utils/useLocalStorage";
import useFetch  from "../../utils/useFetch";


export default function Admin() {
  
  const prevLoc = useLocation();
  const [userToken,] = useLocalStorage('user_token');
  const{ pnd, res, err } = useFetch({path: 'validate-token/'});

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

      <NavLink to="blocks/">
          Menu: blocks + 
      </NavLink>
      
      <Outlet />
    </div>
  )
  ;
}
