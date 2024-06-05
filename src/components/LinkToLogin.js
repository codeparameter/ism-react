import { Link, useLocation } from "react-router-dom";

export default function LinkToLogin(){
    return <Link to={`/login?prev=${useLocation().pathname}`}>login</Link>
}