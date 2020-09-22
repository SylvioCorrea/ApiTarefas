import React, {Component} from 'react'

import PageHeader from './PageHeader'
import ClientesTable from './ClientesTable'
import {getClientes} from '../services/repository'

const tempClientList = [
  {id: 1, nome: 'joao'},
  {id: 2, nome: 'maria'}
]

class Clientes extends Component {
  constructor(props) {
    super(props)
    this.state = {clientList: []}
    
    this.fetchClientes = this.fetchClientes.bind(this)

    this.fetchClientes()
  }

  fetchClientes() {
    getClientes().then(res => this.setState({clientList: res}))
  }
  
  render() {
    return (
      <div>
        <PageHeader name='Clientes' small='Lista de Clientes' />
        <ClientesTable clientList={this.state.clientList} />
      </div>
    )
  }
}

export default Clientes