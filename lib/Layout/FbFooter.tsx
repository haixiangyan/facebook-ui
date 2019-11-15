import * as React from 'react'
import {createScopedClass} from '../utils/classes'

const sc = createScopedClass('fb-layout')

const FbFooter: React.FunctionComponent = () => {
  return (
    <div className={sc('footer')}>Footer</div>
  )
}

export default FbFooter
