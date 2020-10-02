import React, { Component } from 'react'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'

import MenuNavBar from '../../components/MenuNavbar'
import PageHeader from '../../components/PageHeader'
import {
  getClienteAC,
  postTarefaDoClienteAC,
  getTarefasDoClienteAC,
  clearTarefasForm,
  deleteTarefaAC
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
        <td>
          <button type='button' className='btn btn-danger'
            onClick={e => this.props.deleteTarefaAC(t.id, t.idCliente)}>
            <i className='fa fa-trash'/>
          </button>
        </td>
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
              <th className='action_column'>Ações</th>
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
    cliente: state.tarefas.cliente,
    tarefasDoCliente: state.tarefas.tarefasDoCliente
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getClienteAC,
    postTarefaDoClienteAC,
    getTarefasDoClienteAC,
    clearTarefasForm,
    deleteTarefaAC
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Tarefas)