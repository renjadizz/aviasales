const initialState = {
  tickets: [],
  loading: false,
  error: null,
  page: 0,
  stop: false,
};

function tickets(state = initialState, action) {
  switch (action.type) {
    case 'FETCH_TICKETS_REQUEST':
      return {
        ...state,
        loading: action.payload,
      };
    case 'FETCH_TICKETS_SUCCESS':
      return { ...state, tickets: [...state.tickets, ...action.payload.tickets], stop: action.payload.stop };
    case 'FETCH_TICKETS_FAILURE':
      return { ...state, error: action.payload };
    case 'SHOW_MORE_TICKETS':
      return { ...state, page: state.page + 5 };
    default:
      return state;
  }
}
export default tickets;
