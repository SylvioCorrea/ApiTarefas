import {combineReducers} from 'redux'
import {reducer as formReducer} from 'redux-form'

import {ActionType} from './actionCreators'

const INITIAL_STATE = {
  clientes: [],
  relatorio: [],
  cliente: {},
  tarefasDoCliente: []
}

function appStateReducer(state=INITIAL_STATE, action) {
  switch(action.type) {
    case ActionType.GET_CLIENTES:
      return {...state, clientes: action.payload}

    case ActionType.GET_CLIENTE:
      return {...state, cliente: action.payload}

    case ActionType.GET_TAREFAS_DO_CLIENTE:
      return {...state, tarefasDoCliente: action.payload}

    case ActionType.GET_RELATORIO:
      return {...state, relatorio: action.payload}

    default:
      return state
  }
}

const reducers = combineReducers({
  appState: appStateReducer,
  form: formReducer,
})

export default reducers