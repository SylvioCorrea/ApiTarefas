import axios from 'axios'

const URL = 'http://localhost:5000'

export function getClientes() {
  return axios.get(`${URL}/clientes`)
    .then(resp => resp.data)
}

export function getCliente(id) {
  return axios.get(`${URL}/clientes/${id}`)
    .then(resp => resp.data)
}

export function getTarefas() {
  return axios.get(`${URL}/clientes/tarefas`)
    .then(resp => resp.data)
}

export function getTarefasDoCliente(id) {
  return axios.get(`${URL}/clientes/${id}/tarefas`)
    .then(resp => resp.data)
}

export function getRelatorio() {
  return axios.get(`${URL}/clientes/relatorio`)
    .then(resp => resp.data)
}