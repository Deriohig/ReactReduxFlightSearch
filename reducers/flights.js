
const flight = (state, action) => {
  switch (action.type) {

    case 'ADD_FLIGHT':
      return {
        id: action.id,
        origin: action.origin
      }
    default:
      return state
  }
}

const flights = (state = [], action) => {
  switch (action.type) {
    case 'ADD_FLIGHT':
      return [
        ...state,
        flight(undefined, action)
      ]
    default:
      return state
  }
}

export default flights


