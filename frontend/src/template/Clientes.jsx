import React, {Component} from 'react'
import {bindActionCreators} from 'redux'

import PageHeader from './PageHeader'
import ClientesTable from './ClientesTable'
import {getClientesAC} from '../actionCreators'
import { connect } from 'react-redux'
import TarefasTable from './TarefasTable'
import { render } from '@testing-library/react'

const tempClientList = [
  {id: 1, nome: 'joao'},
  {id: 2, nome: 'maria'}
]

class Clientes extends Component {
  constructor(props) {
    super(props)
    props.getClientesAC()
  }

  renderBody() {
    
  }

  renderSmallText() {
    switch(this.props.selectedTable) {
      case 'clientes':
        return 'Lista de Clientes'
      case 'tarefasDoCliente':
        return 'Lista de Tarefas do Cliente'
      default:
        return ''
    }
  }
  
  render() {
    if(this.props.selectedTable === 'clientes') {
      return <ClientesTable />
    } else if (this.props.selectedTable === 'tarefasDoCliente') {
      return <TarefasTable />
    }
  }
}
function mapStateToProps(state) {
  return {selectedTable: state.appState.selectedTable}
}
const mapDispatchToProps = dispatch => bindActionCreators({getClientesAC: getClientesAC}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Clientes)