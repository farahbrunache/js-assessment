/* eslint-disable */
exports = typeof window === 'undefined' ? global : window;

/**
 * This file defines an object with some methods. Some of these methods are
 * populated incorrectly; your job is to fix them. Other methods are not
 * populated at all; your job is to fill them out.
 */

exports.bestPracticesAnswers = {
  globals: () => {
    myObject = {
      name: 'Jory'
    };

    return myObject;
  },

  parseInt: num => {
    return parseInt(num);
  },

  identity: (val1, val2) => {

  }
};
