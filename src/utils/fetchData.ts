import unsplash from '../api/unsplash';
import { Image } from '../actions';
const endpoint = 'https://api.unsplash.com/photos';
const ACCESS_KEY = process.env.REACT_APP_ACCESS_KEY;

export const fetchPhotosSearch = async (
  endpoint: string,
  pageNo: number,
  query: string,
  orderByLatest: string | boolean
) => {
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
    alert('Failed to fetch photos');
  }
};

function textToQuery(string: string): string {
  let regex = /\W/;
  return string.replace(regex, '+');
}

export const fetchPhotoTags = async (image: Image) => {
  console.log('image ' + JSON.stringify(image));
  try {
    const fetchedPhoto = await fetch(`${endpoint}/${image.id}`, {
      headers: {
        Authorization: `Client-ID ${ACCESS_KEY}`,
      },
    });
    const result = await fetchedPhoto.json();
    //console.log('result ' + JSON.stringify(result));
    //console.log('result.tag ' + JSON.stringify(result));
    return result.tags;
  } catch (err) {
    alert('Failed to fetch photos');
  }
};
