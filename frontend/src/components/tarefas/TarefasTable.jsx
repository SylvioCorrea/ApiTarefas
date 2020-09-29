import React, { Component } from 'react'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'

import MenuNavBar from '../templates/MenuNavbar'
import PageHeader from '../templates/PageHeader'
import {
  getClienteAC,
  postTarefaDoClienteAC,
  getTarefasDoClienteAC,
  clearTarefasForm
} from '../../redux/actionCreators'
import TarefasForm from './TarefasForm'
import {convertDate} from '../../utils'
import { Link } from 'react-router-dom'

class Tarefas extends Component {
  constructor(props) {
    super(props)
    const idCliente = props.match.params.id
    props.getClienteAC(idCliente)
    props.getTarefasDoClienteAC(idCliente)
  }


  renderRows() {
    return this.props.tarefasDoCliente.map(t => (
      <tr key={t.id}>
        <td>{t.descricao}</td>
        <td>{convertDate(t.dataDeCriacao)}</td>
      </tr>
    ))
  }

  render() {
    return (
      <div>
        <MenuNavBar />
        
        <Link to='/clientes'className='black-link'>
          <h4 className='pointer mt-2'>
            <i className='fa fa-chevron-left'/> Voltar
          </h4>
        </Link>
        
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
    cliente: state.appState.cliente,
    tarefasDoCliente: state.appState.tarefasDoCliente
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getClienteAC,
    postTarefaDoClienteAC,
    getTarefasDoClienteAC,
    clearTarefasForm
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Tarefas)