import { PhotosSearch, FetchPhotosSearchAction } from '../actions';
export default (
  state: PhotosSearch[] = [],
  action: FetchPhotosSearchAction
) => {
  switch (action.type) {
    case 'FETCH_PHOTO_SEARCH':
      return action.payload;
    default:
      return state;
  }
};
