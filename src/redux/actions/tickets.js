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
    if (!searchId) {
      searchId = await data.getSearchId();
      searchId = searchId.searchId;
      sessionStorage.setItem('searchId', searchId);
    }
    let tickets = await data.geTickets(searchId);
    tickets = tickets.tickets;
    if (tickets instanceof Error) {
      dispatch(addError(tickets));
    } else {
      dispatch(addTickets(tickets));
    }
    dispatch(isLoading(false));
  };
};
export { getTicketsThunkCreator };
