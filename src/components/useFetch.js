import { useState, useEffect } from 'react';

export function useFetchStates(isPnd=false){
  const [pnd, setPnd] = useState(isPnd);
  const [res, setRes] = useState(null);
  const [err, setErr] = useState(null);

  return { pnd, setPnd, res, setRes, err, setErr };
}

export function Fetch({setPnd, setRes, setErr, path, options={}}){

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

export default function useFetch(path, options={}) {
  
  const { pnd, setPnd, res, setRes, err, setErr } = useFetchStates(true);

  useEffect(() => {
    Fetch({setPnd, setRes, setErr, path, options});
  }, []);

  return { pnd, res, err };
}

export function fetchPost({
          setPnd, setRes, setErr,
          path, method='POST', headers={}, body={}
          }) {

  setPnd(true);
  
  const options = {
      method,
      headers: {
        "Content-Type": "application/json",
        ...headers
      },
      body: JSON.stringify(body)
  };
  
  Fetch({setPnd, setRes, setErr, path, options});
}