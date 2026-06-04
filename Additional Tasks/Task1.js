// Завдання 1: Валідація пароля
 
const validatePassword = (password, repeatPassword) => {
    if (password !== repeatPassword) return "Passwords do not match";
    if (password.length < 8) return "Password too short";
    if (!/\d/.test(password)) return "Password must contain a number";
    if (!/[a-zA-Z]/.test(password)) return "Password must contain a letter";
 
    return "Password is valid";
};
 
console.log(validatePassword("abc123", "abc456"));       // Passwords do not match
console.log(validatePassword("abc1", "abc1"));           // Password too short
console.log(validatePassword("abcdefgh", "abcdefgh"));   // Password must contain a number
console.log(validatePassword("12345678", "12345678"));   // Password must contain a letter
console.log(validatePassword("abc12345", "abc12345"));   // Password is valid