import React from "react";

export function WrapByTag({ wrapper, component}){
    const Wrapper = wrapper.tag;
    console.log(wrapper.props);
    console.log(wrapper.tag);
    return (
      <Wrapper {...wrapper.props}>
        {component}
      </Wrapper>
    );
}
  
// Usage
// <WrapByTag wrapper={{tag: 'li', props: {className: "page-item"}}} 
// component={MyComponent} />
  
export function WrapByComponent({wrapper, props}){
    return React.cloneElement(wrapper, {...props});
}

// Usage
// <Wrapper key={idx} 
//     wrapper={<Li className="myLi"/>} 
//     props={{inner: <LinkOrMT {...{...link, cls}} />}} 
// /> 

export function Li(props){
    let attrs = {...props};
    delete attrs.inner;
    return <li {...attrs}> {props.inner} </li>;
}