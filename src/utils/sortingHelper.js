function getDuration(a, b) {
  let aDuration = 0;
  let bDuration = 0;
  a.segments.forEach((element) => {
    aDuration += element.duration;
  });
  b.segments.forEach((element) => {
    bDuration += element.duration;
  });
  return [aDuration, bDuration];
}
function propComparator(prop) {
  return function (a, b) {
    if (prop === 'cheapest') {
      return a.price - b.price;
    } else if (prop === 'fastest') {
      let [aDuration, bDuration] = getDuration(a, b);
      return aDuration - bDuration;
    } else if (prop === 'optimal') {
      let [aDuration, bDuration] = getDuration(a, b);
      // eslint-disable-next-line prettier/prettier
      return aDuration + a.price - (bDuration + b.price);
    }
  };
}
export { propComparator };
