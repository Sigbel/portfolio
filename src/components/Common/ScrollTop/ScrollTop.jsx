import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollTop() {
  const { pathname } = useLocation();

  console.log(pathname)
  const prevPathnameRef = useRef();

  console.log(prevPathnameRef)

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