const initialState = {
  tickets: [],
  loading: false,
  error: null,
  page: 0,
  stop: false,
  chunk: 0,
};

function tickets(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_TICKETS_REQUEST':
      return {
        ...state,
        loading: action.payload.isValue,
        chunk: action.payload.chunkValue,
      };
    case 'FETCH_TICKETS_SUCCESS':
      return {
        ...state,
        tickets: [...state.tickets, ...action.payload.tickets],
        stop: action.payload.stop,
        chunk: state.chunk + 2,
      };
    case 'FETCH_TICKETS_FAILURE':
      return { ...state, error: action.payload };
    case 'SHOW_MORE_TICKETS':
      return { ...state, page: state.page + 5 };
    default:
      return state;
  }
}
export default tickets;
