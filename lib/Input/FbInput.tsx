import * as React from 'react'
import {InputHTMLAttributes} from 'react'
import {classes} from '../utils/classes'

import './FbInput.scss'

interface Props extends InputHTMLAttributes<HTMLInputElement> {

}

const FbInput: React.FunctionComponent<Props> = (props) => {
  const {className, ...restProps} = props
  return (
    <input className={classes('fb-input')} {...restProps}/>
  )
}

export default FbInput
