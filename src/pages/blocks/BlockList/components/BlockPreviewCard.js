import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import useLocPhrase from "../../../../utils/GlobalContext/states/useLoc";

export default function BlockPreviewCard({block}) {
    return <div className="col-md-6">
        <div className="blog-post-item-two">
            <div className="blog-post-thumb-two">
                <Link className="block-preview" to={`/blocks/${block.id}`}>
                    <LazyLoadImage 
                        src={block.pics.length > 0 ? `${process.env.REACT_APP_PROTOCOL}://${block.pics[0].url}` : "/assets/img/no-img.jpg"}
                        width={413} height={413}
                        alt="Image Alt"
                    />
                </Link>
                <a href="blog.html" className="tag tag-two" dir="ltr">{block.quality_grade}</a>
            </div>
            <div className="blog-post-content-two">
                <h2 className="title"><Link className="block-preview" to={`/blocks/${block.id}`}>{block.material} {block.city}</Link></h2>
                <p style={{marginBottom: 0}}>{block.length}x{block.height}x{block.width}</p>
                <p style={{marginBottom: 0}}>{useLocPhrase(block.availability_status)}</p>
            </div>
        </div>
    </div>;
};
