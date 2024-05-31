import { useContext } from "react";
import { GlobalContext } from "../App";
import useFetch from "../components/useFetch";

export default function Login() {

    const {token, setToken} = useContext(GlobalContext);
    
    const { data, isPending, error } = useFetch('auth/', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username: 'admin',
            password: 'admin'
        })
    }); 

    console.log(data);

    return (
      <div className="">
        Login
      </div>
    );
}