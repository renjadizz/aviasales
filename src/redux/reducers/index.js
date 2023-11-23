const initialState = {
  filters: [
    { id: 'filter_all', name: 'Все', checked: false },
    { id: 'filer_without', name: 'Без пересадок', checked: false },
    { id: 'filer_one', name: '1 пересадка', checked: false },
    { id: 'filer_two', name: '2 пересадки', checked: false },
    { id: 'filer_three', name: '3 пересадки', checked: false },
  ],
  sorting: [],
  tickets: [],
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FILTERS_CHANGED':
      return {
        filters: action.payload,
      };
    default:
      return state;
  }
};
export default reducer;
