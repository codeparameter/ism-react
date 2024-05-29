export default function BlockPreview({ block }) {

    return (
      <div className="block-preview" key={block.id} >
            <h2>{ block.material_name }</h2>
            <p> { block.city_name }</p>
      </div>
    );
}