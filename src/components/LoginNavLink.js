import { NavLink, useLocation } from "react-router-dom";

export default function LoginNavLink() {
    return <NavLink to={`/login?prev=${useLocation().pathname}`}>login</NavLink>
};