/*
import unsplash from '../api/unsplash';
const fetchPhotosSearch = async (endpoint, pageNo, query, orderByLatest) => {
  const order = orderByLatest ? 'relevant' : 'relevant';
  try {
    const queryFiltered = textToQuery(query);

    const fetchedPhotos = await unsplash.get(`${endpoint}`, {
      params: {
        per_page: 13,
        page: pageNo,
        query: queryFiltered,
        order_by: order,
      },
    });

    return fetchedPhotos.data.results;
  } catch (err) {
    alert('Failed to fetch photos000');
  }
};

function textToQuery(string) {
  let regex = /\W/;
  return string.replace(regex, '+');
}

export default fetchPhotosSearch;
*/
