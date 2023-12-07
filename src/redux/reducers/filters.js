const initialState = [
  { id: 'filter_all', name: 'Все', checked: true },
  { id: 'filter_without', amount: 0, name: 'Без пересадок', checked: true },
  { id: 'filter_one', amount: 1, name: '1 пересадка', checked: true },
  { id: 'filter_two', amount: 2, name: '2 пересадки', checked: true },
  { id: 'filter_three', amount: 3, name: '3 пересадки', checked: true },
];

function filters(state = initialState, action) {
  switch (action.type) {
    case 'FILTERS_CHANGED':
      return action.payload;
    default:
      return state;
  }
}
export default filters;
