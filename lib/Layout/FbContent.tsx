import * as React from 'react'
import {createScopedClass} from '../utils/classes'

const sc = createScopedClass('fb-layout')

const FbContent: React.FunctionComponent = () => {
  return (
    <div className={sc('content')}>Content</div>
  )
}

export default FbContent
