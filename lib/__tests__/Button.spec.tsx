import * as React from 'react'
import * as renderer from 'react-test-renderer'
import Button from '../Button/Button'

describe('Button', () => {
  it('should be a div', () => {
    const json = renderer.create(<Button/>).toJSON()
    expect(json).toMatchSnapshot()
  })
})