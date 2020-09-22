import React from 'react'
import {Route, Redirect} from 'react-router'
import {HashRouter} from 'react-router-dom'
import Clientes from './template/Clientes'
import Tarefas from './template/Tarefas'

export default props => (
  <HashRouter>
    <Route path='/clientes' component={Clientes}/>
    <Route path='/tarefas' component={Tarefas}/>
    <Redirect from='*' to='/clientes' />
  </HashRouter>
)