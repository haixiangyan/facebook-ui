import * as React from 'react'
import {ReactElement} from 'react'
import {createScopedClass} from '../utils/classes'
import FbSider from './FbSider'
import './FbLayout.scss'

const sc = createScopedClass('fb-layout')

interface Props extends React.HTMLAttributes<HTMLElement> {
  children: ReactElement | ReactElement[]
}

const FbLayout: React.FunctionComponent<Props> = (props) => {
  const {className, ...restProps} = props
  const children = (props.children as ReactElement[])
  const hasSider = 'length' in children &&
    children.some(node => node.type === FbSider)

  return (
    <div className={sc({'': true, 'has-sider': hasSider}, {extra: className})} {...restProps}>
      {props.children}
    </div>
  )
}

export default FbLayout
export {FbLayout}
export {default as FbHeader} from './FbHeader'
export {default as FbContent} from './FbContent'
export {default as FbFooter} from './FbFooter'
export {default as FbSider} from './FbSider'
