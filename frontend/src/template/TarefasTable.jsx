import React, { Component } from 'react'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'

import PageHeader from './PageHeader'
import {
  initClientes,
  postTarefaDoClienteAC,
  getTarefasDoClienteAC,
  clearTarefasForm
} from '../actionCreators'
import TarefasForm from './TarefasForm'

class TarefasTable extends Component {
  
  renderRows() {
    return this.props.tarefasDoCliente.map(t => (
      <tr key={t.id}>
        <td>{t.descricao}</td>
        <td>{t.dataDeCriacao}</td>
      </tr>
    ))
  }

  onSubmit = tarefa => {
    tarefa.idCliente = this.props.cliente.id
    this.props.postTarefaDoClienteAC(tarefa)
  }

  render() {
    return (
      <div>
        <h4 className='pointer' onClick={this.props.initClientes}>
          <i className='fa fa-chevron-left'/> Voltar
        </h4>
        <PageHeader name='Tarefas' small='Tarefas do Cliente' />
        <h1><i className='fa fa-user'></i> {this.props.cliente.nome}</h1>
        <TarefasForm onSubmit={this.props.postTarefaDoClienteAC} 
          onSearch={this.props.getTarefasDoClienteAC}
          onClear={this.props.clearTarefasForm}/>
        <table className='table'>
          <thead>
            <tr>
              <th>Descrição</th>
              <th>Data De Criação</th>
            </tr>
          </thead>
          <tbody>
            {this.renderRows()}
          </tbody>
        </table>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    tarefasDoCliente: state.appState.tarefasDoCliente,
    cliente: state.appState.selectedCliente
  }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    initClientes,
    postTarefaDoClienteAC,
    getTarefasDoClienteAC,
    clearTarefasForm
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TarefasTable)