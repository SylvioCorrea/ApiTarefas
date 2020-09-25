import React from 'react'
import {Field, reduxForm, formValueSelector} from 'redux-form'

let BaseForm = props => (
  <form onSubmit={props.handleSubmit} className='mb-2'>
    <div className='form-row'>
      <div className="col-12 col-lg-10">
        <Field name={props.inputName} component='input' 
        className='form-control'
          type='text' placeholder={props.placeholder}/>
      </div>
      <div className='col-12 col-lg-2'>
        <button type='submit' className='btn btn-success mr-1' >
          <i className='fa fa-plus' />
        </button>
        <button type='button' className='btn btn-info mr-1'
          onClick={props.onSearch}>
          <i className='fa fa-search' />
        </button>
        <button type='button' className='btn btn-secondary mr-1' >
          <i className='fa fa-times' />
        </button>
      </div>
    </div>

  </form>
)

BaseForm = reduxForm({form: 'BaseForm'})(BaseForm)
export default BaseForm