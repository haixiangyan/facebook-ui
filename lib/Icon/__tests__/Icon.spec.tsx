import * as React from 'react'
import * as renderer from 'react-test-renderer'
import { mount } from 'enzyme'
import Icon from '../Icon'

describe('Icon', () => {
  it('can render', () => {
    const json = renderer.create(<Icon name="video"/>).toJSON()
    expect(json).toMatchSnapshot()
  })
  it('can handle event', () => {
    const handler = jest.fn()
    const component = mount(<Icon name="video" onClick={handler}/>)
    component.find('svg').simulate('click')
    expect(handler).toBeCalled()
  })
})
