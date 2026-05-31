// Колбек-функція для парного числа
function handleEven() {
  console.log("number is even");
}
 
// Колбек функція для непарного числа
function handleOdd() {
  console.log("number is odd");
}
 
// Функція приймає число та два колбеки:
// evenCallback викликається якщо число парне
// oddCallback викликається якщо число непарне
function handleNum(number, evenCallback, oddCallback) {
  if (number % 2 === 0) {
    evenCallback(); // число парне
  } else {
    oddCallback();  // число непарне
  }
}
 
handleNum(4, handleEven, handleOdd); // number is even
handleNum(7, handleEven, handleOdd); // number is odd