// Завдання 3: Фільтрація замовлень
 
const orders = [
    { id: 1, price: 255, isPaid: true },
    { id: 2, price: 1000, isPaid: false },
    { id: 3, price: 100, isPaid: true },
    { id: 4, price: 550, isPaid: true },
];
 
const analyzeOrders = (orders) => {
    const paidOrders = orders.filter(({ isPaid }) => isPaid);
 
    const paidOrderIds = paidOrders.map(({ id }) => id);
    const totalSum = orders.reduce((sum, { price }) => sum + price, 0);
    const paidSum = paidOrders.reduce((sum, { price }) => sum + price, 0);
 
    return { paidOrderIds, totalSum, paidSum };
};
 
const result = analyzeOrders(orders);
console.log(result);