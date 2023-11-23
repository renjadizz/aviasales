import { Card } from 'antd';
import './Ticket.css';
import { format, add } from 'date-fns';

function Ticket({ ticketInfo }) {
  const ticketDetails = ticketInfo.segments.map((elem) => {
    const hours = Math.floor(elem.duration / 60);
    const minutes = elem.duration % 60;
    const date1 = new Date(elem.date);
    const date2 = add(date1, { minutes: elem.duration });
    const date1Formatted = format(date1, 'hh:mm');
    const date2Formatted = format(date2, 'hh:mm');
    return (
      <div className="ticket__flights" key={elem.origin + elem.destination + elem.duration}>
        <div className="ticket__flights__places">
          <p className="ticket__flights__header">
            {elem.origin} – {elem.destination}
          </p>
          <p className="ticket__flights__main">
            {date1Formatted} – {date2Formatted}
          </p>
        </div>
        <div className="ticket__flights__in-flight">
          <p className="ticket__flights__header">В пути</p>
          <p className="ticket__flights__main">
            {hours}Ч {minutes}М
          </p>
        </div>
        <div className="ticket__flights__stops">
          <p className="ticket__flights__header">{elem.stops.length} пересадки</p>
          <p className="ticket__flights__main">{elem.stops.toString()}</p>
        </div>
      </div>
    );
  });
  return (
    <Card className="ticket" bodyStyle={{ padding: '10px' }}>
      <div className="ticket__price">
        <p className="ticket__price__tag">{ticketInfo.price}</p>
        <img className="ticket__price__img" src={`https://pics.avs.io/99/36/${ticketInfo.carrier}.svg`} />
      </div>
      {ticketDetails}
    </Card>
  );
}
export default Ticket;
