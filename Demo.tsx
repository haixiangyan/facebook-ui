import * as React from 'react'

interface Props {
  code: string
}

const demo: React.FunctionComponent<Props> = (props) => {
  return (
    <div>
      {props.children}
      <pre>
        {props.code}
      </pre>
    </div>
  )
}

export default demo
