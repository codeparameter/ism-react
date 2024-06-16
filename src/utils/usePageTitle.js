import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import useLocPhrase from './GlobalContext/states/useLoc';

export default function usePageTitle( title ){
  const location = useLocation();  
  const pageTitle = useLocPhrase('title-' + title.slice());

  useEffect(() => {
    document.title = pageTitle;
  }, [location, pageTitle]);
};
