// Завдання 2
// Обробка результатів промісу через then() та catch().
 
// 1. Функція повертає Promise з об'єктом todo
function getTodo() {
  return fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => response.json());
}
 
// 2. Функція повертає Promise з об'єктом user
function getUser() {
  return fetch("https://jsonplaceholder.typicode.com/users/1")
    .then((response) => response.json());
}
 
// 3. Promise.all та Promise.race
let allResult;
let raceResult;
 
// Promise.all чекає, поки виконаються ОБИДВА проміси,
// і повертає масив з обома результатами [todo, user].
Promise.all([getTodo(), getUser()])
  .then((results) => {
    allResult = results;
    console.log("Promise.all:", allResult);
  })
  .catch((error) => {
    console.error("Помилка в Promise.all:", error);
  });
 
// Promise.race повертає результат того промісу,
// який виконається ПЕРШИМ.
Promise.race([getTodo(), getUser()])
  .then((result) => {
    raceResult = result;
    console.log("Promise.race:", raceResult);
  })
  .catch((error) => {
    console.error("Помилка в Promise.race:", error);
  });