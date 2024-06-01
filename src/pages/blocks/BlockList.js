import { useState } from "react";
import useFetch  from "../../utils/useFetch";
import BlockPreview from "../../components/pages/BlockList/BlockPreview";

export default function BlockList() {

    const basePath = 'blocks/';

    const [path, setPath] = useState(basePath);

    const{ pnd, res, err } = useFetch({path});
    
    let blocks = [], next = null, previous = null;

    if(res){
      blocks = res.results;
      previous = res.previous;
      if(previous){
        previous = previous.slice(previous.indexOf(basePath));
      }
      next = res.next;
      if(next){
        next = next.slice(next.indexOf(basePath));
      }
    }

    function previousPage(){
      setPath(previous);
    }

    function nextPage(){
      setPath(next);
    }

    return (
      <div className="">
        <h2>block list</h2>

        { err && <div>{ err }</div> }
        { pnd && <div>Loading...</div> }
        {
          previous ?
          (<button onClick={previousPage}>previous</button>)
          :
          (<button disabled></button>)
        }
        {
          next ?
          (<button onClick={nextPage}>next</button>)
          :
          (<button disabled></button>)
        }
        { blocks.map(block => (<BlockPreview key={block.id} block={block} />)) }

      </div>
    );
}