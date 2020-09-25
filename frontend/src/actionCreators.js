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

export function getRelatorioAC(searchString) {
  return dispatch => {
    getRelatorio()
      .then(resp => {
        let relatorio = relatorioToTable(resp.data)
        if(searchString) {
          relatorio = relatorio.filter(
            ({cliente, tarefa}) => cliente.nome.includes(searchString)
              || tarefa.descricao.includes(searchString)
          )
        }
        dispatch({
          type: ActionType.GET_RELATORIO,
          payload: relatorio
        })
      })
  }
}

/*O relatorio fornecido pelo backend é um objeto que contém somente
uma lista de nome listaClientesTarefas. Nesta lista estão objetos
compostos por um objeto cliente e uma lista com todas as tarefas
daquele cliente:

Relatorio: {
  listaTarefasClientes: [
    {cliente: {id, nome}, tarefas: [tarefa1, tarefa2...]},
    {cliente: {id, nome}, tarefas: [tarefa1, tarefa2...]},
    ...
  ]
}

Esta função transforma recebe um objeto relatório e devolve uma lista
de tarefas com seus respectivos clientes:

[{cliente, tarefa}, {cliente, tarefa}, ...]

Este processamento é conveniente tanto para a renderização da tabela
de relatório desejada quanto a filtragem das tarefas por descrição e
nome de cliente. */
function relatorioToTable(relatorio) {
  console.log(relatorio)
  const table = relatorio.listaClientesTarefas.map(
    ({cliente, tarefas}) => tarefas.map( tarefa => ({cliente, tarefa}))
  /*Neste ponto o resultado é uma lista de listas (pois foi executado
  um map dentro do outro). Com reduce e concat, as listas são
  unificadas*/
  ).reduce( (listaAnterior, listaAtual) => listaAnterior.concat(listaAtual), [])
  console.log(table)
  return table
}

export function clearRelatorioForm() {
  return destroy('RelatorioForm')
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
