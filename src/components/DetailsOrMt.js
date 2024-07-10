import ErrorHandling from "./ErrorHandling";
import Preload from "./Preload";
import InternalBanner from "./InternalBanner";

export default function DetailsOrMt({title, err, pnd, redirectLink, redirectMsg, data, inner}) {
    return <>
      
      { err && <ErrorHandling code={`${err.status}`} redirectLink={redirectLink} redirectMsg={redirectMsg} /> }
      <Preload pnd={pnd} />
      { data && <> <InternalBanner title={title} /> {inner} </> }

    </>;
};
