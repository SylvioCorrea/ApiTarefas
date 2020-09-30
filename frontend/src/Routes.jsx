import React from 'react'
import {Route, Switch} from 'react-router'
import {BrowserRouter} from 'react-router-dom'
import ClientesTable from './pages/clientes/ClientesTable'
import Relatorio from './pages/relatorio/Relatorio'
import TarefasTable from './pages/tarefas/TarefasTable'

export default props => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/clientes' component={ClientesTable}/>
      <Route path='/relatorio' component={Relatorio}/>
      <Route path='/clientes/:id' component={TarefasTable} />
      <Route path='/' component={ClientesTable}/>
    </Switch>
  </BrowserRouter>
)