export function urlParams(url){
    return url ? new URLSearchParams(url.slice(url.indexOf('?'))) : null;
}

export function getUrlParams(url, key){
    const res = urlParams(url);
    return res ? res.get(key) : null;
}

export function setUrlParams(url, params){
    if(url.indexOf('?') == -1){
        url += url.slice(-1) == '/' ? '?' : '/?';
    }else{
        url += '&';
    }
    const strParams = [];
    Object.entries(params).map(param => strParams.push(`${param[0]}=${param[1]}`));
    return `${url}${strParams.join('&')}`;
}