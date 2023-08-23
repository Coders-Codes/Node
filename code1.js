
// Ternary Operator Case :
const fruits = ['apple', 'oranges' , ' ', 'mango', ' ' , 'lemon'];
console.log(array);
console.log(fruits.map(fruit => fruit.trim() ==='' ? 'empty string': fruit));

// Normal If conditon Case :

const newArray = fruits.map(fruit => {
  if (fruit === ' ') {
    return 'empty string';
  }
  return fruit;
});

console.log(newArray);


