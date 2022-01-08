import unsplash from '../api/unsplash';

const fetchPhotos = async (endpoint, pageNo) => {
  try {
    const fetchedPhotos = await unsplash.get(`${endpoint}`, {
      params: { per_page: 13, page: pageNo },
    });

    return fetchedPhotos.data;
  } catch (err) {
    alert('Failed to fetch photos' + err);
  }
};

export default fetchPhotos;
