import React from 'react'
import { Field, reduxForm } from 'redux-form'

import FormButtons from '../../components/FormButtons'
import FormInput from '../../components/FormInput'

let RelatorioForm = props => (
  <form onSubmit={props.handleSubmit} >
    <div className='form-row'>
      <Field name='searchString' component={FormInput}
        placeholder='Busque por descrição de tarefa ou nome de usuário' />
      <FormButtons
        hasPost={false}
        onSubmit={() => props.onSearch(props.inputString)}
        onClear={props.onClear}/>
    </div>
  </form>
)

RelatorioForm = reduxForm({form: 'RelatorioForm'})(RelatorioForm)

export default RelatorioForm