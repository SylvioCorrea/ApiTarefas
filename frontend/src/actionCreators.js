import {
  getClientes,
  postCliente,
  getTarefasDoCliente,
  postTarefaDoCliente,
  getRelatorio,
} from './services/repository'

import {clearFields, destroy} from 'redux-form'

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
    destroy('ClientesForm'),
    selectTable('clientes'),
  ]
}

export function getClientesAC(searchString) {
  return dispatch => {
    getClientes()
      .then(resp =>  {
        let clientList = resp.data
        //Filtra os clientes por nome se necessário
        if(searchString) {
          console.log('clientList', searchString, clientList)
          clientList = clientList.filter(
            c => c.nome.includes(searchString)
          )
          console.log('filtered', clientList)
        }
        dispatch({
          type: ActionType.GET_CLIENTES,
          payload: clientList
        })
      })
  }
}

export function postClienteAC(values) {
  console.log('form print', values)
  return dispatch => {
    postCliente(values)
      .then(() => dispatch(initClientes()) )
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

export function postTarefaDoClienteAC(tarefa) {
  return dispatch => {
    postTarefaDoCliente(tarefa)
      .then(() => dispatch(initClientes()))
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
