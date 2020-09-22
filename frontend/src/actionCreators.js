import {getClientes} from './services/repository'

export const ActionType = Object.freeze({
  GET_CLIENTES: 'GET_CLIENTES'

})

export function getListaClientes() {
  const promise = getClientes()
  return {
    type: ActionType.GET_CLIENTES,
    payload: promise
  }
}