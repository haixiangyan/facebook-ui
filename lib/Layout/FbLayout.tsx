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
  const hasSider = children.length &&
    children.some(node => node.type === FbSider)

  return (
    <div className={sc('', { extra: [className, hasSider && 'has-sider'].join(' ') })} {...restProps}>
      {props.children}
    </div>
  )
}

export default FbLayout
