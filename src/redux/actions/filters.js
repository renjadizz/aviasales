const filtersChanged = (newFilters) => {
  return {
    type: 'FILTERS_CHANGED',
    payload: newFilters,
  };
};
export { filtersChanged };
