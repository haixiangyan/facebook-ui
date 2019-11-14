import * as React from 'react'
import {Fragment, ReactNode} from 'react'

import './FbDialog.scss'
import {FbIcon} from '../index'
import {createScopedClass} from '../utils/classes'

interface Props {
  visible: boolean
  children: ReactNode
}

const scopedClass = createScopedClass('fb-dialog')
const sc = scopedClass

const FbDialog: React.FunctionComponent<Props> = (props) => {
  return (
    props.visible ? (
        <Fragment>
          <div className={sc('mask')}/>
          <div className={sc()}>
            <div className={sc('close')}>
              <FbIcon name={'close'}/>
            </div>
            <header className={sc('header')}>Confirm</header>
            <main className={sc('main')}>{props.children}</main>
            <footer className={sc('footer')}>
              <button>OK</button>
              <button>Cancel</button>
            </footer>
          </div>
        </Fragment>
      ) : null
  )
}

export default FbDialog
