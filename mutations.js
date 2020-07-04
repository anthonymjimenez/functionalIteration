const { fromTo } = require("./utils");

// push iterator values to array
function collect(generator, array) {
  return () => {
    var index = generator(); // index is the value generated.. could be a index OR the value that index represents in array e.x array[index]
    if (index === null) return undefined;
    array.push(index);
    return index;
  };
}

var array = [];

col = collect(fromTo(0, 2), array); // values 0 through 1 push to array

console.log(col()); // 0
console.log(col()); // 1
console.log(col()); // undefined

console.log(array); // [0, 1]

function element(array, func) {
  // collect() can be used with element() to push array values from one array to another
  if (func === undefined) {
    // defaults undefined iterator values to length of array
    func = fromTo(0, array.length);
  }
  return () => {
    const currentIndex = func();
    return !currentIndex ? undefined : array[currentIndex]; // if currentIndex DNE return undefined otherwise return array element
  };
}

var ele = element(["a", "b", "c", "d", "e"], fromTo(1, 4)); // fromTo is know used to push the values the iterative index values represent in their array.. in this case ["b", "c"]

collectElements = collect(ele, array);
console.log(collectElements()); // 'b'
console.log(collectElements()); // 'c'
console.log(collectElements()); // 'd'

console.log(array); // [0, 1 , 'b', 'c', 'd']

// Using this technique we now have a system in which we can pinpoint values from one data structure and pass them to another
// in addition, we have control of the data flow at two distinct points, 1) at the time of declaration (line 15 & line 35) and 2) at the time of function execution (line 38-line 40)
// most mutations to the global 'array' variable can now be made letting functions do all the heavy lifting! - more to come!
