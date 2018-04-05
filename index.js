fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, iteratee) {
      for (const prop in collection) {
        iteratee(collection[prop]);
      }
      return collection;
    },

    map: function(collection, iteratee) {
      const arr = [];
      for (const prop in collection) {
        arr.push(iteratee(collection[prop]));
      }
      return arr;
    },

    reduce: function(collection, iteratee, acc) {
      for (const prop in collection) {
        acc = iteratee(acc, collection[prop], collection);
      }
      return acc;
    },

    find: function(collection, predicate) {
      for (const prop in collection) {
        if (predicate(collection[prop])) {
          return true;
        }
      }
      return false;
    },

    filter: function(collection, predicate) {
      const arr = [];
      for (const prop in collection) {
        if (predicate(collection[prop])) {
          arr.push(collection[prop]);
        }
      }
      return arr;
    },

    size: function(collection) {
      let i = 0;
      for (const prop in collection) {
        i++;
      }
      return i;
    },

    first: function(collection, n) {
      if (n === undefined) {
        return collection[0];
      }
      return collection.slice(0, n);
    },

    last: function(collection, n) {
      if (n === undefined) {
        return collection[collection.length - 1];
      }
      return collection.slice(-n);
    },

    compact: function(array) {
      const newArr = [];
      for (const el of array){
        if (el) {
          newArr.push(el);
        }
      }
      return newArr;
    },

    sortBy: function(array, iteratee) {
      const newArr = array.slice();
      newArr.sort(function(a,b){return iteratee(a) - iteratee(b)});
      return newArr.map(el => iteratee(el));

      // const newArr = array.map(el => iteratee(el));
      // newArr.sort(function(a,b) {a-b});
    },

    flatten: function flat(array, shallow) {
      const newArr = [];

      for (const el of array) {
        if (Array.isArray(el)){
          if (shallow === true) {
            for (const anotherEl of el){
              newArr.push(anotherEl)
            }
          } else {
            newArr.push(...flat(el)) //[1,2]
          }
        }
        else {
          newArr.push(el)
        }
      }


      return newArr;
    },

    uniq: function (arr, isSorted, iteratee) {
      // if (isSorted){
      //
      // }
      const result = arr.slice();
      for (let i = 0; i < result.length - 1; i++){
        for (let j = i + 1; j < result.length; j++){
          if (iteratee){
            if (iteratee(result[i]) === iteratee(result[j])){
              result.splice(j, 1);
              j--;
            }
          } else {
            if (result[i] === result[j]){
              result.splice(j, 1);
              j--;
            }
          }
        }
      }

      return result;
    },

    keys: function (obj) {
      const keys = [];
      for (const key in obj){
        keys.push(key);
      }
      return keys;
    },

    values: function (obj) {
      const values = [];
      for (const key in obj){
        values.push(obj[key]);
      }
      return values;
    },

    functions: function (obj) {
      const fns = [];
      for (const prop in obj){
        if (typeof obj[prop] === "function"){
          fns.push(prop);
        }
      }

      return fns;
    },



  }
})()

fi.libraryMethod()
