import ErrorHandling from "./ErrorHandling";
import Preload from "./Preload";
import InternalBanner from "./InternalBanner";

import useLocPhrase from "../utils/GlobalContext/states/useLoc";

export default function ListOrMT({title, pnd, err, list, inner}) {
    return (
        <>
          { err && <ErrorHandling code={err.status} /> }
          <Preload pnd={pnd} />
          <InternalBanner title={title} />
          {list && list.length > 0 ? inner :  <MTL/>}
        </>
        );
};

function MTL(){
    return <h2 className="mtl">{useLocPhrase('MTL')}</h2>;
}
