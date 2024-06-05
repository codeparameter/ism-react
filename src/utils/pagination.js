import { useState } from "react";
import useFetch from "./useFetch";

export default function usePagination(basePath) {

    const [path, setPath] = useState(basePath);

    const{ pnd, res, err } = useFetch({path});
    
    let list = [], next = null, previous = null;

    function pagUrl(url){
        if(url){
            return url.slice(url.indexOf(basePath));
        }
        return null;
    }

    if(res){
        list = res.results;
        previous = pagUrl(res.previous);
        next = pagUrl(res.next);
    }

    function pagBut(url){
      return () => {setPath(url);};
    }

    return { pnd, res, err, list, next, previous, pagBut};
}