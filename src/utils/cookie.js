export default function cookie(key){
    key += '=';
    const cookies = document.cookie;
    const keyIndex = cookies.indexOf(key);
    if(keyIndex == -1){
        return null;
    }
    const valueIndex = keyIndex + key.length;
    const nextKeyIndex = cookies.indexOf(';', valueIndex);
    return cookies.slice(valueIndex, nextKeyIndex);
}