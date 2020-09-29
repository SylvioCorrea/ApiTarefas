import React, { Component } from 'react'
import {connect} from 'react-redux'
import {postClienteAC, getClientesAC, initClientes} from '../../redux/actionCreators'
import {bindActionCreators} from 'redux'
import {Link} from 'react-router-dom'
import PageHeader from '../templates/PageHeader'
import ClientesForm from './ClientesForm'
import MenuNavBar from '../templates/MenuNavbar'

class ClientesTable extends Component {
  constructor(props) {
    super(props)
    props.getClientesAC()
  }
  
  renderRows() {
    const list = this.props.clientList || []
    return list.map( c => (
      <tr key={c.id}>
        <td>{c.nome}</td>
        <td>
          <Link to={`/clientes/${c.id}`}>
            <button type='button' className='btn btn-primary'>
              <i className='fa fa-chevron-right' />
            </button>
          </Link>
        </td>
      </tr>
    ))
  }

  render() {
    return (
      <div>
        <MenuNavBar />
        <PageHeader name='Clientes' small='Lista de Clientes' />
        <ClientesForm onSubmit={this.props.postClienteAC}
          onSearch={this.props.getClientesAC}
          onClear={this.props.initClientes}/>
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
  return bindActionCreators({postClienteAC, getClientesAC, initClientes}, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(ClientesTable)