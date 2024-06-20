import usePageTitle from "../utils/usePageTitle";
import BreadCrumb from "./BreadCrumb";

export default function InternalBanner({title}) {
    
    usePageTitle(title);

    return <section className="breadcrumb-area breadcrumb-bg" data-background="/assets/img/banner/banner02.jpg" style={{backgroundImage: 'url("/assets/img/banner/banner02.jpg")'}}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <BreadCrumb title={title} />
                        </div>
                    </div>
                </div>
                <div className="breadcrumb-shape-wrap">
                    <img src="/assets/img/images/breadcrumb_shape01.png" alt=""/>
                    <img src="/assets/img/images/breadcrumb_shape02.png" alt=""/>
                </div>
            </section>;
};