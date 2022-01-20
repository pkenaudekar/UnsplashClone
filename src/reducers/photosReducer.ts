import { Photos, FetchPhotosAction } from '../actions';

export default (state: Photos[] = [], action: FetchPhotosAction) => {
  switch (action.type) {
    case 'FETCH_PHOTOS':
      return action.payload;
    default:
      return state;
  }
};
