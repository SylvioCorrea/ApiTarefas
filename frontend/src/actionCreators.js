import {
  getClientes,
  postCliente,
  getTarefasDoCliente,
  postTarefaDoCliente,
  getRelatorio,
} from './services/repository'

import {destroy} from 'redux-form'

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

export function showTarefasDoCliente(cliente) {
  return [
    selectCliente(cliente),
    getTarefasDoClienteAC(cliente),
    selectTable('tarefasDoCliente')
  ]
}

export function getTarefasDoClienteAC(cliente, searchString) {
  return dispatch => {
    getTarefasDoCliente(cliente.id)
      .then(resp => {
        let listaDeTarefas = resp.data
        //Filtra as tarefas por descrição se necessário
        if(searchString) {
          listaDeTarefas = listaDeTarefas.filter(
            t => t.descricao.includes(searchString)
          )
        }
        dispatch({
          type: ActionType.GET_TAREFAS_DO_CLIENTE,
          payload: listaDeTarefas
        })
      })
  }
}

export function clearTarefasForm(cliente) {
  return [
    destroy('TarefasForm'),
    getTarefasDoClienteAC(cliente)
  ]
}

export function postTarefaDoClienteAC(tarefa, cliente) {
  return (dispatch, getState) => {
    //Insere a id do cliente que está selecionado na tarefa
    //e então faz post da mesma
    const cliente = getState().appState.selectedCliente
    tarefa.idCliente = cliente.id
    postTarefaDoCliente(tarefa)
      .then(() => dispatch([
        destroy('TarefasForm'),
        getTarefasDoClienteAC(cliente)
      ]))
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
