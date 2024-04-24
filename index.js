/*
 * Клас: Musician
 * Статичні поля:
 * ------------------------
 * | Поле   |  Значення   |
 * |--------|-------------|
 * | count  |  0          |
 *
 * Властивості:
 * --------------------------------------
 * | Властивість  |  Тип                |
 * |--------------|---------------------|
 * | #name        |  String             |
 * | #instrument  |  String             |
 *
 * Гетери:
 * ---------------------
 * | Гетер    |  Повертає |
 * |----------|-----------|
 * | name     |  string   |
 * | instrument | string  |
 *
 * Методи:
 * --------------------------
 * | Метод   |  Дія         |
 * |---------|--------------|
 * | play()  | Виводить рядок в консоль |
 */

class Musician {
  static count = 0; // Статичне поле count, що відслідковує кількість музикантів, початкове значення 0

  #name; // Приватне поле #name
  #instrument; // Приватне поле #instrument

  constructor(name, instrument) {
    // Конструктор приймає два параметри: name та instrument
    this.#name = name; // Присвоюємо вхідне значення name приватному полю #name
    this.#instrument = instrument; // Присвоюємо вхідне значення instrument приватному полю #instrument
    Musician.count++; // Збільшуємо значення статичного поля count на 1
  }

  get name() {
    // Гетер для приватного поля #name
    return this.#name; // Повертаємо значення приватного поля #name
  }

  get instrument() {
    // Гетер для приватного поля #instrument
    return this.#instrument; // Повертаємо значення приватного поля #instrument
  }

  set name(newName) {
    // Сетер для приватного поля #name
    this.#name = newName; // Присвоюємо нове значення приватному полю #name
  }

  set instrument(newInstrument) {
    // Сетер для приватного поля #instrument
    this.#instrument = newInstrument; // Присвоюємо нове значення приватному полю #instrument
  }

  play() {
    // Метод, що виводить рядок в консоль "<ім'я музиканта> грає на <інструменті>"
    console.log(`${this.#name} грає на ${this.#instrument}`);
  }
}

/*
 * Клас: Guitarist
 * Наслідується від: Musician
 *
 * Властивості:
 * ---------------------------------
 * | Властивість |  Тип           |
 * |-------------|----------------|
 * | #name       |  String        |
 * | #instrument |  String        |
 * | #band       |  String        |
 *
 * Гетери:
 * ---------------------
 * | Гетер  |  Повертає  |
 * |--------|------------|
 * | name   |  string    |
 * | band   |  string    |
 *
 * Сетери:
 * ---------------------
 * | Сетер  |  Очікує   |
 * |--------|-----------|
 * | name   |  string   |
 * | band   |  string   |
 *
 * Методи:
 * --------------------------
 * | Метод     |  Дія       |
 * |-----------|------------|
 * | play()    | Виводить рядок в консоль |
 * | joinBand()| Змінює значення #band |
 */

class Guitarist extends Musician {
  #band; // Приватне поле #band

  constructor(name, instrument, band) {
    super(name, instrument); // Виклик конструктора батьківського класу з параметрами name та instrument
    this.#band = band; // Присвоєння вхідного значення band до приватного поля #band
  }

  get band() {
    // Гетер для приватного поля #band
    return this.#band; // Повертаємо значення приватного поля #band
  }

  set band(newBand) {
    // Сетер для приватного поля #band
    this.#band = newBand; // Присвоюємо нове значення приватному полю #band
  }

  joinBand(band) {
    // Метод joinBand, що змінює значення #band
    this.#band = band;
  }

