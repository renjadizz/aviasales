import { useState } from 'react';
import { Card, Space, Checkbox } from 'antd';
import './Filter.css';
const CheckboxGroup = Checkbox.Group;
const plainOptions = ['Без пересадок', '1 пересадка', '2 пересадки', '3 пересадки'];

function Filter() {
  const [checkedList, setCheckedList] = useState([]);
  const checkAll = plainOptions.length === checkedList.length;
  const indeterminate = checkedList.length > 0 && checkedList.length < plainOptions.length;
  const onChange = (list) => {
    setCheckedList(list);
  };
  const onCheckAllChange = (e) => {
    setCheckedList(e.target.checked ? plainOptions : []);
  };
  return (
    <Space direction="vertical" size={16}>
      <Card className="filter" bodyStyle={{ padding: '10px 15px' }}>
        <p className="filter__title">Количество пересадок</p>
        <Checkbox indeterminate={indeterminate} onChange={onCheckAllChange} checked={checkAll}>
          Все
        </Checkbox>
        <CheckboxGroup className="filter__group" options={plainOptions} value={checkedList} onChange={onChange} />
      </Card>
    </Space>
  );
}
export default Filter;
