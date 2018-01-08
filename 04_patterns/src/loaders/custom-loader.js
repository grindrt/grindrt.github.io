module.exports = function(source) {
    if(this.cacheable) this.cacheable();

    var value = typeof source === "string" ? JSON.parse(source) : source;
    traverse(value, isNumeric);

    this.value = [value];

    return "module.exports = '" + JSON.stringify(value) + "';";
};

function isNumeric(value) {
        return !isNaN(parseFloat(value)) && isFinite(value);
    };

function traverse(obj, func) {
    for (var prop in obj) {
        if (func.call(this, prop)) {
            delete obj[prop];
        }

        if (obj[prop] !== null && !Array.isArray(obj[prop]) && typeof(obj[prop]) == "object") {
            traverse(obj[prop],func);
        }
    }
};