import React, { Component } from 'react'
import {connect} from 'react-redux'
import {getRelatorioAC, clearRelatorioForm} from '../../redux/actionCreators'
import {bindActionCreators} from 'redux'

import PageHeader from '../templates/PageHeader'
import RelatorioForm from './RelatorioForm'
import {convertDate} from '../../utils'

class Relatorio extends Component {
  constructor(props) {
    super(props)
    props.getRelatorioAC()
  }

  renderRows() {
    const list = this.props.relatorio || []
    return list.map( ({cliente, tarefa}) => (
      <tr key={tarefa.id}>
        <td>{tarefa.descricao}</td>
        <td>{cliente.nome}</td>
        <td>{convertDate(tarefa.dataDeCriacao)}</td>
      </tr>
      ))
  }

  render() {
    return (
      <div>
        <PageHeader name='Relatorio' small='Todas as tarefas cadastradas' />
        <RelatorioForm
          hasSubmit={false}
          onSubmit={this.props.getRelatorioAC}
          onClear={this.props.clearRelatorioForm}/>
        <table className='table'>
          <thead>
            <tr>
              <th>Descricao</th>
              <th>Cliente</th>
              <th>Criado Em</th>
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
  return {relatorio: state.appState.relatorio}
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({getRelatorioAC, clearRelatorioForm}, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Relatorio)