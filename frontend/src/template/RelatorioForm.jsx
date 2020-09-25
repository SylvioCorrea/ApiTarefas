import React from 'react'
import { Field, formValueSelector, reduxForm } from 'redux-form'
import { connect } from 'react-redux'

import FormButtons from './FormButtons'
import FormInput from './FormInput'

let RelatorioForm = props => (
  <form onSubmit={props.handleSubmit} className='mb-2'>
    <div className='form-row'>
      <Field name='searchCriteria' component={FormInput}
        placeholder='Busque por descrição de tarefa ou nome de usuário' />
      <FormButtons
        hasSubmit={false}
        onSearch={() => props.onSearch(props.inputString)}
        onClear={props.onClear}/>
    </div>
  </form>
)

RelatorioForm = reduxForm({form: 'RelatorioForm'})(RelatorioForm)

const selector = formValueSelector('RelatorioForm')

function mapStateToProps(state) {
  return {inputString: selector(state, 'searchCriteria')}
}

export default connect(mapStateToProps)(RelatorioForm)