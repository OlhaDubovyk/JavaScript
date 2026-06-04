// Завдання 5: Масив об'єктів users, цикл for...of та деструктуризація
 
const users = [
    { name: "Олексій", email: "oleksiy@example.com", age: 28 },
    { name: "Наталія", email: "natalia@example.com", age: 34 },
    { name: "Дмитро", email: "dmytro@example.com", age: 22 },
];
 
// Перебираємо масив з деструктуризацією в циклі
for (const { name, email, age } of users) {
    console.log(name, email, age);
}