/**
 * takes in array of data and filters by either string or array of filters or also both.
 * @param {Array} data
 * @param {String Array} filter
 * @param {String} property
 * @returns Array
 */

const filterData = (data, filter, property) => {
  if (typeof filter === "object") {
    let checker = (arr, target) => target.every(v => arr.includes(v));
    if (property === "focus")
      return data.filter(data => checker(data.focusAreas, filter));
    if (property === "principle")
      return data.filter(data => checker(data.principles, filter));
  }
  return data.filter(
    data =>
      data.title.toLowerCase().includes(filter.toLowerCase()) ||
      data.html.toLowerCase().includes(filter.toLowerCase())
  );
};

export default filterData;
