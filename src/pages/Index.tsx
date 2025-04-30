
import { useEffect } from 'react';

const Index = () => {
  useEffect(() => {
    // Redirect to the HTML index page
    window.location.href = '/src/index.html';
  }, []);

  return null;
};

export default Index;
