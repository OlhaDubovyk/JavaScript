// Завдання 4: Аналіз результатів тестів
 
const testResults = [
    { name: "Login test", passed: true },
    { name: "Checkout test", passed: false },
    { name: "Profile test", passed: true },
];
 
const analyzeTests = (testResults) => {
    const passed = testResults.filter(({ passed }) => passed).length;
    const failed = testResults.length - passed;
    const status = failed > 0 ? "Build failed" : "Build passed";
 
    return { passed, failed, status };
};
 
console.log(analyzeTests(testResults));
console.log(analyzeTests([{ name: "Smoke test", passed: true }]));