import { combineReducers } from 'redux';

import filters from './filters';
import sorting from './sorting';
export default combineReducers({
  filters,
  sorting,
});
