import ticketApiService from '../../utils/ticketApiService';
const isLoading = (isValue, chunkValue) => {
  return {
    type: 'FETCH_TICKETS_REQUEST',
    payload: { isValue, chunkValue },
  };
};
const addTickets = (tickets) => {
  return {
    type: 'FETCH_TICKETS_SUCCESS',
    payload: tickets,
  };
};
const addError = (error) => {
  return {
    type: 'FETCH_TICKETS_FAILURE',
    payload: error,
  };
};

const getTicketsThunkCreator = () => {
  let data = new ticketApiService();
  return async (dispatch) => {
    let searchId = sessionStorage.getItem('searchId');
    if (!searchId) {
      searchId = await data.getSearchId();
      if (searchId instanceof Error) {
        dispatch(addError(searchId));
        searchId = null;
        sessionStorage.removeItem('searchId');
      } else {
        searchId = searchId.searchId;
        sessionStorage.setItem('searchId', searchId);
      }
    }
    if (searchId) {
      let tickets = await data.geTickets(searchId);
      if (tickets instanceof Error) {
        dispatch(addError(tickets));
      } else {
        let stop = tickets.stop;
        tickets = tickets.tickets;
        dispatch(addTickets({ tickets, stop }));
        dispatch(addError(null));
        if (stop) {
          sessionStorage.removeItem('searchId');
        }
      }
    }
  };
};
const showMoreTickets = () => {
  return {
    type: 'SHOW_MORE_TICKETS',
  };
};
export { getTicketsThunkCreator, showMoreTickets, isLoading };
