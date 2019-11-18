import * as React from 'react'
import FbForm from './FbForm'
import {useState, Fragment} from 'react'

const FbFormExample: React.FunctionComponent = () => {
  const [formData] = useState({
    userName: '',
    password: ''
  })
  const [fields] = useState([
    {name: 'userName', label: 'UserName', input: {type: 'text'}},
    {name: 'password', label: 'Password', input: {type: 'password'}},
  ])
  return (
    <div>
      <FbForm value={formData} fields={fields}
              buttons={
                <Fragment>
                  <button type="submit">Submit</button>
                  <button>Back</button>
                </Fragment>
              }
      />
    </div>
  )
}

export default FbFormExample
