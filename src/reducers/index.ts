import { combineReducers } from 'redux';
import photosReducer from './photosReducer';
import searchPhotoReducer from './searchPhotoReducer';
import photoTagReducer from './photoTagReducer';
//import { Photos, PhotosSearch, PhotoTags } from '../actions';
import { Photos, PhotosSearch } from '../actions';

export interface StoreState {
  photos: Photos[];
  searchPhoto: PhotosSearch[];
  // photoTag: PhotoTags[];
}

export default combineReducers<StoreState>({
  photos: photosReducer,
  searchPhoto: searchPhotoReducer,
  //photoTag: photoTagReducer,
});
