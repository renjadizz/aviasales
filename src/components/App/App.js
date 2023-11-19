import './App.css'
import { Layout, Col, Row } from 'antd'

import Filter from '../Filter/Filter'
import Sorting from '../Sorting/Sorting'
import Header from '../Header/Header'
import Main from '../Main/Main'

function App() {
  return (
    <Layout className="main">
      <Header />
      <Row className="content">
        <Col>
          <Filter />
        </Col>
        <Col>
          <Sorting />
          <Main />
        </Col>
      </Row>
    </Layout>
  )
}

export default App
