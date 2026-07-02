function expectSchema(obj, schema) {
  Object.entries(schema).forEach(([key, expectedType]) => {
    expect(obj).toHaveProperty(key);
    expect(typeof obj[key]).toBe(expectedType);
  });
}

module.exports = { expectSchema };