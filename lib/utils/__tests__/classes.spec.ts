import {classes, createScopedClass} from '../classes'

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

describe('createScopedClass function', () => {
  it('can create prefix', () => {
    const sc = createScopedClass('fb')
    expect(sc('')).toEqual('fb')
    expect(sc('header')).toEqual('fb-header')
    expect(sc({y: true, z: false})).toEqual('fb-y')
    expect(sc({y: true, z: true})).toEqual('fb-y fb-z')
    expect(sc({y: true, z: true}, {extra:'red'})).toEqual('fb-y fb-z red')
  })
})
