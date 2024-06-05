export default function cookie(key){
    key += '=';
    const cookies = document.cookie;
    const pattern = String.raw`(^|\s)${key}`;
    const keyIndex = cookies.search(pattern);
    if(keyIndex == -1){
        return null;
    }
    const valueIndex = keyIndex + key.length;
    const nextKeyIndex = cookies.indexOf(';', valueIndex);
    const result = nextKeyIndex == -1 ? 
            cookies.slice(valueIndex) : cookies.slice(valueIndex, nextKeyIndex);
    return result.charAt(0) == '=' ?
            result.slice(1) : result;
}