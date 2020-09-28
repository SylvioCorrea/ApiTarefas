import React from 'react'
import { Field, formValueSelector, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import FormButtons from '../templates/FormButtons'
import FormInput from '../templates/FormInput'
import {showTarefasDoCliente} from '../../redux/actionCreators'

let TarefasForm = props => (
  <form onSubmit={props.handleSubmit} >
    <div className='form-row'>
      <Field name='descricao' component={FormInput}
        placeholder='Insira a tarefa' />
      <FormButtons
        hasPost={true}
        onSearch={() => props.onSearch(props.cliente, props.inputString)}
        onClear={() => props.onClear(props.cliente)}/>
    </div>
  </form>
)

TarefasForm = reduxForm({form: 'TarefasForm'})(TarefasForm)

const selector = formValueSelector('TarefasForm')

function mapStateToProps(state) {
  return {
    inputString: selector(state, 'descricao'),
    cliente: state.appState.selectedCliente
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({showTarefasDoCliente}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TarefasForm)