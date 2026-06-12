// Завдання 3
// Те саме, що й Завдання 2, але через async/await.
 
// Функції-запити з ключовим словом async
async function getTodo() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  return response.json();
}
 
async function getUser() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
  return response.json();
}
 
// await можна використовувати тільки всередині async-функції,
// тому обгортаємо логіку в окрему функцію main().
async function main() {
  try {
    const allResult = await Promise.all([getTodo(), getUser()]);
    console.log("Promise.all:", allResult);
 
    const raceResult = await Promise.race([getTodo(), getUser()]);
    console.log("Promise.race:", raceResult);
  } catch (error) {
    console.error("Сталася помилка:", error);
  }
}
 
main();