import { useLocation, Link } from "react-router-dom";
import useLocPhrase from "../utils/GlobalContext/states/useLoc";
import usePageTitle from "./usePageTitle";

export const BreadCrumpBase = ({target, title}) => {
    return <li className="breadcrumb-item"><Link to={target}>{useLocPhrase(title)}</Link></li>;
};


export const BreadCrumpMap = () => {
    const location = useLocation()

    let currentLink = '';

    let crumbs = location.pathname.split('/')
        .filter(crumb => crumb !== '')
        .map(crumb => {
        currentLink += `/${crumb}`;
        return <BreadCrumpBase key={currentLink} target={currentLink} title={crumb}/>;
        });

    return <><BreadCrumpBase target={'/'} title={'home'}/>{crumbs}</>;
};


export default function BreadCrumb({title}) {
    
    usePageTitle(title);

    return <section className="breadcrumb-area breadcrumb-bg" data-background="/assets/img/bg/breadcrumb_bg.jpg" style={{backgroundImage: 'url("/assets/img/bg/breadcrumb_bg.jpg")'}}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="breadcrumb-content">
                                <h2 className="title">{useLocPhrase(title)}</h2>
                                <nav aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <BreadCrumpMap/>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="breadcrumb-shape-wrap">
                    <img src="/assets/img/images/breadcrumb_shape01.png" alt=""/>
                    <img src="/assets/img/images/breadcrumb_shape02.png" alt=""/>
                </div>
            </section>;
};
