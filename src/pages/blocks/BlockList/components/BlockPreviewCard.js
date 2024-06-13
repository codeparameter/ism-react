import { Link } from "react-router-dom";

export default function BlockPreviewCard({block}) {
    
    return <div className="col-md-6">
        <div className="blog-post-item-two">
            <div className="blog-post-thumb-two">
                <Link className="block-preview" to={`/blocks/${block.id}`}><img src="assets/img/blog/h3_blog_img06.jpg" alt=""/></Link>
                <a href="blog.html" className="tag tag-two" dir="ltr">{block.quality_name}</a>
            </div>
            <div className="blog-post-content-two">
                <h2 className="title"><Link className="block-preview" to={`/blocks/${block.id}`}>{block.material_name} {block.city_name}</Link></h2>
                <p style={{marginBottom: 0}}>{block.length}x{block.height}x{block.width}</p>
            </div>
        </div>
    </div>;
};
