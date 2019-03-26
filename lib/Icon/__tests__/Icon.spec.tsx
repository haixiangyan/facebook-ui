import * as React from 'react'
import * as renderer from 'react-test-renderer'
import Icon from '../Icon'

describe('Icon', () => {
    it('exists', () => {
        const json = renderer.create(<Icon name="trashcan"/>).toJSON()
        expect(json).toMatchSnapshot()
    })
})