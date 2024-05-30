import {useParams}  from "react-router-dom";
import useFetch  from "../../components/useFetch";

export default function BlockDetails() {

    const {id} = useParams();

    const { data: block, isPending, error } = useFetch(`blocks/${id}`);

    return (
      <div className="">
        <h2>block details</h2>

        { error && <div>{ error }</div> }
        { isPending && <div>Loading...</div> }
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