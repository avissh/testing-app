import React from 'react'
import { Field, reduxForm } from 'redux-form'


//User Input Validation Schema 

const required = value => (value || typeof value === 'number' ? undefined : 'Required')

const maxLength = max => value =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined

const maxLength15 = maxLength(15)

export const minLength = min => value =>
  value && value.length < min ? `Must be ${min} characters or more` : undefined

export const minLength2 = minLength(2)

const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email address'
    : undefined

const aol = value =>
  value && /.+@aol\.com/.test(value)
    ? 'Really? You still use AOL for your email?'
    : undefined

const alphaNumeric = value =>
  value && /[^a-zA-Z0-9 ]/i.test(value)
    ? 'Only alphanumeric characters'
    : undefined

//Managing and Wrapping Errors

const renderField = ({
  input,
  label,
  type,
  meta: { touched, error, warning }
}) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} />
      {touched &&
        ((error && <span>{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </div>
  </div>
)

const FieldLevelValidationForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (
    <form onSubmit={handleSubmit}>
      <Field
        name="username"
        type="text"
        component={renderField}
        label="Name"
        validate={[required, maxLength15, minLength2]}
        warn={alphaNumeric}
      />
      <Field
        name="email"
        type="email"
        component={renderField}
        label="Email"
        validate={email}
        warn={aol}
      />
       <Field
        name="subject"
        type="text"
        component={renderField}
        label="Subject"
        validate={[required, minLength2]}
        warn={aol}
      />
      <Field
        name="message"
        type="textarea"
        component={renderField}
        label="Message"
        validate={[required, minLength2]}
        warn={aol}
      />


    
      <div>
        <button type="submit" disabled={submitting}>
          Submit
        </button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'fieldLevelValidation'
})(FieldLevelValidationForm)
