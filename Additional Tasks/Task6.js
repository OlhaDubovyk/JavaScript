// Завдання 6: Between Extremes
// Повернути різницю між найбільшим і найменшим значенням у масиві
 
function betweenExtremes(numbers) {
    const result = Math.max(...numbers) - Math.min(...numbers);
    return result;
}
 
// Перевірки
console.log(betweenExtremes([23, 3, 19, 21, 16]));
console.log(betweenExtremes([1, 434, 555, 34, 112]));
console.log(betweenExtremes([10, 10]));