import ErrorPage from "../pages/ErrorPage";

export function assert(condition, message) {
    if (!condition) {
        throw new Error(message || "Assertion failed");
    }
}

export default function ErrorHandling({code, redirectLink, redirectMsg}) {

    // let base_path = window.href.base_path;
    // let redirectLink, redirectMsg;

    // if (code == 403){
    //     redirectLink = '/login';
    //     redirectMsg = 'redirect-login';
    // }
    // 403 -> logout -> login

    // redirectLink = base_path;
    // const searchParamsCount = new URLSearchParams(window.href.search).size;
    // if(searchParamsCount == 0){
    //     if(base_path.slice(-1) == '/'){
    //         redirectLink = base_path.slice(
    //             0, base_path.lastIndexOf('/', base_path.length - 2) + 1
    //         );
    //     }
    //     else {
    //         redirectLink = base_path.slice(
    //             0, base_path.lastIndexOf('/') + 1
    //         );
    //     }
    // }
    // else{
    //     redirectLink = base_path.slice(
    //         0, base_path.lastIndexOf('/') + 1
    //     );
    // }
    // let lastSlash = base_path.lastIndexOf('/');
    // const upper = base_path.slice(0, lastSlash);
    // lastSlash = base_path.length - 1 == lastSlash ? upper.lastIndexOf('/'): 9;
    // if (base_path.length - 1 == lastSlash){
    //     const upper = base_path.slice(0, lastSlash);
    // }else{
    //     const upper = base_path.slice(0, lastSlash);
    // }

    // '/blocks'
    // ''
    // '/blocks/'
    // '/blocks'
    // '/'

    // /blocks/?s=abc

    
    // ftc -> back to home
    // ftc -> back to previous (top)
    // 404 -> back to home
    // 404 -> back to previous (top)
    // 500 -> back to home
    // 500 -> back to previous (top)
    
    // if (300 < code && code < 399) // Redirection messages
    // {

    // }
    // else if (400 < code && code < 499) // Client error responses
    // {

    // }
    // else { // Server error responses ( 500 – 599 )
        
    // }

    return <ErrorPage code={code} redirectLink={redirectLink} redirectMsg={redirectMsg} />;
};
