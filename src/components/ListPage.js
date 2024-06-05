import usePagination from "../utils/pagination";

export default function ListPage({basePath, itemViewFn}){

    let { pnd, err, list, next, previous, pagBut} = usePagination(basePath);

    
    function pBut(bUrl, txt){
        return bUrl ?
            (<button onClick={pagBut(bUrl)}>{txt}</button>)
            :
            (<button disabled></button>)
            ;
    }

    return (
      <div className="">
        <h2>list</h2>

        { err && <div>{ err }</div> }
        { pnd && <div>Loading...</div> }
        <pBut bUrl={previous} txt={previous} />
        <pBut bUrl={next} txt={next} />
        { list.map(itemViewFn) }

      </div>
    );
}