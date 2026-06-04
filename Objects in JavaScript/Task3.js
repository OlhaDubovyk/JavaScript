// Завдання 3: Об'єднання об'єктів через spread оператор
 
const car1 = {
    brand: "Toyota",
    model: "Camry",
    year: 2021,
};
 
const car2 = {
    brand: "Honda",
    model: "Civic",
    owner: "Іван Петренко",
};
 
// Об'єднуємо car1 та car2 у car3 через spread
const car3 = { ...car1, ...car2 };
 
console.log(car3);