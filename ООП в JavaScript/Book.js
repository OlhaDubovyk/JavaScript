class Book {
  constructor(title, author, year) {
    this.title = title;   // йдуть через сеттери валідація спрацює одразу
    this.author = author;
    this.year = year;
  }

  // Геттери та сеттери з валідацією
  get title() {
    return this._title;
  }
  set title(value) {
    if (typeof value !== 'string' || value.trim() === '') {
      throw new Error('Назва має бути непорожнім рядком');
    }
    this._title = value;
  }

  get author() {
    return this._author;
  }
  set author(value) {
    if (typeof value !== 'string' || value.trim() === '') {
      throw new Error('Автор має бути непорожнім рядком');
    }
    this._author = value;
  }

  get year() {
    return this._year;
  }
  set year(value) {
    const currentYear = new Date().getFullYear();
    if (!Number.isInteger(value) || value < 0 || value > currentYear) {
      throw new Error(`Рік видання має бути цілим числом від 0 до ${currentYear}`);
    }
    this._year = value;
  }

  printInfo() {
    console.log(`Книга: "${this.title}", автор: ${this.author}, рік видання: ${this.year}`);
  }

  // Статичний метод: повертає найдавнішу книгу за роком
  static findOldest(books) {
    if (!Array.isArray(books) || books.length === 0) {
      throw new Error('Передайте непорожній масив книг');
    }
    return books.reduce((oldest, book) => (book.year < oldest.year ? book : oldest));
  }
}

module.exports = Book;