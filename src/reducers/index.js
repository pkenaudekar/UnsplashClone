import { combineReducers } from 'redux';
import photosReducer from './photosReducer';
import searchPhotoReducer from './searchPhotoReducer';
import photoTagReducer from './photoTagReducer';

export default combineReducers({
  photos: photosReducer,
  searchPhoto: searchPhotoReducer,
  photoTag: photoTagReducer,
});
