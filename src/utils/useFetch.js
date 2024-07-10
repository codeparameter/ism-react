import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {getLocalStorage} from "./useLocalStorage";

export function useFetchStates(isPnd=false){
  const [pnd, setPnd] = useState(isPnd);
  const [res, setRes] = useState(null);
  const [err, setErr] = useState(null);

  return { pnd, setPnd, res, setRes, err, setErr };
}

export function Fetch({
      setPnd, setRes, setErr,
      path, method='GET', headers={}, body=null
    }){

    
  setPnd(true);

  const userToken = getLocalStorage('user_token');

  if (userToken){
    headers = {...headers, "Authorization": `Token ${userToken}`};
  }

  let options = {
      method,
      headers: {
        "Content-Type": "application/json",
        ...headers
      },
  };

  if (body){
    options = {
      ...options,
      body: JSON.stringify(body)
    };
  }

  fetch(process.env.REACT_APP_BASE_API + path, options)
    .then(res => {
      if (!res.ok) { // err coming back from server
        console.log(res);
        setErr(res);
        throw Error();
      } 
      return res.json();
    })
    .then(res => {
      setPnd(false);
      setRes(res);
      setErr(null);
    })
    .catch(err => {
      setErr(e => e? e : {status: 'FTC'}); // error code or ftc (failed to fetch/connect)
      setPnd(false);
      setRes(null);
    });
}

export function useFetch({
      path, method='GET', headers={}, body=null
    }) {
  
  const { pnd, setPnd, res, setRes, err, setErr } = useFetchStates(true);

  useEffect(() => {
    Fetch({setPnd, setRes, setErr, path, method, headers, body});
  }, [path]);

  return { pnd, res, err };
}


function basePath(baseRoute){
  const href = window.location.href;
  let base_path = href.slice(
                          href.indexOf(
                            baseRoute
                          )
                      );
  if(new URLSearchParams(window.location.search).size == 0 &&
      base_path.slice(-1) != '/'
    ){
      base_path += '/';
  }
  return base_path;
}

export function useBaseFetcher({
      baseRoute, method='GET', headers={}, body=null
    }) {
      
  
  const [path, setPath] = useState(basePath(baseRoute));
  const location = useLocation();

  useEffect(()=>{
      setPath(basePath(baseRoute));
  }, [location, path]);
  return useFetch({path, method, headers, body});
}

export default function useFetcher({
      method='GET', headers={}, body=null
    }) {
  
  const baseRoute = useLocation().pathname.slice(1);
  return useBaseFetcher({baseRoute, method, headers, body});
}

export function fetchPost({
          setPnd, setRes, setErr,
          path, method='POST', headers={}, body=null
          }) {  
  
  Fetch({setPnd, setRes, setErr, path, method, headers, body});
}