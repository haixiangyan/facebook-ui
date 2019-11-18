import {Values} from './FbForm'

type Rules = Rule[]

interface Rule {
  name: string
  required?: boolean
  minLength?: number
  maxLength?: number
  pattern?: RegExp
}

export interface Errors {
  [K: string]: string[]
}

const isEmpty = (value: any) => {
  return value === undefined || value === null || value === '';
}

const Validator = (values: Values, rules: Rules): Errors => {
  const errors: any = {}

  const addError = (name: string, message: string) => {
    if (errors[name] === undefined) {
      errors[name] = []
    }
    errors[name].push(message)
  }

  rules.map(rule => {
    const value = values[rule.name]
    if (rule.required && isEmpty(value)) {
      addError(rule.name, 'Field required')
    }
    if (rule.minLength && !isEmpty(value) && value.length < rule.minLength) {
      addError(rule.name, 'Value is shorten than minimum length')
    }
    if (rule.maxLength && !isEmpty(value) && value.length > rule.maxLength) {
      addError(rule.name, 'Value is longer than maximum length')
    }
    if (rule.pattern) {
      if (!rule.pattern.test(value)) {
        addError(rule.name, 'Pattern is not matched')
      }
    }
  })

  return errors
}

export default Validator
