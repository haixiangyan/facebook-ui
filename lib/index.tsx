import * as React from 'react'
import * as ReactDOM from 'react-dom'
import Icon from './Icon/Icon'

const fn: React.MouseEventHandler = (event: React.MouseEvent) => {
  console.log(event)
}

ReactDOM.render(
  <div>
    <Icon name="trashcan"/>
    <Icon name="skin"/>
    <Icon name="sport" onClick={fn}/>
  </div>,
  document.getElementById('root')
)