  play() {
    // Перевизначений метод play(), що виводить рядок в консоль
    console.log(`${super.name} грає на ${super.instrument} в групі ${this.#band}`);
  }
}
/*
 * Клас: Bassist
 * Наслідується від: Musician
 *
 * Властивості:
 * ---------------------------------
 * | Властивість |  Тип           |
 * |-------------|----------------|
 * | #name       |  String        |
 * | #instrument |  String        |
 * | #band       |  String        |
 *
 * Гетери:
 * ---------------------
 * | Гетер  |  Повертає  |
 * |--------|------------|
 * | name   |  string    |
 * | band   |  string    |
 *
 * Сетери:
 * ---------------------
 * | Сетер  |  Очікує   |
 * |--------|-----------|
 * | name   |  string   |
 * | band   |  string   |
 *
 * Методи:
 * --------------------------
 * | Метод     |  Дія       |
 * |-----------|------------|
 * | play()    | Виводить рядок в консоль |
 * | joinBand()| Змінює значення #band |
 */

class Bassist extends Musician {
  #band; // Приватне поле #band

  constructor(name, instrument, band) {
    super(name, instrument); // Виклик конструктора батьківського класу з параметрами name та instrument
    this.#band = band; // Присвоєння вхідного значення band до приватного поля #band
  }

  get band() {
    // Гетер для приватного поля #band
    return this.#band; // Повертаємо значення приватного поля #band
  }

  set band(newBand) {
    // Сетер для приватного поля #band
    this.#band = newBand; // Присвоюємо нове значення приватному полю #band
  }

  joinBand(band) {
    // Метод joinBand, що змінює значення #band
    this.#band = band;
  }

  play() {
    // Перевизначений метод play(), що виводить рядок в консоль
    console.log(`${super.name} грає на ${super.instrument} в групі ${this.#band}`);
  }
}

// Додаємо сетер band до класу Musician після його створення
// Object.defineProperty(Musician.prototype, 'band', {
//   set: function(newBand) {
//     this.#band = newBand; // Присвоюємо нове значення приватному полю #band
//   }
// });

/*
 * Клас: Band
 * ---------------------------
 * | Властивість |  Тип       |
 * |-------------|------------|
 * | name        |  string    |
 * | members     |  array     |
 */

class Band {
  #name; // Приватне поле #name
  #members = []; // Приватне поле #members, що є масивом

  constructor(name, members) {
    this.#name = name; // Присвоєння вхідного значення name приватному полю #name
    this.#members = members; // Присвоєння вхідного значення members приватному полю #members
  }

  get name() {
    // Гетер для приватного поля #name
    return this.#name; // Повертаємо значення приватного поля #name
  }

  get members() {
    // Гетер для приватного поля #members
    return this.#members; // Повертаємо значення приватного поля #members
  }

  set name(newName) {
    // Сетер для приватного поля #name
    this.#name = newName; // Присвоюємо нове значення приватному полю #name
  }

  addMember(newMember) {
    // Метод addMember(), що додає нового учасника до гурту
    if (newMember instanceof Musician) { // Перевіряємо чи newMember є екземпляром класу Musician
      this.#members.push(newMember); // Додаємо нового музиканта до приватного поля #members
    } else {
      console.log("Новий учасник повинен бути екземпляром класу Musician");
    }
  }

  playMusic() {
    // Метод playMusic(), що викликає метод play() для кожного учасника гурту
    this.#members.forEach(member => member.play());
  }
}

/*
 * Клас: Performance
 * ---------------------------
 * | Властивість |  Тип       |
 * |-------------|------------|
 * | band        |  Band      |
 * | location    |  string    |
 * | date        |  Date      |
 */
class Performance {
  #band; // Приватне поле #band
  #location; // Приватне поле #location
  #date; // Приватне поле #date

  constructor(band, location, date) {
    this.#band = band; // Присвоєння вхідного значення band приватному полю #band
    this.#location = location; // Присвоєння вхідного значення location приватному полю #location
    this.#date = date; // Присвоєння вхідного значення date приватному полю #date
  }

  get band() {
    // Гетер для приватного поля #band
    return this.#band; // Повертаємо значення приватного поля #band
  }

  get location() {
    // Гетер для приватного поля #location
    return this.#location; // Повертаємо значення приватного поля #location
  }

  get date() {
    // Гетер для приватного поля #date
    return this.#date; // Повертаємо значення приватного поля #date
  }

