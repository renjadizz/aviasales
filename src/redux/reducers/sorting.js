const initialState = null;

function sorting(state = initialState, action) {
  switch (action.type) {
    case 'SORTING_CHANGED':
      return action.payload;
    default:
      return state;
  }
}
export default sorting;
