import * as React from 'react'
import {Fragment, ReactNode} from 'react'

import './FbDialog.scss'
import {FbIcon} from '../index'

interface Props {
  visible: boolean
  children: ReactNode
}

const FbDialog: React.FunctionComponent<Props> = (props) => {
  return (
    props.visible ?
      <Fragment>
        <div className="fb-dialog-mask"/>
        <div className="fb-dialog">
          <div className="fb-dialog-close">
            <FbIcon name={'delete'}/>
          </div>
          <header className="fb-dialog-header">Confirm</header>
          <main className="fb-dialog-main">{props.children}</main>
          <footer className="fb-dialog-footer">
            <button>OK</button>
            <button>Cancel</button>
          </footer>
        </div>
      </Fragment>
      :
      null
  )
}

export default FbDialog