import axios from 'axios'

const URL = 'http://localhost:5000'

export function getClientes() {
  return axios.get(`${URL}/clientes`)
}

export function getCliente(id) {
  return axios.get(`${URL}/clientes/${id}`)
}

export function getTarefas() {
  return axios.get(`${URL}/clientes/tarefas`)
}

export function getTarefasDoCliente(idCliente) {
  return axios.get(`${URL}/clientes/${idCliente}/tarefas`)
}

export function getRelatorio() {
  return axios.get(`${URL}/clientes/relatorio`)
}