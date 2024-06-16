import usePagination from "../utils/usePagination";

export default function ListPage({itemViewFn}){

    let { pnd, err, list, next, previous, PBut} = usePagination();

    return (
      <div className="">
        <h2>list</h2>

        { err && <div>{ err }</div> }
        { pnd && <div>Loading...</div> }
        { list &&
        <>
          { list.map(itemViewFn) }
          <PBut bUrl={previous} txt='previous' />
          <PBut bUrl={next} txt='next' />
        </>
        }

      </div>
    );
}