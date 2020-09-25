import React from 'react'
import { Field, formValueSelector, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import FormButtons from './FormButtons'
import FormInput from './FormInput'
import {getClientesAC} from '../actionCreators'

let ClientesForm = props => (
  <form onSubmit={props.handleSubmit} className='mb-2'>
    <div className='form-row'>
      <Field name='nome' component={FormInput}
        placeholder='Insira o nome' />
      <FormButtons />
    </div>
  </form>
)

ClientesForm = reduxForm({form: 'ClientesForm'})(ClientesForm)

//const selector = formValueSelector('ClientesForm')

// function mapStateToProps(state) {
//   return {inputString: selector(state, 'nome')}
// }

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({getClientesAC}, dispatch)
// }

export default ClientesForm