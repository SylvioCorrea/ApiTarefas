import React from 'react'

export default props => (
  <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
    <a href="#/clientes" className="navbar-brand">
      Clientes/Tarefas
    </a>
    <button className="navbar-toggler" type="button" data-toggle="collapse"
      data-target="#collapse-menu" aria-controls="#collapse-menu"
      aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="collapse-menu">
      <ul className="navbar-nav">
        <li className="nav-item"><a className="nav-link" href="#/clientes">Clientes</a></li>
        <li className="nav-item"><a className="nav-link" href="#/relatorio">Relatório</a></li>
      </ul>
    </div>
  </nav>
)