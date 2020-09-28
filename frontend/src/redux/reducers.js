import {combineReducers} from 'redux'
import {reducer as formReducer} from 'redux-form'

import {ActionType} from './actionCreators'


const INITIAL_STATE = {
  clientes: [],
  tarefasDoCliente: [],
  relatorio: [],
  selectedTable: 'clientes',
  selectedCliente: {},
  cliente: {}
}

function appStateReducer(state=INITIAL_STATE, action) {
  switch(action.type) {
    case ActionType.GET_CLIENTES:
      return {...state, clientes: action.payload}
    case ActionType.GET_CLIENTE:
      return {...state, cliente: action.payload}
    case ActionType.GET_TAREFAS_DO_CLIENTE:
      return {...state, tarefasDoCliente: action.payload}
    case ActionType.SELECT_TABLE:
      return {...state, selectedTable: action.payload}
    case ActionType.SELECT_CLIENTE:
      return {...state, selectedCliente: action.payload}
    case ActionType.GET_RELATORIO:
      return {...state, relatorio: action.payload}
    case ActionType.POST_CLIENTE:
      return state
    default:
      return state
  }
}

const reducers = combineReducers({
  appState: appStateReducer,
  form: formReducer,
})

export default reducers