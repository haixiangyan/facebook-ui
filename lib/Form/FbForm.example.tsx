import * as React from 'react'
import FbForm, {Values} from './FbForm'
import {useState, Fragment} from 'react'
import Validator from './Validator'

const FbFormExample: React.FunctionComponent = () => {
  const [formData, setFormData] = useState<Values>({
    userName: 'Jack',
    password: '123'
  })
  const [fields] = useState([
    {name: 'userName', label: 'UserName', input: {type: 'text'}},
    {name: 'password', label: 'Password', input: {type: 'password'}},
  ])
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const rules = [
      {name: 'userName', required: true},
      {name: 'userName', minLength: 4, maxLength: 8},
    ]
    const errros = Validator(formData, rules)
    console.log(errros)
  }
  return (
    <div>
      <FbForm values={formData} fields={fields}
              buttons={
                <Fragment>
                  <button type="submit">Submit</button>
                  <button>Back</button>
                </Fragment>
              }
              onChange={newValue => setFormData(newValue)}
              onSubmit={onSubmit}
      />
    </div>
  )
}

export default FbFormExample
