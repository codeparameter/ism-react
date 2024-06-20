import { useLocation, Link } from "react-router-dom";
import useLocPhrase from "../utils/GlobalContext/states/useLoc";

export const BreadCrumbItem = ({target, title}) => {
    return <li className="breadcrumb-item"><Link to={target}>{useLocPhrase(title)}</Link></li>;
};


export default function BreadCrumb({title}){
    const location = useLocation();

    let currentLink = '';

    let crumbs = location.pathname.split('/')
        .filter(crumb => crumb !== '')
        .map(crumb => {
        currentLink += `/${crumb}`;
        return <BreadCrumbItem key={currentLink} target={currentLink} title={crumb}/>;
        });

    return  <div className="breadcrumb-content">
                <h2 className="title">{useLocPhrase(title)}</h2>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <BreadCrumbItem target={'/'} title={'home'}/>
                        {crumbs}
                    </ol>
                </nav>
            </div>
};
