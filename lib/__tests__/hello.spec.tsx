function add(a: number, b: number): number {
  return a + b
}
describe('First test', () => {
  test('add(1, 2) to 3', () => {
    expect(add(1, 2)).toEqual(3)
  })
})
