const { calculateTip, fahrenheitToCelsius, celsiusToFahrenheit } = require('../src/crisnar')

test('Should calculate total with tip', () => {
  const total = calculateTip(10, .3)
  expect(total).toBe(13)
})

test('Should calculate total with default tip', () => {
  const total = calculateTip(10)
  expect(total).toBe(12.5)
})

test('Should convert 32 F to 0 C', () => {
  const celsius = fahrenheitToCelsius(32)
  expect(celsius).toBe(0)
})

test('Should convert 0 C to 32 F', () => {
  const fahrenheit = celsiusToFahrenheit(0)
  expect(fahrenheit).toBe(32)
})

test('Async test demo', (done) => {
  setTimeout(() => {
    expect(1).toBe(2)
    done()
  }, 2000)
})