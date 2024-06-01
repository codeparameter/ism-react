import useFetch  from "../../components/useFetch";
import BlockPreview from "../../components/pages/BlockList/BlockPreview";

export default function BlockList() {

    const{ pnd, res, err } = useFetch('blocks/');
    
    let blocks = [], next = null, previous = null;

    if(res){
      blocks = res.results;
      next = res.next;
      previous = res.previous;
    }

    return (
      <div className="">
        <h2>block list</h2>

        { err && <div>{ err }</div> }
        { pnd && <div>Loading...</div> }
        { blocks.map(block => (<BlockPreview key={block.id} block={block} />)) }

      </div>
    );
}