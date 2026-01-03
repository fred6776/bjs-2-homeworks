// Задача 1. Печатное издание
class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this._state = 100;
    this.type = null;
  }

  fix() {
    this.state = this._state * 1.5;
  }

  set state(newState) {
    if (newState < 0) {
      this._state = 0;
    } else if (newState > 100) {
      this._state = 100;
    } else {
      this._state = newState;
    }
  }

  get state() {
    return this._state;
  }

}

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = 'magazine';
  }
}

class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.author = author;
    this.type = 'book';
  }
}

class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = 'novel';
  }
}

class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = 'fantastic';
  }
}

class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = 'detective';
  }
}

// Задача 2. Библиотека
class Library {
  constructor(name) {
    this.name = name;
    this.books = [];
  }

  addBook(book) {
    if (book.state > 30) {
      this.books.push(book);
    }
  }

  findBookBy(type, value) {
    return this.books.find(book => book[type] === value) || null;
  }

  giveBookByName(bookName) {
    const bookDelete = this.books.findIndex(book => book.name === bookName);
    if (bookDelete === -1) {
      return null;
    }
    return this.books.splice(bookDelete, 1)[0];
  }
}

// Тестовый сценарий
function testCase() {
  // 1. Создаём библиотеку
  const library = new Library('Городская библиотека имени А.С. Пушкина');
  console.log('1. Создана библиотека:', library.name);

  // 2. Добавляем несколько печатных изданий разных типов
  library.addBook(new Magazine('Наука и жизнь', 2023, 80));
  library.addBook(new Book('А.П. Чехов', 'Палата №6', 1892, 128));
  library.addBook(new NovelBook('Лев Толстой', 'Анна Каренина', 1877, 864));
  library.addBook(new FantasticBook('Айзек Азимов', 'Фонд', 1951, 256));
  library.addBook(new DetectiveBook('Агата Кристи', 'Убийство в Восточном экспрессе', 1934, 320));

  console.log('2. В библиотеку добавлены издания:');
  library.books.forEach(book => {
    console.log(`   - ${book.name}, ${book.type}, ${book.releaseDate}`);
  });

  // 3. Находим книгу, изданную в 1919 году (или создаём)
  let book1919 = library.findBookBy('releaseDate', 1919);
  if (!book1919) {
    console.log('3. Книга 1919 года не найдена — создаём:');
    library.addBook(new Book('Анонимный автор', 'Забытая повесть', 1919, 240));
    book1919 = library.findBookBy('releaseDate', 1919);
    console.log(`   Создана и добавлена: ${book1919.name}`);
  } else {
    console.log('3. Найдана книга 1919 года:', book1919.name);
  }

  // 4. Выдаём любую книгу (например, «Палата №6»)
  const bookReceived = library.giveBookByName('Палата №6');
  if (bookReceived) {
    console.log('4. Выдана книга:', bookReceived.name);
  } else {
    console.log('4. Книга не найдена!');
  }

  // 5. Повреждаем выданную книгу (снижаем state)
  console.log(`   Состояние перед повреждением: ${bookReceived.state}`);
  bookReceived.state -= 80;
  console.log('5. Книга повреждена: state =', bookReceived.state);

  // 6. Восстанавливаем выданную книгу
  bookReceived.fix();
  console.log('6. Книга восстановлена: state =', bookReceived.state, '(было 20 стало 30)');

  // 7. Пытаемся добавить восстановленную книгу обратно в библиотеку
  library.addBook(bookReceived);
  if (library.findBookBy('name', 'Палата №6')) {
    console.log('7. Книга успешно добавлена обратно в библиотеку!');
  } else {
    console.log('7. Книгу не удалось добавить обратно (state ≤ 30).');
  }
}

testCase();

// Задача 3. Журнал успеваемости *
class Student {
  constructor(name) {
    this.name = name;
    this.marks = {};
  }

  addMark(mark, subject) {
    if (!Number.isInteger(mark) || mark < 2 || mark > 5) {
      return;
    }

    if (!(subject in this.marks)) {
      this.marks[subject] = [];
    }

    this.marks[subject].push(mark);
  }

  getAverageBySubject(subject) {
    if (!(subject in this.marks)) {
      return 0;
    }
    return this.marks[subject].reduce((sum, mark) => sum + mark, 0) / this.marks[subject].length;
  }

  getAverage() {
    return Object.keys(this.marks)
      .reduce((sum, subject) => sum + this.getAverageBySubject(subject), 0) /
      Object.keys(this.marks).length || 0;
  }
}