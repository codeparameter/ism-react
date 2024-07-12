import ErrorPage from "../pages/ErrorPage";

export function assert(condition, message) {
    if (!condition) {
        throw new Error(message || "Assertion failed");
    }
}

export default function ErrorHandling({code}) {

    let redirectLink, redirectMsg;

    if (code == 403){
        redirectLink = '/login';
        redirectMsg = 'login';
    }else{
        redirectLink = '/';
        redirectMsg = 'home';

        if (400 <= code && code != 404 && code > 500){
            code = 400;
        }
        else if (500 <= code && code > 600){
            code = 500;
        }
        else if (code != 404 && code != 'FTC'){
            code = "SWW"; // something went wrong
        }
    }

    return <ErrorPage code={`${code}`} redirectLink={redirectLink} redirectMsg={redirectMsg} />;
};
