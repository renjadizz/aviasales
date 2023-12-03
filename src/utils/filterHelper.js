function propFiltrator(filterArray) {
  return function (ticket) {
    for (const amount of filterArray) {
      let stopsCount = 0;
      ticket.segments.forEach((element) => {
        stopsCount += element.stops.length;
      });
      if (stopsCount === amount) return true;
    }
    return false;
  };
}

export { propFiltrator };
