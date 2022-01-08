import unsplash from '../api/unsplash';
const endpoint = 'https://api.unsplash.com/photos';
const ACCESS_KEY = process.env.REACT_APP_ACCESS_KEY;

const fetchPhotoTags = async (image) => {
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

export default fetchPhotoTags;
