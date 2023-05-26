test('test common matcher', () => {
  expect(2 + 3 ).toBe(5);
  expect(2 + 2).not.toBe(5);
})

test('to be true or false', () => {
  expect(1).toBeTruthy()
  expect(0).toBeFalsy()
})

test('test number', () => {
  expect(1).toBeGreaterThan(0)
  expect(2).toBeLessThan(3)
})

test('test object', () => {
  expect({name: 'viking'}).toEqual({name: 'viking'})
})