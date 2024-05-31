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

    if(!error){
      setToken(data.token);
    }

    console.log(token);

    return (
      <div className="">
        Login

        
        <form id="login-form" method="POST">
            <input type="text" name="username" placeholder="Your Username" />
            <input type="password" name="password" placeholder="Your Password"/>
            <input type="submit" value="Login" />
        </form>
      </div>
    );
}