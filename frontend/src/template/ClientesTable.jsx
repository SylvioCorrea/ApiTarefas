import React, { Component } from 'react'
import {connect} from 'react-redux'
import {showTarefasDoCliente} from '../actionCreators'
import {bindActionCreators} from 'redux'
import PageHeader from './PageHeader'

class ClientesTable extends Component {
  renderRows() {
    const list = this.props.clientList || []
    return list.map( c => (
      <tr key={c.id}>
        <td>{c.nome}</td>
        <td>
          <button type='button' className='btn btn-primary'
            onClick={e => this.props.showTarefasDoCliente(c)}>
            tarefas do cliente
          </button>
        </td>
      </tr>
    ))
  }

  render() {
    return (
      <div>
        <PageHeader name='Clientes' small='Lista de Clientes' />
        <table className='table'>
          <thead>
            <tr>
              <th>Nome</th>
              <th className='action-column'>Ações</th>
            </tr>
          </thead>
          <tbody>
            {this.renderRows(this.props.clientList)}
          </tbody>
        </table>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {clientList: state.appState.clientes}
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({showTarefasDoCliente}, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(ClientesTable)