import {
  getClientes,
  getTarefasDoCliente,
  getRelatorio,
} from './services/repository'

export const ActionType = Object.freeze({
  GET_CLIENTES: 'GET_CLIENTES',
  GET_TAREFAS: 'GET_TAREFAS',
  GET_CLIENTE: 'GET_CLIENTE',
  GET_TAREFAS_DO_CLIENTE: 'GET_TAREFAS_DO_CLIENTE',
  GET_RELATORIO: 'GET_RELATORIO',
  SELECT_TABLE: 'SELECT_TABLE',
  SELECT_CLIENTE: 'SELECT_CLIENTE'
})

export function initClientes() {
  return [
    getClientesAC(),
    selectTable('clientes'),
  ]
}

export function getClientesAC() {
  return dispatch => {
    getClientes()
      .then(resp => dispatch({
        type: ActionType.GET_CLIENTES,
        payload: resp.data
      }))
  }
}

//Pega a lista de tarefas do backend e então troca a tabela a ser mostrada
export function showTarefasDoCliente(cliente) {
  return dispatch => {
    getTarefasDoCliente(cliente.id)
      .then(resp => dispatch(
        getTarefasDoClienteAC(resp.data)
      ))
      .then( () => dispatch([
        selectCliente(cliente),
        selectTable('tarefasDoCliente')
      ]))
  }
}

function getTarefasDoClienteAC(tarefas) {
  return {
    type: ActionType.GET_TAREFAS_DO_CLIENTE,
    payload: tarefas
  }
}

export function getRelatorioAC() {
  return dispatch => {
    getRelatorio()
      .then(resp => dispatch({
        type: ActionType.GET_RELATORIO,
        payload: resp.data
      }))
  }
}

function selectTable(tableName) {
  return {
    type: ActionType.SELECT_TABLE,
    payload: tableName
  }
}
function selectCliente(cliente) {
  return {
    type: ActionType.SELECT_CLIENTE,
    payload: cliente
  }
}
