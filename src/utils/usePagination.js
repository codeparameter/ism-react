import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import useFetch from "./useFetch";

export default function usePagination() {

    const [path, setPath] = useState('');

    let currentPath, basePath;
    const location = useLocation();
    const currentRout = location.pathname.slice(1);

    useEffect(()=>{
        currentPath = window.location.href;
        basePath = currentPath.slice(
                                currentPath.indexOf(
                                    currentRout
                                )
                            );
        if(new URLSearchParams(window.location.search).size == 0){
            if (basePath.slice(-1) != '/'){
                basePath += '/'
            }
        }
        setPath(basePath);
    }, [location]);

    const{ pnd, res, err } = useFetch({path});
    
    let list = [], next = null, previous = null;

    function pagUrl(url){
        if(url){
            return url.slice(url.indexOf(currentRout));
        }
        return null;
    }

    if(res){
        list = res.results;
        previous = pagUrl(res.previous);
        next = pagUrl(res.next);
    }

    function pagBut(url){
      return () => {
        setPath(url);
        window.scrollTo(0, 0);
    };
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
