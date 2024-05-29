import useFetch  from "../../components/useFetch";
import BlockPreview from "../../components/pages/BlockList/BlockPreview";

export default function BlockList() {

    const { data, isPending, error } = useFetch('http://localhost:8000/api/blocks/');
    
    const blocks = data ? data.results : []

    return (
      <div className="">
        <h2>block list</h2>

        { error && <div>{ error }</div> }
        { isPending && <div>Loading...</div> }
        { blocks.map(block => (<BlockPreview key={block.id} block={block} />)) }

      </div>
    );
}