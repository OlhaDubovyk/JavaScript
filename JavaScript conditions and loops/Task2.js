// Середня оцінка студента (від 0 до 100)
const averageGrade = 85;
 
// Визначаємо рівень успішності за допомогою switch/case
// switch(true) дозволяє використовувати діапазони у кожному case
switch (true) {
  case averageGrade < 60:
    // Оцінка нижче 60 — незадовільно
    const result1 = "Unsatisfactory";
    console.log(result1);
    break;
  case averageGrade <= 70:
    // Оцінка від 60 до 70 включно — задовільно
    const result2 = "Satisfactory";
    console.log(result2);
    break;
  case averageGrade <= 80:
    // Оцінка від 71 до 80 включно — добре
    const result3 = "Good";
    console.log(result3);
    break;
  case averageGrade <= 90:
    // Оцінка від 81 до 90 включно — дуже добре
    const result4 = "Very Good";
    console.log(result4);
    break;
  default:
    // Оцінка від 91 до 100 включно — відмінно
    const result5 = "Excellent";
    console.log(result5);
}