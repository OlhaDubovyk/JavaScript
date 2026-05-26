// Завдання 1 Площа прямокутника
 
// 1. Function Declaration
function calcAreaDeclaration(width, height) {
  return width * height;
}
 
// 2. Function Expression
const calcAreaExpression = function(width, height) {
  return width * height;
};
 
// 3. Arrow Function
const calcAreaArrow = (width, height) => width * height;
 
// Виклики
console.log("Function Declaration:", calcAreaDeclaration(5, 10));
console.log("Function Expression:", calcAreaExpression(5, 10));
console.log("Arrow Function:", calcAreaArrow(5, 10));