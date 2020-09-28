import React, { Component } from 'react'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'

import MenuNavBar from '../templates/MenuNavbar'
import PageHeader from '../templates/PageHeader'
import {
  getClientesAC,
  getTarefasDoClienteAC,
  postTarefaDoClienteAC,
  clearTarefasForm
} from '../../redux/actionCreators'
import TarefasForm from './TarefasForm'
import {convertDate} from '../../utils'
import { getCliente } from '../../services/repository'
import { Link } from 'react-router-dom'

class Tarefas extends Component {
  constructor(props) {
    super(props)
    console.log(props.match.params.id)
  }


  renderRows() {
    return this.props.tarefasDoCliente.map(t => (
      <tr key={t.id}>
        <td>{t.descricao}</td>
        <td>{convertDate(t.dataDeCriacao)}</td>
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
        <MenuNavBar />
        <Link to='/clientes' >
          <h4 className='pointer'>
            <i className='fa fa-chevron-left'/> Voltar
          </h4>
        </Link>
        <PageHeader name='Tarefas' small='Tarefas do Cliente' />
        
      </div>
    )
  }
}

export default Tarefas