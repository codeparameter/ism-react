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
    let paramsObj = new URLSearchParams();
    Object.entries(params).map(param => paramsObj.append(param[0], param[1]));
    return url + paramsObj.toString();
}