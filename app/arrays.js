exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {
    var index;
    for(var i = 0; i < arr.length; i++){
      if(arr[i] === item){
        index = i;
      }
    }
    return index || -1;
  },

  sum : function(arr) {
    var total = 0;
    _.each(arr, function (item) {
      total += item;
    });
    return total;
  },

  remove : function(arr, item) {
    var newArr = [];
    _.each(arr, function (value) {
      if(value !== item){
        newArr.push(value);
      }
    });
    return newArr;
  },

  removeWithoutCopy : function(arr, item) {
    for(var i = 0; i < arr.length; i++){
      if(arr[i] === item){
        arr.splice(i, 1);
        i--;
      }
    }
    return arr;
  },

  append : function(arr, item) {
    
  },

  truncate : function(arr) {

  },

  prepend : function(arr, item) {

  },

  curtail : function(arr) {

  },

  concat : function(arr1, arr2) {

  },

  insert : function(arr, item, index) {

  },

  count : function(arr, item) {

  },

  duplicates : function(arr) {

  },

  square : function(arr) {

  },

  findAllOccurrences : function(arr, target) {

  }
};
