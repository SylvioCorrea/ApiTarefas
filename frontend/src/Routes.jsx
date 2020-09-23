import React from 'react'
import {Route, Redirect} from 'react-router'
import {HashRouter} from 'react-router-dom'
import Clientes from './template/Clientes'
import Relatorio from './template/Relatorio'

export default props => (
  <HashRouter>
    <Route path='/clientes' component={Clientes}/>
    <Route path='/relatorio' component={Relatorio}/>
    <Redirect from='*' to='/clientes' />
  </HashRouter>
)