export { default as FbIcon } from './Icon/FbIcon'

import * as React from 'react'
import * as ReactDOM from 'react-dom'
import FbIcon from './Icon/FbIcon'
import './index.scss'

const fn: React.MouseEventHandler = (e: React.MouseEvent) => {
  console.log(e.target)
  console.log((e.target as SVGElement).classList)
}

ReactDOM.render(
  <div>
    <FbIcon className={'test-icon'} name="trashcan"/>
    <FbIcon style={{width: '2em', height: '2em'}} name="skin"/>
    <FbIcon name="sport" onMouseEnter={() => console.log(1)} onMouseDown={() => console.log(2)} onClick={fn}/>
    <FbIcon spin={true} name="shakehands" solid={true}/>
  </div>,
  document.getElementById('root')
)
