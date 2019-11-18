import * as React from 'react'
import FbForm, {Values} from './FbForm'
import {useState, Fragment} from 'react'
import Validator, {noErrors} from './Validator'

const FbFormExample: React.FunctionComponent = () => {
  const [formData, setFormData] = useState<Values>({
    userName: 'Jack',
    password: '123'
  })
  const [fields] = useState([
    {name: 'userName', label: 'UserName', input: {type: 'text'}},
    {name: 'password', label: 'Password', input: {type: 'password'}},
  ])
  const [errors, setErrors] = useState({})
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const rules = [
      {name: 'userName', required: true},
      {name: 'userName', minLength: 4, maxLength: 8},
      {name: 'userName', pattern: /^[A-Za-z0-9]+$/},
      {name: 'password', required: true},
      {name: 'password', minLength: 4, maxLength: 8},
      {name: 'password', pattern: /^[A-Za-z0-9]+$/},
    ]
    setErrors(Validator(formData, rules))
    if (noErrors(errors)) {
      console.log('No errors')
    }
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
              errors={errors}
              onChange={newValue => setFormData(newValue)}
              onSubmit={onSubmit}
      />
    </div>
  )
}

export default FbFormExample
