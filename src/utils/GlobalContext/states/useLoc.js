import {useState, useContext, useEffect} from "react";
import { GlobalContext } from "../../../layouts/RootLayout/RootLayout";
import { LocList } from "../constantDBs/LocDB";
import {assert} from "../../../components/ErrorHandling";

export function useLoc(defaultLoc) {
    const [loc, setLocFn] = useState(defaultLoc);
    const setLoc = (val) => {
        assert(LocList.indexOf(val) != -1, `the language ${val} not supported`);
        setLocFn(val);
    };
    return {loc, setLoc};
};

export default function useLocPhrase(defaultPhrase){
    const [phrase, setPhrase] = useState('');
    const {constantDBs, states} = useContext(GlobalContext);
    defaultPhrase = isNaN(defaultPhrase) ? defaultPhrase : 'details';
    assert(constantDBs.LocDB.hasOwnProperty(defaultPhrase), `the phrase ${defaultPhrase} don't exist`);
    useEffect(()=>{
        setPhrase(constantDBs.LocDB[defaultPhrase][states.useLoc.loc]);
    }, [states.useLoc.loc]);
    return phrase;
}
