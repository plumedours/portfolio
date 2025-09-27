import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function Page({ children, title }) {
  const location = useLocation();

  useEffect(() => {
    if (title) {
      document.title = title;
    }
  }, [title]);

  return children;
}

export default Page;