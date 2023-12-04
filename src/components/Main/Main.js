import { Flex, Button, Progress } from 'antd';
import { connect } from 'react-redux';
import { useEffect, useRef } from 'react';
import uniqueId from 'lodash/uniqueId';

import { propComparator } from '../../utils/sortingHelper';
import { propFiltrator } from '../../utils/filterHelper';
import { getTicketsThunkCreator, showMoreTickets, isLoading } from '../../redux/actions/tickets';
import Ticket from '../Ticket/Ticket';
import Error from '../Error/Error';

import './Main.css';

function Main({ filters, sorting, tickets, getTicketsThunkCreator, showMoreTickets, isLoading }) {
  const timer = useRef(null);
  useEffect(() => {
    isLoading(true, 0);
    getTicketsThunkCreator();
    return () => {
      clearInterval(timer.current);
    };
  }, []);
  useEffect(() => {
    if (!tickets.stop) getTicketsThunkCreator();
    if (tickets.stop) isLoading(true, 100);
  }, [tickets.tickets, tickets.error]);
  useEffect(() => {
    if (tickets.chunk === 100)
      timer.current = setTimeout(() => {
        isLoading(false, 100);
      }, 1000);
  }, [tickets.chunk]);
  const handleShowMoreTickets = () => {
    showMoreTickets();
  };
  const { loading, error, page, chunk } = tickets;
  let ticketElem = null;
  let lastTicket = page + 5;
  let errorElem = null;
  let buttonElem = null;
  let ticketArray = tickets.tickets;
  if (filters[0].checked !== true) {
    let filtersArray = [];
    for (const element of filters) {
      if (element.checked === true && element.id !== 'filter_all') {
        filtersArray.push(element.amount);
      }
    }
    if (filtersArray.length > 0) ticketArray = ticketArray.filter(propFiltrator(filtersArray));
  }

  if (sorting !== null) {
    ticketArray = ticketArray.sort(propComparator(sorting));
  }
  if (error) {
    errorElem = <Error message={error.message} />;
  }
  if (tickets.tickets.length > 0) {
    ticketElem = ticketArray.slice(0, lastTicket).map((elem) => {
      return <Ticket key={uniqueId()} ticketInfo={elem} />;
    });
    buttonElem = (
      <Button type="primary" className="ticket__btn" onClick={handleShowMoreTickets}>
        ПОКАЗАТЬ ЕЩЕ 5 БИЛЕТОВ!
      </Button>
    );
  } else if (tickets.tickets.length === 0 && loading !== true) {
    ticketElem = <div className="ticket__not-found">Рейсов, подходящих под заданные фильтры, не найдено</div>;
  }
  let loadingElem = null;
  if (loading) {
    loadingElem = <Progress percent={chunk} />;
  }
  return (
    <Flex vertical>
      {loadingElem}
      {ticketElem}
      {errorElem}
      {buttonElem}
    </Flex>
  );
}
const mapStateToProps = (state) => {
  return {
    tickets: state.tickets,
    sorting: state.sorting,
    filters: state.filters,
  };
};
const mapDispatchToProps = {
  getTicketsThunkCreator,
  showMoreTickets,
  isLoading,
};
export default connect(mapStateToProps, mapDispatchToProps)(Main);
