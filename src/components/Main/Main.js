import { Flex, Button } from 'antd';
import { connect } from 'react-redux';
import { useEffect } from 'react';

import { getTicketsThunkCreator, showMoreTickets } from '../../redux/actions/tickets';
import Ticket from '../Ticket/Ticket';
import Error from '../Error/Error';
import './Main.css';

function Main({ tickets, getTicketsThunkCreator, showMoreTickets }) {
  useEffect(() => {
    getTicketsThunkCreator();
  }, []);
  const handleShowMoreTickets = () => {
    showMoreTickets();
  };
  const { loading, error, page } = tickets;
  let ticketElem = null;
  let lastTicket = page + 5;
  let errorElem = null;
  let buttonElem = null;
  if (error) {
    errorElem = <Error message={error.message} />;
  } else {
    if (tickets.tickets.length > 0) {
      ticketElem = tickets.tickets.slice(0, lastTicket).map((elem) => {
        return <Ticket key={elem.carrier + elem.price + elem.segments[0].duration} ticketInfo={elem} />;
      });
      buttonElem = (
        <Button type="primary" className="ticket__btn" onClick={handleShowMoreTickets}>
          ПОКАЗАТЬ ЕЩЕ 5 БИЛЕТОВ!
        </Button>
      );
    }
  }
  let loadingElem = null;
  if (loading) {
    loadingElem = <div>loading</div>;
  }
  return (
    <Flex vertical>
      {loadingElem}
      {errorElem}
      {ticketElem}
      {buttonElem}
    </Flex>
  );
}
const mapStateToProps = (state) => {
  return {
    tickets: state.tickets,
  };
};
const mapDispatchToProps = {
  getTicketsThunkCreator,
  showMoreTickets,
};
export default connect(mapStateToProps, mapDispatchToProps)(Main);
