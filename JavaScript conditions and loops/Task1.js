// Середня оцінка студента (від 0 до 100)
const averageGrade = 85;
 
// Визначаємо рівень успішності за допомогою if/else
if (averageGrade < 60) {
  // Оцінка нижче 60 — незадовільно
  const result = "Unsatisfactory";
  console.log(result);
} else if (averageGrade <= 70) {
  // Оцінка від 60 до 70 включно — задовільно
  const result = "Satisfactory";
  console.log(result);
} else if (averageGrade <= 80) {
  // Оцінка від 71 до 80 включно — добре
  const result = "Good";
  console.log(result);
} else if (averageGrade <= 90) {
  // Оцінка від 81 до 90 включно — дуже добре
  const result = "Very Good";
  console.log(result);
} else {
  // Оцінка від 91 до 100 включно — відмінно
  const result = "Excellent";
  console.log(result);
}