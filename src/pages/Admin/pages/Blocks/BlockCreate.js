import { useState, useEffect } from "react";
import {fetchPost, useFetchStates}  from "../../../../utils/useFetch";

export default function BlockCerate() {

  const [material, setMaterial] = useState('');
  const [city, setCity] = useState('');
  const [schema, setSchema] = useState('');
  const [quality, setQuality] = useState('');
  const [length, setLength] = useState('');
  const [height, setHeight] = useState('');
  const [width, setWidth] = useState('');
  const [notAvailable, setNotAvailable] = useState(false);

  const { pnd, setPnd, res, setRes, err, setErr } = useFetchStates();

  // fetchPost({setPnd, setRes, setErr, path: 'blocks/', body: block}); 

  return (
    <div className="">
      <h2>block create</h2>

      { err && <div>{ err }</div> }
      { pnd && <div>Loading...</div> }
      {/* { block && (
          <>
          <h2>{ block.material_name }</h2>
          <p> { block.city_name }</p>
          <p> { block.length }</p>
          </>
      )} */}

    </div>
  );
}