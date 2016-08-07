import { combineReducers } from 'redux'
import flights from './flights'
import searches from './searches'
import searchRequest from './searchRequest'



const flightApp = combineReducers({
  flights,
  searches,
  searchRequest
})

export default flightApp
