const Book = require('./Book');
const EBook = require('./EBook');

// 1. Кілька об'єктів класу Book
const book1 = new Book('Кобзар', 'Тарас Шевченко', 1840);
const book2 = new Book('Тіні забутих предків', 'Михайло Коцюбинський', 1911);
const book3 = new Book('Місто', 'Валер’ян Підмогильний', 1928);

book1.printInfo();
book2.printInfo();
book3.printInfo();

// 2. Екземпляр класу EBook
const ebook1 = new EBook('Інтернаут', 'Макс Кідрук', 2016, 'epub');
ebook1.printInfo();

// 3. Геттери та сеттери
console.log('\n--- Геттери та сеттери ---');
console.log('Назва book1:', book1.title); // геттер
book1.year = 1860;                         // сеттер з валідацією
book1.printInfo();

try {
  book2.year = 3000;                       // невалідне значення
} catch (err) {
  console.log('Помилка валідації:', err.message);
}

// 4. Статичний метод Book найдавніша книга (мікс Book і EBook)
console.log('\n--- Найдавніша книга ---');
const allBooks = [book1, book2, book3, ebook1];
const oldest = Book.findOldest(allBooks);
oldest.printInfo();

// 5. Статичний метод EBook.fromBook створення EBook з Book
console.log('\n--- Створення EBook з екземпляра Book ---');
const newEBook = EBook.fromBook(book2, 'pdf');
newEBook.printInfo();