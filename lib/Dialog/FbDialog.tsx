import * as React from 'react'
import {Fragment, ReactElement, ReactNode} from 'react'

import './FbDialog.scss'
import {FbIcon} from '../index'
import {createScopedClass} from '../utils/classes'

interface Props {
  visible: boolean
  children: ReactNode
  title: string
  buttons: ReactElement[]
  onClose: React.MouseEventHandler
  closeOnClickMask?: boolean
}

const scopedClass = createScopedClass('fb-dialog')
const sc = scopedClass

const FbDialog: React.FunctionComponent<Props> = (props) => {
  const onClickClose: React.MouseEventHandler = (e) => {
    props.onClose(e)
  }

  const onClickMask: React.MouseEventHandler = (e) => {
    if (props.closeOnClickMask) {
      props.onClose(e)
    }
  }

  return (
    props.visible ? (
        <Fragment>
          <div className={sc('mask')} onClick={onClickMask}/>

          <div className={sc()}>
            <div className={sc('close')} onClick={onClickClose}>
              <FbIcon name={'close'}/>
            </div>

            <header className={sc('header')}>{props.title}</header>
            <main className={sc('main')}>
              {props.children}
            </main>
            <footer className={sc('footer')}>
              {props.buttons}
            </footer>
          </div>
        </Fragment>
      ) : null
  )
}

FbDialog.defaultProps = {
  closeOnClickMask: false
}

export default FbDialog
