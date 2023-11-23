import { combineReducers } from 'redux';

import filters from './filters';
import sorting from './sorting';
import tickets from './tickets';
export default combineReducers({
  filters,
  sorting,
  tickets,
});
