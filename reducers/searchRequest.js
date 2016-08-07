import {SEARCH_FLIGHT} from '../actions'


function searchRequest(state = {
  }, action) {
  switch (action.type) {
    case SEARCH_FLIGHT:
     console.log(action.origin)
      return Object.assign({}, state, {
        origin: action.origin,
        destination: action.destination,
        date: action.date,
        passengers:action.passengers
      })
    default:
      return state
  }
}

export default searchRequest