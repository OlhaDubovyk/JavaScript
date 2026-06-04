// Завдання 5: Sum of Two Lowest Positive Integers
// Повернути суму двох найменших чисел у масиві
// Масив містить мінімум 4 позитивних цілих числа
 
function sumTwoSmallestNumbers(numbers) {
    const sorted = numbers.slice().sort((a, b) => a - b);
    const result = sorted[0] + sorted[1];
    return result;
}
 
// Перевірки
console.log(sumTwoSmallestNumbers([19, 5, 42, 2, 77]));
console.log(sumTwoSmallestNumbers([10, 343445353, 3453445, 3453545353453]));
console.log(sumTwoSmallestNumbers([1, 2, 3, 4]));