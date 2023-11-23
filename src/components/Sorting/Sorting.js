import { Radio } from 'antd';
import './Sorting.css';
import { connect } from 'react-redux';
import { useState } from 'react';

import { sortingChanged } from '../../redux/actions/sorting';
function Sorting({ sorting, sortingChanged }) {
  const [sortingRadio] = useState([
    { id: 'cheapest', name: 'САМЫЙ ДЕШЕВЫЙ' },
    { id: 'fastest', name: 'САМЫЙ БЫСТРЫЙ' },
    { id: 'optimal', name: 'ОПТИМАЛЬНЫЙ' },
  ]);
  const onChange = (e) => {
    sortingChanged(e.target.value);
  };
  const radioElem = sortingRadio.map((elem) => {
    return (
      <Radio.Button className="sorting-btn" key={elem.id} value={elem.id}>
        {elem.name}
      </Radio.Button>
    );
  });
  return (
    <Radio.Group buttonStyle="solid" size="medium" className="sorting-group" onChange={onChange} value={sorting}>
      {radioElem}
    </Radio.Group>
  );
}
const mapStateToProps = (state) => {
  return { sorting: state.sorting };
};
const mapDispatchToProps = {
  sortingChanged,
};
export default connect(mapStateToProps, mapDispatchToProps)(Sorting);
