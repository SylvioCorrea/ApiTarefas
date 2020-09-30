import React from 'react'
import { Field, formValueSelector, reduxForm } from 'redux-form'
import { connect } from 'react-redux'

import FormButtons from '../../components/FormButtons'
import FormInput from '../../components/FormInput'

let TarefasForm = props => (
  <form onSubmit={props.handleSubmit} >
    <div className='form-row'>
      <Field name='descricao' component={FormInput}
        placeholder='Insira a tarefa' />
      <FormButtons
        hasPost={true}
        onSearch={() => props.onSearch(props.cliente.id)}
        onClear={() => props.onClear(props.cliente.id)}/>
    </div>
  </form>
)

TarefasForm = reduxForm({form: 'TarefasForm'})(TarefasForm)

const selector = formValueSelector('TarefasForm')

function mapStateToProps(state) {
  return {
    inputString: selector(state, 'descricao'),
    cliente: state.tarefas.cliente
  }
}

export default connect(mapStateToProps)(TarefasForm)