// from(), to(), and fromTo() are used in conjuction to create a system in which we can
// iterate through data structures

function from(arg) {
  return () => {
    arg += 1;
    return arg - 1;
  };
}

const from2 = from(2); // unbounded iterator

function to(generator, limiter) {
  return () => {
    if (limiter === 0) return null;
    limiter -= 1;
    return generator();
  };
}

module.exports.fromTo = (x, y) => {
  return to(from(x), y);
};
