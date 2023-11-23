import { Card, Space, Checkbox } from 'antd';
import './Filter.css';
import { connect } from 'react-redux';

import { filtersChanged } from '../../redux/actions/filters';

function Filter({ filters, filtersChanged }) {
  const onChange = (e) => {
    let newState;
    if (e.target.id === 'filter_all') {
      newState = filters.map((obj) => ({ ...obj, checked: e.target.checked }));
    } else {
      newState = filters.map((obj) => (obj.id === e.target.id ? { ...obj, checked: e.target.checked } : obj));
      const checkAllChecked = newState.filter((obj) => obj.id !== 'filter_all' && obj.checked === true);
      if (checkAllChecked.length === filters.length - 1) {
        newState[0].checked = true;
      } else if (checkAllChecked.length === 0) {
        newState[0].checked = false;
      }
    }
    filtersChanged(newState);
  };

  const checkBoxElements = [];
  for (const elem of filters) {
    checkBoxElements.push(
      <Checkbox key={elem.id} id={elem.id} onChange={onChange} checked={elem.checked}>
        {elem.name}
      </Checkbox>
    );
  }

  return (
    <Space direction="vertical" size={16}>
      <Card className="filter" bodyStyle={{ padding: '10px 15px' }}>
        <p className="filter__title">Количество пересадок</p>
        <div className="filter__group">{checkBoxElements}</div>
      </Card>
    </Space>
  );
}
const mapStateToProps = (state) => {
  return { filters: state.filters };
};
const mapDispatchToProps = {
  filtersChanged,
};
export default connect(mapStateToProps, mapDispatchToProps)(Filter);
