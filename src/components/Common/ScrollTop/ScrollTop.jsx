import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollTop() {
  const { pathname } = useLocation();
  
  const prevPathnameRef = useRef();

  useEffect(() => {
    try {
        if (prevPathnameRef.current !== pathname) {
          prevPathnameRef.current = pathname;
          window.scrollTo(0, 0);
        }
      } catch (error) {
        console.error(error);
      }
    }, [pathname]);
  

  return null;
}

export default ScrollTop;