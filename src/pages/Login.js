import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import useLocalStorage from "../utils/useLocalStorage";
import { useFetchStates, fetchPost } from "../utils/useFetch";

export default function Login() {

    const urlParams = new URLSearchParams(window.location.search);
    const prev = urlParams.get('prev');

    const [, setUserToken] = useLocalStorage('user_token');

    const [userName, setUserName] = useState('');
    const [pass, setPass] = useState('');
    

    const { pnd, setPnd, res, setRes, err, setErr } = useFetchStates();

    useEffect(()=>{
      if(res && !err){
        setUserToken(res.token);
      }
    }, [res, err, pnd]);

    function submitLogin(e){
      e.preventDefault();
      
      fetchPost({setRes, setPnd, setErr, path:'auth/', body:{
        username: userName,
        password: pass
      }});
    }

    return res && !err?
    (<Navigate to={prev ? `${prev}` : '/'} replace={true}/>)
    :
    (
      <div className="">
        Login
        { err && <div>{ err }</div> }
        { pnd && <div>Loading...</div> }

        
        <form id="login-form" onSubmit={submitLogin}>
            <input type="text" name="username" placeholder="Your Username" required
              value={userName} onChange={(e)=>setUserName(e.target.value)} />
            <input type="password" name="password" placeholder="Your Password" required
              value={pass} onChange={(e)=>setPass(e.target.value)} />
            <input type="submit" value="Login" />
        </form>
      </div>
    );
}