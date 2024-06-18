import { Link } from "react-router-dom";
import Wrapper from "./Tags";

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
    return links.map((link, idx) => <Wrapper key={idx} 
                                    wrapper={wrapper} 
                                    props={{inner: <LinkOrMT {...{...link, cls}} />}} 
                                    />);
};
