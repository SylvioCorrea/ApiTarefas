import React, { Component } from 'react'
import {connect} from 'react-redux'
import PageHeader from './PageHeader'
import {initClientes} from '../actionCreators'
import { bindActionCreators } from 'redux'


class TarefasTable extends Component {
  
  renderRows() {
    return this.props.tarefasDoCliente.map(t => (
      <tr key={t.id}>
        <td>{t.descricao}</td>
        <td>{t.dataDeCriacao}</td>
      </tr>
    ))
  }

  render() {
    return (
      <div>
        <h4 className='pointer' onClick={this.props.initClientes}>
          <i className='fa fa-chevron-left'/> Voltar
        </h4>
        <PageHeader name='Tarefas' small='Tarefas do Cliente' />
        <h1><i className='fa fa-user'></i> {this.props.cliente.nome}</h1>
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
  console.log(state)
  return {
    tarefasDoCliente: state.appState.tarefasDoCliente,
    cliente: state.appState.selectedCliente
  }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({initClientes}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TarefasTable)