  info() {
    // Метод info(), що виводить рядок в консоль
    console.log(`Гурт ${this.#band.name} виступить в ${this.#location} ${this.#date.toLocaleDateString()}`);
  }
}

/*
 * Клас: Concert
 * ---------------------------
 * | Властивість |  Тип       |
 * |-------------|------------|
 * | band        |  Band      |
 * | location    |  string    |
 * | date        |  Date      |
 * | ticketPrice |  number    |
 */
class Concert extends Performance {
  #ticketPrice; // Приватне поле #ticketPrice

  constructor(band, location, date, ticketPrice) {
    super(band, location, date); // Виклик конструктора базового класу з параметрами band, location, date
    this.#ticketPrice = ticketPrice; // Присвоєння вхідного значення ticketPrice приватному полю #ticketPrice
  }

  get ticketPrice() {
    // Гетер для приватного поля #ticketPrice
    return this.#ticketPrice; // Повертаємо значення приватного поля #ticketPrice
  }

  set ticketPrice(newPrice) {
    // Сетер для приватного поля #ticketPrice
    this.#ticketPrice = newPrice; // Присвоюємо нове значення приватному полю #ticketPrice
  }

  info() {
    // Метод info(), що виводить рядок в консоль
    console.log(`Гурт ${super.band.name} виступить в ${super.location} ${super.date.toLocaleDateString()}, ціна квитка ${this.#ticketPrice}`);
  }
}

/*
 * Клас: Vocalist
 * ---------------------------
 * | Властивість |  Тип       |
 * |-------------|------------|
 * | name        |  string    |
 * | band        |  string    |
 */
class Vocalist {
  #name; // Приватне поле #name
  #band; // Приватне поле #band

  constructor(name, band) {
    this.#name = name; // Присвоєння вхідного значення name приватному полю #name
    this.#band = band; // Присвоєння вхідного значення band приватному полю #band
  }

  get name() {
    // Гетер для приватного поля #name
    return this.#name; // Повертаємо значення приватного поля #name
  }

  get band() {
    // Гетер для приватного поля #band
    return this.#band; // Повертаємо значення приватного поля #band
  }

  set name(newName) {
    // Сетер для приватного поля #name
    this.#name = newName; // Присвоюємо нове значення приватному полю #name
  }

  set band(newBand) {
    // Сетер для приватного поля #band
    this.#band = newBand; // Присвоюємо нове значення приватному полю #band
  }

  info() {
    // Метод info(), що виводить інформацію про вокаліста
    console.log(`Вокаліст ${this.#name} є членом гурту ${this.#band}`);
  }
}

/*
 * Клас: SongWriter
 * ---------------------------
 * | Властивість |  Тип       |
 * |-------------|------------|
 * | #songs       |  array     |
 */
class SongWriter {
  #songs; // Приватне поле #songs

  constructor(songs) {
    this.#songs = songs; // Присвоєння вхідного значення songs приватному полю #songs
  }

  get songs() {
    // Гетер для приватного поля #songs
    return this.#songs; // Повертаємо значення приватного поля #songs
  }

  addSong(newSong) {
    // Метод addSong для додавання нової пісні до масиву #songs
    this.#songs.push(newSong);
  }

  info() {
    // Метод info(), що виводить інформацію про автора пісень
    console.log(`Написав ${this.#songs.length} пісень`);
  }
}

/*
 * Клас: LeadSinger
 * ---------------------------
 * | Властивість |  Тип       |
 * |-------------|------------|
 * | name        |  string    |
 * | band        |  string    |
 * | songs       |  array     |
 */

class LeadSinger extends Vocalist {
  constructor(name, band) {
    super(name, band); // Викликаємо конструктор батьківського класу з параметрами name та band
  }
}

/*
 * Створення musician екземпляра класу Musician
 * ---------------------------------------------------
 * | Властивість |  Значення        |
 * |-------------|------------------|
 * | name        | "John"           |
 * | instrument  | "Guitarist"      |
 */

