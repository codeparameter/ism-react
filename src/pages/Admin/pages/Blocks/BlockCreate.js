// import { useContext } from "react";
// import { GlobalContext } from "../../../../App";
import { useCookies } from 'react-cookie';
import { redirect } from "react-router-dom";
import useFetch  from "../../../../components/useFetch";

export default function BlockCerate() {
  
  // const {token} = useContext(GlobalContext);

  const [cookies,] = useCookies(['user_token']);

  // const token = cookies.user_token;

  // if(!token){
  //   return redirect("/login/");
  // }

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

  const { pnd, res, err } = useFetch('blocks/', {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Authorization": `Token ${cookies.user_token}`,
    },
    body: JSON.stringify(block)
  }); 

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