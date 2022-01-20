import { useState, useEffect } from 'react';
import unsplash from '../api/unsplash';
const useImages = (defaultSearchTerm: string) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    search(defaultSearchTerm);
  }, [defaultSearchTerm]);

  const search = async (term: string) => {
    const response = await unsplash.get('/search/photos', {
      params: { query: term, per_page: 12 },
    });

    setImages(response.data.items);
  };

  return [images, search];
};

export default useImages;
