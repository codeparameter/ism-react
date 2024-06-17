import { Link, useLocation } from "react-router-dom";
import useFetcher from "./useFetch";

export default function usePagination() {

    const pathname = useLocation().pathname.slice(1);

    const{ pnd, res, err } = useFetcher({});
    
    let list = [], next = null, previous = null;

    function pagUrl(url){
        if(url){
            return url.slice(
                        url.indexOf(
                            pathname
                            )
                        );
        }
        return null;
    }

    if(res){
        list = res.results;
        previous = pagUrl(res.previous);
        next = pagUrl(res.next);
    }
    
    function PBut({target, txt='', disTxt=''}){
        if (!target) return <Link disabled>{disTxt}</Link>;
        target = '/' + target;
        return target ?
            (<Link to={target}>{txt}</Link>)
            :
            (<Link disabled>{disTxt}</Link>)
            ;
    }

    return { pnd, res, err, list, next, previous, PBut};
}
