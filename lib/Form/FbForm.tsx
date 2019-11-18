import * as React from 'react'
import {ReactFragment} from 'react'

interface Field {
  name: string
  label: string
  input: { type: string }
}

interface Props {
  value: { [K: string]: any }
  fields: Field[]
  buttons: ReactFragment
  onSubmit: React.FormEventHandler
}

const FbForm: React.FunctionComponent<Props> = (props) => {
  return (
    <form>
      {props.fields.map(field =>
        (
          <div key={field.name}>
            {field.label}
            <input name={field.name} type={field.input.type}/>
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
