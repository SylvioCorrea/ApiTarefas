import {combineReducers} from 'redux'
import {reducer as formReducer} from 'redux-form'

import {ActionType} from './actionCreators'

const INITIAL_STATE_CLIENTES = []

function clientesReducer(state=INITIAL_STATE_CLIENTES, action) {
  switch(action.type) {
    case ActionType.GET_CLIENTES:
      return action.payload

    default:
      return state
  }
}

const INITIAL_STATE_RELATORIO = []

function relatorioReducer(state=INITIAL_STATE_RELATORIO, action) {
  switch(action.type) {
    case ActionType.GET_RELATORIO:
      return action.payload

    default:
      return state
  }
}

const INITIAL_STATE_TAREFAS = {
  cliente: [],
  tarefasDoCliente: []
}

function tarefasReducer(state=INITIAL_STATE_TAREFAS, action) {
  switch(action.type) {
    case ActionType.GET_TAREFAS_DO_CLIENTE:
      return {...state, tarefasDoCliente: action.payload}

    case ActionType.GET_CLIENTE:
      return {...state, cliente: action.payload}

    default:
      return state
  }
}

const reducers = combineReducers({
  clientes: clientesReducer,
  relatorio: relatorioReducer,
  tarefas: tarefasReducer,
  form: formReducer,
})

export default reducers