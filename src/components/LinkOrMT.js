import React from "react";
import { Link } from "react-router-dom";

export default function LinkOrMT({target, inner='', cls=''}) {
    return target ?
        <Link to={target} className={cls}>{inner}</Link>
        :
        <></>
        ;
};

export function Links({links, cls=''}) {
    return links.map((link, idx) => <LinkOrMT key={idx} {...link} className={cls} />);
};

export function WLinks({links, wrapper, cls=''}) {
    return links.map((link, idx) => React.cloneElement(wrapper, {key: idx, inner: <LinkOrMT {...{...link, cls}} />}));
};
