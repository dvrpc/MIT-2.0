const filterData = (data, filter, property) => {
  if (typeof filter === "object") {
    let checker = (arr, target) => target.every((v) => arr.includes(v));
    if (property === "focus")
      return data.filter((data) => checker(data.focusAreas, filter));
    if (property === "principle")
      return data.filter((data) => checker(data.principles, filter));
  }
  return data.filter((data) => data.name.toLowerCase().includes(filter));
};

export default filterData;
