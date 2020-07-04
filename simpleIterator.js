const { fromTo } = require("./utils");

const fromOneToThree = fromTo(1, 3); // new functions can be created with seperate Closed Over Variables bc of closure

function element(array, func) {
  if (func === undefined) {
    // defaults undefined iterator values to length of array
    func = fromTo(0, array.length);
  }
  return () => {
    const currentIndex = func();
    return !currentIndex ? undefined : array[currentIndex]; // if currentIndex DNE return undefined otherwise return array element
  };
}

// here the iterator is used to return elements within an array

var ele = element(["a", "b", "c", "d", "e"], fromOneToThree);

console.log(ele()); // "b"
console.log(ele()); // "c"
console.log(ele()); //  "d"
console.log(ele()); // undefined

// more to come!
