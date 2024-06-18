export function Li(props){
    let attrs = {...props};
    delete attrs.inner;
    return <li {...attrs}> {props.inner} </li>;
}