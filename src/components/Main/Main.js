import { Flex, Button } from 'antd'

import Ticket from '../Ticket/Ticket'
import './Main.css'

function Main() {
  return (
    <Flex vertical>
      <Ticket />
      <Ticket />
      <Button type="primary" className="ticket__btn">
        ПОКАЗАТЬ ЕЩЕ 5 БИЛЕТОВ!
      </Button>
    </Flex>
  )
}
export default Main
