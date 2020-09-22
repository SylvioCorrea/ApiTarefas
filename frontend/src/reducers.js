import {combineReducers} from 'redux'
import {ActionType} from './actionCreators'

const INITIAL_STATE = {
  clientes: [],
  tarefas: [],
}

function reducer(state=INITIAL_STATE, action) {
  switch(action.type) {
    case ActionType.GET_CLIENTES:
      return {...state, clientes: action.payload}
    default:
      return state
  }
}

export default combineReducers({reducer})