import * as React from 'react'
import FbButton from './FbButton'
const FbButtonExample: React.FunctionComponent = () => {
  return (
    <div>
      <FbButton type="solid">Solid</FbButton>
      <FbButton type="info">Info</FbButton>
      <FbButton type="danger">Danger</FbButton>
    </div>
  )
}

export default FbButtonExample
