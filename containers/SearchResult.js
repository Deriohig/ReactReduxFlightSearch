import { connect } from 'react-redux'
import React, { Component, PropTypes } from 'react'
import FlightList from '../components/FlightList'

class SearchResults extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.handleRefreshClick = this.handleRefreshClick.bind(this)
  }

  render(){

    return(
      <div className="cold-xs-12">

        <FlightList flights={flight}/>

      </div>

      )
  }
}


const mapStateToProps = (state) => {
  return {
    flights: state.searches
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onResultClick: (id) => {
      dispatch(addFlight(id, flightResult ))
    }
  }
}

const SearchResultList = connect(
  mapStateToProps,
  mapDispatchToProps
)(FlightList)

export default SearchResultList
