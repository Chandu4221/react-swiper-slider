const initialState = {
  allPhotos: []
};

const InitialPhotos = (state = initialState, action) => {
  switch (action.type) {
    case 'INITIAL_LOAD':
      return {
        ...state,
        allPhotos: action.payload
      };
    default:
      return state;
  }
};

export default InitialPhotos;
