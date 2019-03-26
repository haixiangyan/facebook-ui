import * as React from 'react'
import * as renderer from 'react-test-renderer'
import {mount, shallow} from 'enzyme'
import Icon from '../Icon'

describe('FbIcon', () => {
  it('should render', () => {
    const json = renderer.create(<Icon name="video"/>).toJSON()
    expect(json).toMatchSnapshot()
  })
  it('should handle event', () => {
    const handler = jest.fn()
    const component = mount(<Icon name="video" onClick={handler}/>)
    component.find('svg').simulate('click')
    expect(handler).toBeCalled()
  })
  it('should receive props solid', () => {
    const solidComponent = shallow(<Icon name="shakehands" solid={true}/>)
    const notSolidComponent = shallow(<Icon name="shakehands" solid={false}/>)
    expect(solidComponent.find('use').prop('xlinkHref')).toEqual('#icon_shakehands_fill')
    expect(notSolidComponent.find('use').prop('xlinkHref')).toEqual('#icon_shakehands')
  })
  it('should receive props spin', () => {
    const spinComponent = shallow(<Icon name="video" spin={true}/>)
    const notSpinComponent = shallow(<Icon name="video" spin={false}/>)
    expect(spinComponent.hasClass('fb-icon-spin')).toEqual(true)
    expect(notSpinComponent.hasClass('fb-icon-spin')).toEqual(false)
  })
})
