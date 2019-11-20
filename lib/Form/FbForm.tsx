import * as React from 'react'
import {ReactFragment} from 'react'
import {Errors} from './Validator'
import FbInput from '../Input/FbInput'
import {classes} from '../utils/classes'

import './FbForm.scss'

interface Fields {
  name: string
  label: string
  input: { type: string }
}

export interface Values {
  [K: string]: any
}

interface Props {
  values: Values
  fields: Fields[]
  buttons: ReactFragment
  onSubmit: React.FormEventHandler<HTMLFormElement>
  onChange: (values: Values) => void
  errors: Errors
}

const FbForm: React.FunctionComponent<Props> = (props) => {
  const values = props.values
  const onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    props.onSubmit(e)
  }
  const onInputChange = (name: string, value: string) => {
    const newFormValues = {...values, [name]: value}
    props.onChange(newFormValues)
  }
  return (
    <form onSubmit={onSubmit}>
      <table>
        <tbody>
          {props.fields.map(field =>
            (
              <tr key={field.name} className={classes('fb-form-tr')}>
                <td className="fb-form-td">
                  <span>{field.label}</span>
                </td>
                <td className="fb-form-td">
                  <FbInput
                    className="fb-form-input"
                    name={field.name}
                    type={field.input.type}
                    value={values[field.name]}
                    onChange={(e) => onInputChange(field.name, e.target.value)}
                  />
                  <div>{props.errors[field.name]}</div>
                </td>
              </tr>
            )
          )}
          <tr className="fb-form-tr">
            <td className="fb-form-td"/>
            <td className="fb-form-td">{props.buttons}</td>
          </tr>
        </tbody>
      </table>
    </form>
  )
}

export default FbForm
