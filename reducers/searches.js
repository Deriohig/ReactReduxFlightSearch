
import {
   INVALIDATE_FLIGHT, ADD_SEARCH,
  REQUEST_FLIGHT, RECEIVE_FLIGHT
} from '../actions'


function searches(state = {
  isFetching: false,
  didInvalidate: false,
  result: []
}, action){
  switch (action.type) {
    case REQUEST_FLIGHT:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      })
    case RECEIVE_FLIGHT:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        result: action.result,
      })
    case INVALIDATE_FLIGHT:
      return Object.assign({}, state, {
        didInvalidate: true
      })
    default:
      return state
  }
}


export default searches




