import React, {Component} from 'react'
import {bindActionCreators} from 'redux'
import {getClientesAC} from '../actionCreators'
import { connect } from 'react-redux'

import TarefasTable from './TarefasTable'
import ClientesTable from './ClientesTable'

class Clientes extends Component {
  constructor(props) {
    super(props)
    props.getClientesAC()
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

function mapDispatchToProps(dispatch) {
  return bindActionCreators({getClientesAC}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Clientes)