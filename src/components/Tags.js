import React from "react";

export default function Wrapper({wrapper, props}){
    return React.cloneElement(wrapper, {...props});
}

export function Li(props){
    let attrs = {...props};
    delete attrs.inner;
    return <li {...attrs}> {props.inner} </li>;
}