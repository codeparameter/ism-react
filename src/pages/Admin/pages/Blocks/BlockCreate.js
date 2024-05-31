import { useContext } from "react";
import { GlobalContext } from "../../../../App";
import useFetch  from "../../../../components/useFetch";

export default function BlockCerate() {
  
  const {token} = useContext(GlobalContext);
  console.log(token);
  // const token = '49b87381d32efebb7876f230942e9c92a432fdb8';

  const block = {
    "city": 1,
    "material": 1,
    "schema": 1,
    "quality": 1,
    "length": 220,
    "height": 180,
    "width": 111,
    "not_available": false
};

  const { data, isPending, error } = useFetch('blocks/', {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Authorization": `Token ${token}`,
    },
    body: JSON.stringify(block)
  }); 

  return (
    <div className="">
      <h2>block create</h2>
      {token ? token : "no token"}

      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }
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