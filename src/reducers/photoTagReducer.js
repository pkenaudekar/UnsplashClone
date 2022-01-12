export default (state = [], action) => {
  switch (action.type) {
    case 'FETCH_PHOTO_TAGS':
      //console.log('FETCH_PHOTO_TAGS ' + JSON.stringify(action.payload.tags));
      return action.payload.tags;
    default:
      return state;
  }
};
