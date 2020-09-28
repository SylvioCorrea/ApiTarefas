import React from 'react'
import {Route, Switch} from 'react-router'
import {BrowserRouter} from 'react-router-dom'
import Clientes from './components/Clientes'
import Relatorio from './components/relatorio/Relatorio'
import Tarefas from './components/tarefas/Tarefas'

export default props => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/clientes' component={Clientes}/>
      <Route path='/relatorio' component={Relatorio}/>
      <Route path='/clientes/:id' component={Tarefas} />
      <Route path='/' component={Clientes}/>
    </Switch>
  </BrowserRouter>
)