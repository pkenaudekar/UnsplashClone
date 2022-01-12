export default (state = [], action) => {
  switch (action.type) {
    case 'FETCH_PHOTO_SEARCH':
      return action.payload;
    default:
      return state;
  }
};
