import React from 'react'

function renderRows(clientList) {
  const list = clientList || []
  return list.map( c => (
    <tr key={c.id}>
      <td>{c.nome}</td>
      <td>
        <button type='button' className='btn btn-primary'>
          tarefas do cliente
        </button>
      </td>
    </tr>
  ))
}

export default props => (
  <table className='table'>
    <thead>
      <tr>
        <th>Nome</th>
        <th className='action-column'>Ações</th>
      </tr>
    </thead>
    <tbody>
      {renderRows(props.clientList)}
    </tbody>
  </table>
)