import classes from '../classes'

describe('classes function', () => {
  it('accepts no parameter', () => {
    const results = classes()
    expect(results).toEqual('')
  })
  it('can combine one class name', () => {
    const results = classes('foo')
    expect(results).toEqual('foo')
  })
  it('can combine class names', () => {
    const results = classes('foo', 'bar')
    expect(results).toEqual('foo bar')
  })
  it('can pass undefined', () => {
    const results = classes('foo', undefined)
    expect(results).toEqual('foo')
  })
})