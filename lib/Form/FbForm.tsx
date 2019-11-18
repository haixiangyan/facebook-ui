import * as React from 'react'
import {ReactFragment} from 'react'

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
      {props.fields.map(field =>
        (
          <div key={field.name}>
            {field.label}
            <input
              name={field.name}
              type={field.input.type}
              value={values[field.name]}
              onChange={(e) => onInputChange(field.name, e.target.value)}
            />
          </div>
        )
      )}
      <div>
        {props.buttons}
      </div>
    </form>
  )
}

export default FbForm
