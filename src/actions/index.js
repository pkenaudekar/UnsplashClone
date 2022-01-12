import unsplash from '../api/unsplash';

const tagEndpoint = 'https://api.unsplash.com/photos';
const ACCESS_KEY = process.env.REACT_APP_ACCESS_KEY;

export const fetchPhotos = (endpoint, pageNo) => async (dispatch) => {
  const fetchedPhotos = await unsplash.get(`${endpoint}`, {
    params: { per_page: 13, page: pageNo },
  });

  dispatch({
    type: 'FETCH_PHOTOS',
    payload: fetchedPhotos.data,
  });
};

export const fetchPhotosSearch =
  (endpoint, pageNo, query, orderByLatest) => async (dispatch) => {
    const order = orderByLatest ? 'relevant' : 'relevant';

    const queryFiltered = textToQuery(query);

    const fetchedPhotos = await unsplash.get(`${endpoint}`, {
      params: {
        per_page: 13,
        page: pageNo,
        query: queryFiltered,
        order_by: order,
      },
    });

    dispatch({
      type: 'FETCH_PHOTO_SEARCH',
      payload: fetchedPhotos.data,
    });
  };

/*
export const fetchPhotoTags = (image) => async (dispatch) => {
  const fetchedPhoto = await fetch(`${tagEndpoint}/${image.id}`, {
    headers: {
      Authorization: `Client-ID ${ACCESS_KEY}`,
    },
  });
  const response = await fetchedPhoto.json();
  //console.log('response ' + JSON.stringify(response));
  //console.log('response.tags ' + JSON.stringify(response.tags));
  //response.data = response.tags;
  dispatch({
    type: 'FETCH_PHOTO_TAGS',
    payload: response,
  });
};
*/

function textToQuery(string) {
  let regex = /\W/;
  return string.replace(regex, '+');
}
