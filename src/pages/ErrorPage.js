import { Link } from "react-router-dom";
import useLocPhrase from "../utils/GlobalContext/states/useLoc";
import usePageTitle from "../components/usePageTitle";

export default function ErrorPage({code, redirectLink, redirectMsg}) {
    usePageTitle(code);
    return (
        <section className="error-area">
            
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="error-content">
                            <h1 className="error-code">{code.slice(0,1)}<span>{code.slice(1, 2)}</span>{code.slice(2, 3)}</h1>
                            <h2 className="title">{useLocPhrase(`error-${code}-head`)}</h2>
                            <p>{useLocPhrase(`error-${code}-body`)}</p>
                            <div>
                            <Link to={redirectLink} className="btn btn-three">{useLocPhrase(`redirect-${redirectMsg}`)}</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};
