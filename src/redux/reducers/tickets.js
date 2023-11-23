const initialState = {
  tickets: [],
  loading: false,
  error: null,
};

function tickets(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_TICKETS_REQUEST':
      return {
        ...state,
        loading: action.payload,
      };
    case 'FETCH_TICKETS_SUCCESS':
      return { ...state, tickets: action.payload };
    case 'FETCH_TICKETS_FAILURE':
      return { ...state, error: action.payload };
    default:
      return state;
  }
}
export default tickets;
