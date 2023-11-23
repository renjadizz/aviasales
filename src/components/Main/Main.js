import { Flex, Button } from 'antd';
import { connect } from 'react-redux';
import { useEffect } from 'react';

import { getTicketsThunkCreator } from '../../redux/actions/tickets';
import Ticket from '../Ticket/Ticket';

import './Main.css';

function Main(props) {
  useEffect(() => {
    props.getTicketsThunkCreator();
  }, []);
  let ticketElem = null;
  if (props.tickets.tickets.length > 0) {
    ticketElem = props.tickets.tickets.map((elem) => {
      return <Ticket key={elem.carrier + elem.price + elem.segments[0].duration} ticketInfo={elem} />;
    });
  }

  return (
    <Flex vertical>
      {ticketElem}
      <Button type="primary" className="ticket__btn">
        ПОКАЗАТЬ ЕЩЕ 5 БИЛЕТОВ!
      </Button>
    </Flex>
  );
}
const mapStateToProps = (state) => {
  return { tickets: state.tickets, loading: state.loading };
};
const mapDispatchToProps = {
  getTicketsThunkCreator,
};
export default connect(mapStateToProps, mapDispatchToProps)(Main);
