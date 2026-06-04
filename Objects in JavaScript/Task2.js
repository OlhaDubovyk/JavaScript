// Завдання 2: Об'єкт book та деструктуризація
 
const book = {
    title: "Майстер і Маргарита",
    author: "Михайло Булгаков",
    year: "1967",
};
 
// Деструктуризуємо назву та автора
const { title, author } = book;
 
console.log(title);
console.log(author);