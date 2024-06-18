import { useLocation } from "react-router-dom";
import useFetcher from "./useFetch";
import { getUrlParams, setUrlParams } from "./urlTools";
import useRefList from "./useRefList";


export default function usePagination() {

    const pathname = useLocation().pathname;

    const{ pnd, res, err } = useFetcher({});
    
    let list = [], page = 0;
    const [leftLinks, addLeftLink, emptyLeftLinks] = useRefList({});
    const [rightLinks, addRightLink, emptyRightLinks] = useRefList({});
    
    function pageUrl(url){
        if(url){
            return url.slice(
                        url.indexOf(
                            pathname
                            )
                        );
        }
        return null;
    }

    function pageUrls(count, previous, next){ // 0 to 7 btn(s)

        const limit = getUrlParams(previous, 'limit') || getUrlParams(next, 'limit');
        if (!limit){return [];} // no btn

        const pageOffset = getUrlParams(window.location.search, 'offset');
        page = pageOffset ? (pageOffset / limit) + 1 : 1;

        if(previous){
            // set << btn
            addLeftLink({target: pathname, 
                            inner: 1,
                        });
            if (page >= 4){ // set left mid btn
                const leftMidPage = Math.ceil(page / 2);
                const leftMidOffset = (leftMidPage - 1) * limit;
                addLeftLink({target: setUrlParams(pathname, {'limit': limit, 'offset': leftMidOffset}), 
                                inner: leftMidPage,
                            });
            }
            // set < btn
            addLeftLink({target: pageUrl(previous), 
                            inner: page - 1,
                        });
        }
        if(next){

            const floorPageCount = Math.floor(count / limit)
            const pageCount = floorPageCount + (Math.ceil(count / limit) - floorPageCount);
            
            // set > btn
            addRightLink({target: pageUrl(next), 
                            inner: page + 1,
                        });
            if (pageCount - page >= 3){ // set right mid btn
                const rightMidPage = Math.ceil((pageCount + page) / 2);
                const rightMidOffset = (rightMidPage - 1) * limit;
                addRightLink({target: setUrlParams(pathname, {'limit': limit, 'offset': rightMidOffset}), 
                                inner: rightMidPage,
                            });
            }
            // set >> btn
            const lastPageOffset = (pageCount - 1) * limit;
            addRightLink({target: setUrlParams(pathname, {'limit': limit, 'offset': lastPageOffset}), 
                            inner: pageCount,
                        });
        }
    }

    if(res){
        list = res.results;
        emptyLeftLinks();
        emptyRightLinks();
        pageUrls(res.count, res.previous, res.next);
    }

    return { pnd, res, err, list, page, leftLinks, rightLinks};
}
