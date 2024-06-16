import ErrorPage from "../pages/ErrorPage";

export function assert(condition, message) {
    if (!condition) {
        throw new Error(message || "Assertion failed");
    }
}

export default function ErrorHandling({code, redirectLink, redirectMsg}) {
    
    if (300 < code && code < 399) // Redirection messages
    {

    }
    else if (400 < code && code < 499) // Client error responses
    {

    }
    else { // Server error responses ( 500 – 599 )
        
    }

    return <ErrorPage code={code} redirectLink={redirectLink} redirectMsg={redirectMsg} />;
};
