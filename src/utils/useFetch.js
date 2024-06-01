import { useState, useEffect } from 'react';
// import { useCookies } from 'react-cookie';
import cookie  from './cookie';

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

  // const [cookies,] = useCookies(['user_token']);
  
  const user_token = cookie('user_token');
  if (user_token){
    headers = {...headers, "Authorization": `Token ${user_token}`};
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
        throw Error('could not fetch the res for that resource');
      } 
      return res.json();
    })
    .then(res => {
      setPnd(false);
      setRes(res);
      setErr(null);
    })
    .catch(err => {
      setPnd(false);
      setErr(err);
    });
}

export default function useFetch({
      path, method='GET', headers={}, body=null
    }) {
  
  const { pnd, setPnd, res, setRes, err, setErr } = useFetchStates(true);

  useEffect(() => {
    Fetch({setPnd, setRes, setErr, path, method, headers, body});
  }, [path]);

  return { pnd, res, err };
}

export function fetchPost({
          setPnd, setRes, setErr,
          path, method='POST', headers={}, body=null
          }) {

  setPnd(true);
  
  Fetch({setPnd, setRes, setErr, path, method, headers, body});
}