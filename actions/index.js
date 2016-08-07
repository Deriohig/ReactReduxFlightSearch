import fetch from 'isomorphic-fetch'

export const REQUEST_FLIGHT = 'REQUEST_FLIGHT'
export const RECEIVE_FLIGHT = 'RECEIVE_FLIGHT'
export const INVALIDATE_FLIGHT = 'INVALIDATE_FLIGHT'
export const SEARCH_FLIGHT = 'SEARCH_FLIGHT'

let nextFlightId = 0
export const addFlight = (origin) => {
  return {
    type: 'ADD_FLIGHT',
    id: nextFlightId++,
    origin
  }
}

export const deleteFlight = (id) => {
  return {
    type: 'ADD_FLIGHT',
    id: id,
    origin
  }
}
let searchid=0;

export const searchFlight = (origin, destination, date, passengers) => {
  return {
    type: SEARCH_FLIGHT,
    origin, 
    destination, 
    date,
    passengers 
  }
}

function requestSearch(search) {
  return {
    type: 'REQUEST_FLIGHT',
    search
  }
}

export const setVisibilityFilter = (filter) => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}

function decodeJsonToObject(json){
  console.log(json);

  var object = {

    "price": json.trips.tripOption[0].saleTotal, 
    "origin": json.trips.data.city[0].name,
    "destination":json.trips.data.city[1].name,
    "originAirport": json.trips.data.airport[0].name,
    "destinationAirport": json.trips.data.airport[1].name,
    "departureTime":json.trips.tripOption[0].slice[0].segment[0].leg[0].departureTime,
    "flightDuration":json.trips.tripOption[0].slice[0].duration,
    "flightCarrier":json.trips.tripOption[0].slice[0].segment[0].flight.carrier,
    "flightNumber":json.trips.tripOption[0].slice[0].segment[0].flight.number,
    "arrivalTime":json.trips.tripOption[0].slice[0].segment[0].leg[0].arrivalTime,

  }
  return object

}

function receiveSearch(json) {
  var resultObj = decodeJsonToObject(json);
  console.log(json);
  return {
    type: RECEIVE_FLIGHT,
    result: resultObj
  }
}

function shouldFetchSearch(state, search) {
  const flights = state.searches.result
  console.log(flights);
  if ( search.origin != '' && search.destination != '' && search.date != '' && search.passengers != '') {
    console.log('true');
    return true
  }
  if (flights.isFetching) {
    console.log('it came back false');
    return false
  }
  console.log('it defaulted to false');
  return flights.didInvalidate
}

export function fetchSearchIfNeeded(search) {
  console.log('calling fetchSearchIfNeeded')

  return (dispatch, getState) => {
    if (shouldFetchSearch(getState(), search)){
 
      return dispatch(fetchSearch(search))
    }
    else{
      console.log("The search failed: returned false: dead end")
    }
  }
}


function fetchSearch(action) {
  console.log('calling')
  var search = {
    "request": {
        "slice": [
          {
            "origin": action.origin,
            "destination": action.destination,
            "date": action.date
          }
        ],
        "passengers": {
          "adultCount": action.passengers,
          "infantInLapCount": 0,
          "infantInSeatCount": 0,
          "childCount": 0,
          "seniorCount": 0
        },
        "solutions": 1,
        "refundable": false
      }
    }
  
 var apikey = 'AIzaSyDSaXYSaVGW14YnwwwAZnhXKczSFVqxMaI'; 
  //var apikey = 'AIzaSyDSaXYSr44444444444444444r3XKczSFVqxMaI'; 

  return dispatch => {
    dispatch(requestSearch(search))
      return fetch(`https://www.googleapis.com/qpxExpress/v1/trips/search?key=`+ apikey,{
          method: 'post',
          headers:{'Accept': 'application/json',
                  'Content-Type': 'application/json'},
          body: JSON.stringify(search)
      })
        .then(response => response.json())
        .then(json => dispatch(receiveSearch( json)))

  }
}

