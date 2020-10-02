import {
  getClientes,
  getCliente,
  postCliente,
  deleteCliente,
  getTarefasDoCliente,
  postTarefaDoCliente,
  deleteTarefa,
  getRelatorio,
} from '../services/repository'

import {destroy} from 'redux-form'
import {formValueSelector} from 'redux-form'

const selector = formValueSelector('TarefasForm')

export const ActionType = Object.freeze({
  GET_CLIENTES: 'GET_CLIENTES',
  GET_TAREFAS: 'GET_TAREFAS',
  GET_CLIENTE: 'GET_CLIENTE',
  GET_TAREFAS_DO_CLIENTE: 'GET_TAREFAS_DO_CLIENTE',
  GET_RELATORIO: 'GET_RELATORIO',
  SHOW_ALERT: 'SHOW_ALERT',
  REMOVE_ALERT: 'REMOVE_ALERT'
})

export function initClientes() {
  return [
    getClientesAC(),
    destroy('ClientesForm')
  ]
}

export function getClientesAC(searchString) {
  return dispatch => {
    getClientes()
      .then(resp =>  {
        let clientList = resp.data
        //Filtra os clientes por nome se necessário
        if(searchString) {
          clientList = clientList.filter(
            c => c.nome.includes(searchString)
          )
        }
        dispatch({
          type: ActionType.GET_CLIENTES,
          payload: clientList
        })
      })
  }
}

export function getClienteAC(idCliente) {
  return dispatch => {
    getCliente(idCliente)
      .then(resp => dispatch({
        type: ActionType.GET_CLIENTE,
        payload: resp.data
      }))
  }
}

export function postClienteAC(values) {
  return dispatch => {
    postCliente(values)
      .then(() => dispatch(initClientes()) )
      .catch( err => dispatch(
        showAlert('Não foi possível registrar o cliente', err)
      ))
  }
}

export function deleteClienteAC(idCliente) {
  return dispatch => {
    deleteCliente(idCliente)
      .then(resp => dispatch(getClientesAC()))
      .catch( err => dispatch(
        showAlert('Não foi possível apagar o registro do cliente', err)
      ))
  }
}

export function getTarefasDoClienteAC(idCliente) {
  return (dispatch, getState) => {
    const searchString = selector(getState(), 'descricao')
    getTarefasDoCliente(idCliente)
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

export function clearTarefasForm(idCliente) {
  return [
    destroy('TarefasForm'),
    getTarefasDoClienteAC(idCliente)
  ]
}

export function postTarefaDoClienteAC(tarefa, idCliente) {
  return (dispatch, getState) => {
    //Insere a id do cliente que está selecionado na tarefa
    //e então faz post da mesma
    const idCliente = getState().tarefas.cliente.id
    tarefa.idCliente = idCliente
    postTarefaDoCliente(tarefa)
      .then(() => dispatch([
        destroy('TarefasForm'),
        getTarefasDoClienteAC(idCliente)
      ]))
      .catch( err => dispatch(
        showAlert('Não foi possível registrar a tarefa', err)
      ))
  }
}

export function deleteTarefaAC(id, idCliente) {
  return dispatch => {
    deleteTarefa(id)
      .then(() => dispatch(getTarefasDoClienteAC(idCliente)))
      .catch( err => dispatch(
        showAlert('Não foi possível apagar a tarefa', err)
      ))
  }
}

export function getRelatorioAC(values) {
  return dispatch => {
    getRelatorio()
      .then(resp => {
        let relatorio = relatorioToTable(resp.data)
        if(values) {
          relatorio = relatorio.filter(
            ({cliente, tarefa}) => cliente.nome.includes(values.searchString)
              || tarefa.descricao.includes(values.searchString)
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

Esta função recebe um objeto relatório e devolve uma lista
de tarefas com seus respectivos clientes:

[{cliente, tarefa}, {cliente, tarefa}, ...]

Este processamento é conveniente tanto para a renderização da tabela
de relatório desejada quanto a filtragem das tarefas por descrição e
nome de cliente. */
function relatorioToTable(relatorio) {
  //console.log(relatorio)
  const table = relatorio.listaClientesTarefas.map(
    ({cliente, tarefas}) => tarefas.map( tarefa => ({cliente, tarefa}))
  /*Neste ponto o resultado é uma lista de listas (pois foi executado
  um map dentro do outro). Com reduce e concat, as listas são
  unificadas*/
  ).reduce( (listaAnterior, listaAtual) => listaAnterior.concat(listaAtual), [])
  //console.log(table)
  return table
}

export function clearRelatorioForm() {
  return [
    destroy('RelatorioForm'),
    getRelatorioAC()
  ]
}

function showAlert(message, error) {
  let errorText = error.request.responseText.split('\n', 1)[0]
  return { 
    type: ActionType.SHOW_ALERT,
    payload: { message, errorText }
  }
}

export function removeAlert() {
  return {
    type: ActionType.REMOVE_ALERT
  }
}