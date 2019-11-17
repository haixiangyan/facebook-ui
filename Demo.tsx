import * as React from 'react'
import Highlight, {defaultProps} from 'prism-react-renderer'
import {useState} from 'react'

interface Props {
  code: string
}

const Demo: React.FunctionComponent<Props> = (props) => {
  const [visible, setVisible] = useState(false)
  const codes = (
    <Highlight {...defaultProps} code={props.code.trim()} language="jsx">
      {({className, style, tokens, getLineProps, getTokenProps}) => (
        <pre className={className} style={style}>
          {
            tokens.map((line, i) => (
              <div {...getLineProps({line, key: i})}>
                {line.map((token, key) => (
                  <span {...getTokenProps({token, key})}/>
                ))}
              </div>
            ))
          }
          </pre>
      )}
    </Highlight>
  )

  return (
    <div>
      <div className="demo">
        {props.children}
      </div>
      <div>
        <button onClick={() => setVisible(!visible)}>Show Codes</button>
        {visible && codes}
      </div>
    </div>
  )
}

export default Demo
