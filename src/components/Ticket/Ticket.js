import { Card } from 'antd'
import './Ticket.css'

function Ticket() {
  return (
    <Card className="ticket" bodyStyle={{ padding: '10px' }}>
      <div className="ticket__price">
        <p className="ticket__price__tag">13400 P</p>
        <img className="ticket__price__img" src="https://pics.avs.io/99/36/U6.svg" />
      </div>
      <div className="ticket__flights">
        <div>
          <p className="ticket__flights__header">MOW – HKT</p>
          <p className="ticket__flights__main">10:45 – 08:00</p>
        </div>
        <div>
          <p className="ticket__flights__header">В пути</p>
          <p className="ticket__flights__main">21ч 15м</p>
        </div>
        <div>
          <p className="ticket__flights__header">2 пересадки</p>
          <p className="ticket__flights__main">HKG, JNB</p>
        </div>
      </div>
    </Card>
  )
}
export default Ticket
