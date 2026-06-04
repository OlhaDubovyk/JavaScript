// Завдання 4: Додавання та видалення властивостей об'єкта person
 
const person = {
    firstName: "Марія",
    lastName: "Коваленко",
    age: 25,
};
 
// Додаємо властивість email
person.email = "maria.kovalenko@example.com";
 
// Видаляємо властивість age
delete person.age;
 
console.log(person);