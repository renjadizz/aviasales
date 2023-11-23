const sortingChanged = (newSorting) => {
  return {
    type: 'SORTING_CHANGED',
    payload: newSorting,
  };
};
export { sortingChanged };
