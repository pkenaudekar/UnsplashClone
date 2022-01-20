import { Image, FetchPhotoTagsAction } from '../actions';
export default (state: Image[] = [], action: FetchPhotoTagsAction) => {
  switch (action.type) {
    case 'FETCH_PHOTO_TAGS':
      //console.log('FETCH_PHOTO_TAGS ' + JSON.stringify(action.payload.tags));
      return action.payload;
    default:
      return state;
  }
};
