import React, { Component } from 'react'
import {connect} from 'react-redux'
import {showTarefasDoCliente, postClienteAC, getClientesAC} from '../actionCreators'
import {bindActionCreators} from 'redux'
import PageHeader from './PageHeader'
import ClientesForm from './ClientesForm'

class ClientesTable extends Component {
  renderRows() {
    const list = this.props.clientList || []
    return list.map( c => (
      <tr key={c.id}>
        <td>{c.nome}</td>
        <td>
          <button type='button' className='btn btn-primary'
            onClick={e => this.props.showTarefasDoCliente(c)}>
            <i className='fa fa-chevron-right' />
          </button>
        </td>
      </tr>
    ))
  }

  render() {
    return (
      <div>
        <PageHeader name='Clientes' small='Lista de Clientes' />
        <ClientesForm onSubmit={this.props.postClienteAC}/>
        <table className='table'>
          <thead>
            <tr>
              <th>Nome</th>
              <th>Tarefas</th>
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
  return bindActionCreators({showTarefasDoCliente, postClienteAC, getClientesAC}, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(ClientesTable)