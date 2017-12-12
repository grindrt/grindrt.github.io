module.exports = (source) => {
    var value = typeof source === "string" ? JSON.parse(source) : source;
};