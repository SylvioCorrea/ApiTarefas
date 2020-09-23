import React, { Component } from 'react'
import {connect} from 'react-redux'
import {getRelatorioAC} from '../actionCreators'
import {bindActionCreators} from 'redux'
import PageHeader from './PageHeader'

class Relatorio extends Component {
  constructor(props) {
    super(props)
    props.getRelatorioAC()
  }
  
  //O relatorio é um objeto no formato:
  //{listaClientesTarefas: [{ cliente: {...}, tarefas: [{...}] }]
  //Deve-se iterar sobre cada um desses objetos e sobre cada
  //elemento da lista de tarefas dentro desses objetos
  renderRows() {
    const list = this.props.relatorio.listaClientesTarefas || []
    return list.map( ({cliente, tarefas}) => (
      tarefas.map(t => (
        <tr key={`${cliente.id}:${t.id}`}>
          <td>{t.descricao}</td>
          <td>{cliente.nome}</td>
          <td>{t.data_De_Criacao}</td>
        </tr>
      ))
    ))
  }

  render() {
    return (
      <div>
        <PageHeader name='Relatorio' small='Todas as tarefas cadastradas' />
        <table className='table'>
          <thead>
            <tr>
              <th>Descricao</th>
              <th>Cliente</th>
              <th>Criado Em</th>
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
  return {relatorio: state.appState.relatorio}
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({getRelatorioAC}, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Relatorio)