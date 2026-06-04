// Завдання 3: Vacation Rental Car
// $40 за день
// 7+ днів → знижка $50 з загальної суми
// 3+ днів → знижка $20 з загальної суми
 
function rentalCarCost(d) {
    let total = d * 40;
 
    if (d >= 7) {
        total -= 50;
    } else if (d >= 3) {
        total -= 20;
    }
 
    const result = total;
    return result;
}
 
// Перевірки
console.log(rentalCarCost(1));
console.log(rentalCarCost(3));
console.log(rentalCarCost(7));
console.log(rentalCarCost(10));