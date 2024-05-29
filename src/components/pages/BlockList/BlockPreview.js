import { Link  } from 'react-router-dom';

export default function BlockPreview({ block }) {

    return (
      <Link className="block-preview" to={`/blocks/${block.id}`}>
            <h2>{ block.material_name }</h2>
            <p> { block.city_name }</p>
      </Link>
    );
}