/*
 * Створення guitarist екземпляра класу Guitarist
 * ---------------------------------------------------
 * | Властивість |  Значення         |
 * |-------------|-------------------|
 * | name        | "Jimmy Page"      |
 * | instrument  | "гітара"          |
 * | band        | "Led Zeppelin"    |
 */

/*
 * Створення bassist екземпляра класу Bassist
 * ---------------------------------------------------
 * | Властивість |  Значення        |
 * |-------------|------------------|
 * | name        | "Paul McCartney" |
 * | instrument  | "бас-гітара"     |
 * | band        | "The Beatles"    |
 */

// Створення band екземпляру класу Band
/*
 * Створення band екземпляра класу Band
 * ---------------------------------------------------
 * | Властивість |  Значення        |
 * |-------------|------------------|
 * | name        | "The Beatles"    |
 * | members     | [bassist]       |
 */

// Додаємо guitarist до band за допомогою addMember

/*
 * Створення vocalist екземпляра класу Vocalist
 * -------------------------------------
 * | Властивість |  Значення          |
 * |-------------|------------------|
 * | name        | "Freddie Mercury" |
 * | band        | "Queen"           |
 */

/*
 * Створення songwriter екземпляра класу SongWriter
 * -------------------------------------
 * | Властивість |  Значення          |
 * |-------------|------------------|
 * | songs       | ["Yesterday","Hey Jude","Let It Be",]|
 */

// Створення performance екземпляра класу Performance
/*
 * ------------------------------------------------------
 * | Властивість |       Значення                       |
 * |-------------|--------------------------------------|
 * | band        | band                                 |
 * | location    | "Liverpool"                          |
 * | date        | new Date('2023-08-01')               |
 */

// використання Object.assign() для успадкування властивостей songwriter для LeadSinger.prototype

/*
 * Створення concert екземпляра класу Concert
 * ---------------------------------------------------
 * | Властивість |  Значення        |
 * |-------------|------------------|
 * | band        | band             |
 * | location    | "BBC studios"    |
 * | date        | new Date("1994-07-06") |
 * | ticketPrice | 100              |
 */

/*
 * Створення leadsinger екземпляра класу LeadSinger
 * -------------------------------------
 * | Властивість |  Значення         |
 * |-------------|------------------|
 * | name        | "Mick Jagger"    |
 * | band        | "The Rolling Stones" |
 * | songs       | ["Yesterday","Hey Jude","Let It Be",]|
 */

// Створення musician екземпляра класу Musician
const musician = new Musician("John", "Guitarist");

// Створення guitarist екземпляра класу Guitarist
const guitarist = new Guitarist("Jimmy Page", "гітара", "Led Zeppelin");

// Створення bassist екземпляра класу Bassist
const bassist = new Bassist("Paul McCartney", "бас-гітара", "The Beatles");

// Створення band екземпляра класу Band
const band = new Band("The Beatles", [bassist]);

// Додаємо guitarist до band за допомогою addMember
band.addMember(guitarist);

// Створення vocalist екземпляра класу Vocalist
const vocalist = new Vocalist("Freddie Mercury", "Queen");

// Створення songwriter екземпляра класу SongWriter
const songwriter = new SongWriter(["Yesterday", "Hey Jude", "Let It Be"]);

// Створення performance екземпляра класу Performance
const performance = new Performance(band, "Liverpool", new Date('2023-08-01'));

// Використання Object.assign() для успадкування властивостей songwriter для LeadSinger.prototype
Object.assign(LeadSinger.prototype, songwriter);

// Створення concert екземпляра класу Concert
const concert = new Concert(band, "BBC studios", new Date("1994-07-06"), 100);

// Створення leadsinger екземпляра класу LeadSinger
const leadsinger = new LeadSinger("Mick Jagger", "The Rolling Stones", ["Yesterday", "Hey Jude", "Let It Be"]);


// Методи для тестування розкоментувати після виконня всіх завдань
 musician.play();
 guitarist.play();
 bassist.play();
 band.playMusic();
 performance.info();
 concert.info();
 vocalist.info();
 songwriter.info();
 leadsinger.info();
