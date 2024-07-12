import ErrorHandling from "./ErrorHandling";
import Preload from "./Preload";
import InternalBanner from "./InternalBanner";

export default function DetailsOrMt({title, err, pnd, data, inner}) {
    return <>
      
      { err && <ErrorHandling code={err.status} /> }
      <Preload pnd={pnd} />
      { data && <> <InternalBanner title={title} /> {inner} </> }

    </>;
};
