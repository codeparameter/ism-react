import { useRef } from "react";

export default function useRefList({initialRefs = []}){
    const refs = useRef(initialRefs);

    function addRef(props){
        refs.current = [...refs.current, props];
    }

    function emptyRefs(){
        refs.current = [];
    }
    return [refs.current, addRef, emptyRefs];
}