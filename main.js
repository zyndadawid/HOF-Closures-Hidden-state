//High Order Functions and hidden variables
const hof = () => () => 5;

//console.log(hof()());

const hof2 = fn => fn(7);

hof2(function a(x) {
  return x;
});

/*console.log(
  hof2(function a(x) {
    return x;
  })
);*/

//Closure

const closure = function() {
  let count = 0; // this is hidden fron users
  return function increment() {
    count++;
    return count;
  };
};

const incrementFN = closure();
incrementFN();
incrementFN();
