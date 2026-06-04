// Завдання 4: Calculate Average
// Обчислити середнє значення масиву чисел
// Порожній масив повертає 0
 
function findAverage(array) {
    if (array.length === 0) return 0;
 
    const sum = array.reduce((acc, num) => acc + num, 0);
    const result = sum / array.length;
    return result;
}
 
// Перевірки
console.log(findAverage([1, 2, 3]));
console.log(findAverage([1, 2, 3, 4]));
console.log(findAverage([]));              
console.log(findAverage([10, 20, 30])); 