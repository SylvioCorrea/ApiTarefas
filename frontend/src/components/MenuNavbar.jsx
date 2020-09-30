import React from 'react'
import {Link} from 'react-router-dom'

export default props => (
  <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
    <a href="/clientes" className="navbar-brand">
      Clientes/Tarefas
    </a>
    <button className="navbar-toggler" type="button" data-toggle="collapse"
      data-target="#collapse-menu" aria-controls="#collapse-menu"
      aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="collapse-menu">
      <ul className="navbar-nav">
        <li className="nav-item"><Link className="nav-link" to="/clientes">Clientes</Link></li>
        <li className="nav-item"><Link className="nav-link" to="/relatorio">Relatório</Link></li>
      </ul>
    </div>
  </nav>
)