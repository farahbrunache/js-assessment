exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: (arr, item) => arr.indexOf(item),

  sum: (arr) => arr.reduce((prev, curr) => prev + curr, 0),

  remove: (arr, item) => arr.filter(v => v !== item),

  removeWithoutCopy: (arr, item) => {
    while (arr.indexOf(item) !== -1) {
      arr.splice(arr.indexOf(item), 1);
    }
    return arr;
  },

  append: (arr, item) => [...arr, item],

  truncate: arr => {
    arr.pop();
    return arr;
  },

  prepend: (arr, item) => {
    arr.unshift(item);
    return arr;
  },

  curtail: arr => {
    arr.shift();
    return arr;
  },

  concat: (arr1, arr2) => [...arr1, ...arr2],

  insert: (arr, item, index) => {
    arr.splice(index, 0, item);
    return arr;
  },

  count: (arr, item) => arr.filter(x => x === item).length,

  duplicates: arr => {

  },

  square: arr => {

  },

  findAllOccurrences: (arr, target) => {

  }
};
