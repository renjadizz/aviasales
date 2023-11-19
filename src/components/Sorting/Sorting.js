import { Radio } from 'antd'
import './Sorting.css'

function Sorting() {
  return (
    <Radio.Group buttonStyle="solid" size="medium" className="sorting-group">
      <Radio.Button className="sorting-btn" value="cheap">
        САМЫЙ ДЕШЕВЫЙ
      </Radio.Button>
      <Radio.Button className="sorting-btn" value="fast">
        САМЫЙ БЫСТРЫЙ
      </Radio.Button>
      <Radio.Button className="sorting-btn" value="optimal">
        ОПТИМАЛЬНЫЙ
      </Radio.Button>
    </Radio.Group>
  )
}
export default Sorting
