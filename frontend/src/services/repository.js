import axios from 'axios'

const URL = 'http://localhost:5000'

export function getClientes() {
  return axios.get(`${URL}/clientes`)
}

export function getCliente(id) {
  return axios.get(`${URL}/clientes/${id}`)
}

export function postCliente(cliente) {
  return axios.post(`${URL}/clientes`, cliente)
}

export function getTarefas() {
  return axios.get(`${URL}/clientes/tarefas`)
}

export function getTarefasDoCliente(idCliente) {
  return axios.get(`${URL}/clientes/${idCliente}/tarefas`)
}

export function postTarefaDoCliente(tarefa) {
  console.log(tarefa)
  return axios.post(`${URL}/clientes/${tarefa.idCliente}/tarefas`, tarefa)
}

export function getRelatorio() {
  return axios.get(`${URL}/clientes/relatorio`)
}