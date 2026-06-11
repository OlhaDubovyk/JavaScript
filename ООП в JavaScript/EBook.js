const Book = require('./Book');

class EBook extends Book {
  constructor(title, author, year, fileFormat) {
    super(title, author, year);   // властивості Book
    this.fileFormat = fileFormat; // через сеттер
  }

  get fileFormat() {
    return this._fileFormat;
  }
  set fileFormat(value) {
    const allowed = ['pdf', 'epub', 'fb2', 'mobi', 'txt'];
    if (typeof value !== 'string' || !allowed.includes(value.toLowerCase())) {
      throw new Error(`Формат файлу має бути одним із: ${allowed.join(', ')}`);
    }
    this._fileFormat = value.toLowerCase();
  }

  // Перевизначений printInfo: усе те саме + формат файлу
  printInfo() {
    console.log(
      `Електронна книга: "${this.title}", автор: ${this.author}, ` +
      `рік видання: ${this.year}, формат файлу: ${this.fileFormat}`
    );
  }

  // Статичний метод: приймає екземпляр Book + формат, повертає EBook
  static fromBook(book, fileFormat) {
    if (!(book instanceof Book)) {
      throw new Error('Перший аргумент має бути екземпляром Book');
    }
    return new EBook(book.title, book.author, book.year, fileFormat);
  }
}

module.exports = EBook;