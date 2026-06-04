// Завдання 2:Even or Odd
// Повертає true якщо число парне, false якщо непарне
// Float з ненульовою дробовою частиною непарне
 
function isEven(n) {
    const result = n % 2 === 0;
    return result;
}
 
// перевірки
console.log(isEven(2));
console.log(isEven(3));
console.log(isEven(-4));
console.log(isEven(2.5));
console.log(isEven(0));