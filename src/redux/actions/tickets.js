import ticketApiService from '../../utils/ticketApiService';
const isLoading = (value) => {
  return {
    type: 'FETCH_TICKETS_REQUEST',
    payload: value,
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
    dispatch(isLoading(true));
    let searchId = sessionStorage.getItem('searchId');
    if (!searchId || searchId === 'null') {
      searchId = await data.getSearchId();
      if (searchId instanceof Error) {
        dispatch(addError(searchId));
        searchId = null;
        sessionStorage.setItem('searchId', searchId);
      } else {
        searchId = searchId.searchId;
        sessionStorage.setItem('searchId', searchId);
      }
    }
    if (searchId) {
      let tickets = await data.geTickets(searchId);
      if (tickets instanceof Error) {
        dispatch(addError(tickets));
        sessionStorage.setItem('searchId', null);
      } else {
        tickets = tickets.tickets;
        dispatch(addTickets(tickets));
      }
      dispatch(isLoading(false));
    }
  };
};
export { getTicketsThunkCreator };
