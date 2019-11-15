import * as React from 'react'
import {createScopedClass} from '../utils/classes'

const sc = createScopedClass('fb-layout')

const FbHeader: React.FunctionComponent = () => {
  return (
    <div className={sc('header')}>Header</div>
  )
}

export default FbHeader
