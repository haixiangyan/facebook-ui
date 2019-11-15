import * as React from 'react'
import {createScopedClass} from '../utils/classes'

const sc = createScopedClass('fb-layout')

const Layout: React.FunctionComponent = (props) => {
  return (
    <div className={sc()}>
      {props.children}
    </div>
  )
}

export default Layout
