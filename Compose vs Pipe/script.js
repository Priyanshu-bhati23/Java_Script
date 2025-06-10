// const f = x => x + 1;
// const g = x => x * 2;


// const result = f(g(5));  // g runs first → 10, then f → 11
// 

const compose = (f, g) => x => f(g(x));

const add1 = x => x + 1;
const double = x => x * 2;

const addThenDouble = compose(double, add1); // double(add1(x))
console.log(addThenDouble(3)); // Output: 8


const composeMany = (...fns) => x => 
  fns.reduceRight((acc, fn) => fn(acc), x);


const subtract2 = x => x - 2;
const square = x => x * x;

const pipeline = composeMany(square, add1, subtract2);
// Means: square(add1(subtract2(x)))

console.log(pipeline(5)); // subtract2(5) → 3 → add1 → 4 → square → 16



const trim = str => str.trim();
const toLower = str => str.toLowerCase();
const wrapInDiv = str => `<div>${str}</div>`;

const format = compose(wrapInDiv, toLower, trim);

console.log(format("   HELLO WORLD   "));  // <div>hello world</div>
