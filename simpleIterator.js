// from(), to(), and fromTo() are used in conjuction to create a system in which we can
// iterate through data structures

function from(arg) {
  return () => {
    arg += 1;
    return arg - 1;
  };
}

const from2 = from(2);
console.log(from2()); // unbounded iterator

function to(generator, limiter) {
  return () => {
    if (limiter === 0) return null;
    limiter -= 1;
    return generator();
  };
}

function fromTo(x, y) {
  return to(from(x), y);
}

const fromOneToThree = fromTo(1, 3); // new functions can be created with seperate Closed Over Variables bc of closure
const from0To4 = fromTo(0, 4);

function element(array, func) {
  if (func === undefined) {
    // defaults undefined iterator values to length of array
    func = fromTo(0, array.length);
  }
  return () => {
    const currentIndex = func();
    return !currentIndex ? undefined : array[func()]; // if currentIndex DNE return undefined otherwise return array element
  };
}

// here the iterator is used to return elements within an array

var ele = element(["a", "b", "c", "d", "e"], fromOneToThree);

console.log(ele()); // "b"
console.log(ele()); // "c"
console.log(ele()); //  "d"
console.log(ele()); // undefined
