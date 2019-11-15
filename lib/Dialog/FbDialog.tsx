import * as React from 'react'
import {Fragment, ReactElement, ReactNode} from 'react'
import ReactDOM from 'react-dom'

import './FbDialog.scss'
import {FbIcon} from '../index'
import {createScopedClass} from '../utils/classes'

interface Props {
  visible: boolean
  children: ReactNode
  title: string
  buttons?: ReactElement[]
  onClose: React.MouseEventHandler
  closeOnClickMask?: boolean
}

const sc = createScopedClass('fb-dialog')

const FbDialog: React.FunctionComponent<Props> = (props) => {
  const onClickClose: React.MouseEventHandler = (e) => {
    props.onClose(e)
  }

  const onClickMask: React.MouseEventHandler = (e) => {
    if (props.closeOnClickMask) {
      props.onClose(e)
    }
  }

  const dialog =
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
          {
            props.buttons && props.buttons.length > 0 &&
            <footer className={sc('footer')}>
              {props.buttons}
            </footer>
          }
        </div>
      </Fragment>
    ) : null

  return ReactDOM.createPortal(dialog, document.body)
}

FbDialog.defaultProps = {
  closeOnClickMask: true
}

export const modal = (title: string, content: string | ReactNode, buttons?: ReactElement[]) => {
  const div = document.createElement('div')
  document.body.append(div)

  const onClose = () => {
    ReactDOM.render(React.cloneElement(component, {visible: false}), div)
    ReactDOM.unmountComponentAtNode(div)
    div.remove()
  }

  const component = (
    <FbDialog
      title={title}
      visible={true}
      onClose={onClose}
      buttons={buttons}
    >
      {content}
    </FbDialog>
  )

  ReactDOM.render(component, div)

  return onClose
}

// Overwrite alert function
export const alert = (title: string, content: string) => {
  const buttons = [<button key="OK" onClick={() => close()}>OK</button>]
  const close = modal(title, content, buttons)
}

// Overwrite confirm function
export const confirm = (title: string, content: string, success: () => void, fail: () => void) => {
  const onConfirm = () => {
    close()
    success && success()
  }
  const onCancel = () => {
    close()
    fail && fail()
  }

  const buttons = [
    <button key="confirm" onClick={onConfirm}>Confirm</button>,
    <button key="cancel" onClick={onCancel}>Cancel</button>,
  ]

  const close = modal(title, content, buttons)
}

export default FbDialog
