import React from 'react'
import { Field, formValueSelector, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import FormButtons from '../../components/FormButtons'
import FormInput from '../../components/FormInput'
import {getClientesAC} from '../../redux/actionCreators'

let ClientesForm = props => (
  <form onSubmit={props.handleSubmit} >
    <div className='form-row'>
      <Field name='nome' component={FormInput}
        placeholder='Insira o nome' />
      <FormButtons
        hasPost={true}
        onSearch={() => props.onSearch(props.inputString)}
        onClear={props.onClear}/>
    </div>
  </form>
)

ClientesForm = reduxForm({form: 'ClientesForm'})(ClientesForm)

const selector = formValueSelector('ClientesForm')

function mapStateToProps(state) {
  return {inputString: selector(state, 'nome')}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({getClientesAC}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ClientesForm)