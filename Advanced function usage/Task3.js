// Функція ділення з валідацією вхідних даних
// numerator ділене
// denominator дільник
// Повертає результат ділення або викидає помилку
function divide(numerator, denominator) {
  // Перевірка: обидва аргументи мають бути числами
  if (typeof numerator !== "number" || typeof denominator !== "number") {
    throw new Error("Обидва аргументи повинні бути числами");
  }
 
  // Перевірка: ділення на нуль неможливе
  if (denominator === 0) {
    throw new Error("Ділення на нуль неможливе");
  }
 
  return numerator / denominator;
}
 
// Виклик 1: коректні значення очікуємо результат 5
try {
  const result = divide(10, 2);
  console.log("Результат:", result);
} catch (error) {
  console.log("Помилка:", error.message);
} finally {
  // Виконується завжди незалежно від результату
  console.log("Робота завершена");
}
 
// Виклик 2: denominator = 0 очікуємо помилку
try {
  const result = divide(10, 0);
  console.log("Результат:", result);
} catch (error) {
  console.log("Помилка:", error.message);
} finally {
  console.log("Робота завершена");
}
 
// Виклик 3: рядок замість числа очікуємо помилку
try {
  const result = divide("десять", 2);
  console.log("Результат:", result);
} catch (error) {
  console.log("Помилка:", error.message);
} finally {
  console.log("Робота завершена");
}