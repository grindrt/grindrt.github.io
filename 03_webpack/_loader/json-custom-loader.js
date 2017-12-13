module.exports = (source) => {
  let value = typeof source === "string" ? JSON.parse(source) : source;
  return "module.exports = '" + JSON.stringify(removeNumberAttributes(value)) + "';";
};

let removeNumberAttributes = (source) => {
 return Object.keys(source)
  .filter(key => isNaN(parseFloat(key)) && !isFinite(key))
  .reduce((obj, key) => {
    obj[key] = source[key] !== null && typeof(source[key]) == "object"
      ? removeNumberAttributes(source[key])
      : source[key];
    return obj;
  }, {});
};
