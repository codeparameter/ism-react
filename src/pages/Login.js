// import { useContext, useState } from "react";
import { useEffect } from "react";
import { useState } from "react";
// import { GlobalContext } from "../App";
import { useCookies } from 'react-cookie';
import { useFetchStates, fetchPost } from "../utils/useFetch";

export default function Login() {

    // const {token, setToken} = useContext(GlobalContext);

    const [, setCookie, ] = useCookies(['user_token']);

    const [userName, setUserName] = useState('');
    const [pass, setPass] = useState('');
    

    const { pnd, setPnd, res, setRes, err, setErr } = useFetchStates();

    useEffect(()=>{
      
      if(res && !err){
        // setToken(data.token);
        setCookie('user_token', res.token);
      }
    }, [res, err, pnd]);

    function submitLogin(e){
      e.preventDefault();
      
      fetchPost({setRes, setPnd, setErr, path:'auth/', body:{
        username: userName,
        password: pass
      }});
    }

    return (
      <div className="">
        Login
        { err && <div>{ err }</div> }
        { pnd && <div>Loading...</div> }

        
        <form id="login-form" onSubmit={submitLogin}>
            <input type="text" placeholder="Your Username" required
              value={userName} onChange={(e)=>setUserName(e.target.value)} />
            <input type="password" placeholder="Your Password" required
              value={pass} onChange={(e)=>setPass(e.target.value)} />
            <input type="submit" value="Login" />
        </form>
      </div>
    );
}