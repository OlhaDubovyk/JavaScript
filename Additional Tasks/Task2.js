// Завдання 2: Аналіз оцінок студента
 
const analyzeGrades = (grades) => {
    const sum = grades.reduce((total, grade) => total + grade, 0);
    const average = sum / grades.length;
 
    if (average < 3) return "Failed";
    if (average > 4) return "Excellent";
    return "Passed";
};
 
console.log(analyzeGrades([1, 2, 1, 2]));       // Failed
console.log(analyzeGrades([3, 4, 3, 4]));       // Passed
console.log(analyzeGrades([5, 5, 4, 5]));       // Excellent