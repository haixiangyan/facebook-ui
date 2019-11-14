import * as React from 'react'
import {Fragment, ReactElement, ReactFragment, ReactNode} from 'react'
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
          <footer className={sc('footer')}>
            {props.buttons}
          </footer>
        </div>
      </Fragment>
    ) : null

  return ReactDOM.createPortal(dialog, document.body)
}

FbDialog.defaultProps = {
  closeOnClickMask: true
}

// Alert to create a new dialog
export const alert = (title: string, content: string) => {
  const div = document.createElement('div')
  document.body.append(div)

  const component = (
      <FbDialog title={title} visible={true} onClose={() => {
        ReactDOM.render(React.cloneElement(component, {visible: false}), div)
        ReactDOM.unmountComponentAtNode(div)
        div.remove()
      }}>
        {content}
      </FbDialog>
    )

  ReactDOM.render(component, div)
}

export const confirm = (title: string, content: string, success: () => void, fail: () => void) => {
  const div = document.createElement('div')
  document.body.appendChild(div)

  const onConfirm = () => {
    ReactDOM.render(React.cloneElement(component, {visible: false}), div)
    ReactDOM.unmountComponentAtNode(div)
    div.remove()

    success && success()
  }
  const onCancel = () => {
    ReactDOM.render(React.cloneElement(component, {visible: false}), div)
    ReactDOM.unmountComponentAtNode(div)
    div.remove()

    fail && fail()
  }

  const component = (
    <FbDialog visible={true} title={title} onClose={onCancel} buttons={[
      <button key="confirm" onClick={onConfirm}>Confirm</button>,
      <button key="cancel" onClick={onCancel}>Cancel</button>,
    ]}>
      {content}
    </FbDialog>
  )

  ReactDOM.render(component, div)
}

export const modal = (title: string, content: ReactElement | ReactFragment) => {
  const div = document.createElement('div')
  document.body.appendChild(div)

  const onClose = () => {
    ReactDOM.render(React.cloneElement(component, {visible: false}), div)
    ReactDOM.unmountComponentAtNode(div)
    div.remove()
  }

  const component = (
    <FbDialog visible={true} title={title} onClose={onClose}>
      {content}
    </FbDialog>
  )

  ReactDOM.render(component, div)
}

export default FbDialog
