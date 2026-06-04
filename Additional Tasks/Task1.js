// Завдання 1: Short Long Short
// Повертає рядок у форматі: короткий + довгий + короткий
 
function solution(a, b) {
    const result = a.length <= b.length ? a + b + a : b + a + b;
    return result;
}
 
// Перевірка
console.log(solution("1", "22"));   // "1221"
console.log(solution("22", "1"));   // "1221"
console.log(solution("", "abc"));   // "abc"