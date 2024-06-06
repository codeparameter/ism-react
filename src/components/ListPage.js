import usePagination from "../utils/pagination";

export default function ListPage({basePath, itemViewFn}){

    let { pnd, err, list, next, previous, PBut} = usePagination(basePath);

    return (
      <div className="">
        <h2>list</h2>

        { err && <div>{ err }</div> }
        { pnd && <div>Loading...</div> }
        <PBut bUrl={previous} txt='previous' />
        <PBut bUrl={next} txt='next' />
        { list.map(itemViewFn) }

      </div>
    );
}