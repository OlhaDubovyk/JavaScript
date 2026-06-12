 // Завдання 4
// Два класи, методи яких реалізують функції запити з Завдання 3.
 
class TodoService {
  async getTodo() {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    return response.json();
  }
}
 
class UserService {
  async getUser() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
    return response.json();
  }
}
 
async function main() {
  // Створюємо екземпляри класів
  const todoService = new TodoService();
  const userService = new UserService();
 
  try {
    const allResult = await Promise.all([
      todoService.getTodo(),
      userService.getUser(),
    ]);
    console.log("Promise.all:", allResult);
 
    const raceResult = await Promise.race([
      todoService.getTodo(),
      userService.getUser(),
    ]);
    console.log("Promise.race:", raceResult);
  } catch (error) {
    console.error("Сталася помилка:", error);
  }
}
 
main();