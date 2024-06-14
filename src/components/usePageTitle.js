import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import useLocPhrase from '../utils/GlobalContext/states/useLoc';

export default function usePageTitle( title ){
  const location = useLocation();
  // let pageTitle = 'title-' + title;
  let pageTitle = title;
  console.log(pageTitle);
  pageTitle = useLocPhrase(pageTitle);

  useEffect(() => {
    document.title = pageTitle;
  }, [location, title]);

  return null;
};
