import * as React from 'react'
import * as renderer from 'react-test-renderer'
import {mount, shallow} from 'enzyme'
import FbIcon from '../FbIcon'

describe('FbIcon', () => {
  it('should render', () => {
    const json = renderer.create(<FbIcon name="video"/>).toJSON()
    expect(json).toMatchSnapshot()
  })
  it('should handle event', () => {
    const handler = jest.fn()
    const component = mount(<FbIcon name="video" onClick={handler}/>)
    component.find('svg').simulate('click')
    expect(handler).toBeCalled()
  })
  it('should receive props solid', () => {
    const solidComponent = shallow(<FbIcon name="shakehands" solid={true}/>)
    const notSolidComponent = shallow(<FbIcon name="shakehands" solid={false}/>)
    expect(solidComponent.find('use').prop('xlinkHref')).toEqual('#icon_shakehands_fill')
    expect(notSolidComponent.find('use').prop('xlinkHref')).toEqual('#icon_shakehands')
  })
  it('should receive props spin', () => {
    const spinComponent = shallow(<FbIcon name="video" spin={true}/>)
    const notSpinComponent = shallow(<FbIcon name="video" spin={false}/>)
    expect(spinComponent.hasClass('fb-icon-spin')).toEqual(true)
    expect(notSpinComponent.hasClass('fb-icon-spin')).toEqual(false)
  })
})
