import {useParams}  from "react-router-dom";
import useFetch  from "../../utils/useFetch";

export default function BlockDetails() {

    const {id} = useParams();

    const { pnd, res: block, err } = useFetch({path: `blocks/${id}/`});

    return (
      <div className="">
        <h2>block details</h2>

        { err && <div>{ err }</div> }
        { pnd && <div>Loading...</div> }
        { block && (
            <>
            <h2>{ block.material_name }</h2>
            <p> { block.city_name }</p>
            <p> { block.length }</p>
            </>
        )}

      </div>
    );
}