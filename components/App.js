import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { searchFlight, fetchSearchIfNeeded } from '../actions'
import AddFlight from '../containers/AddFlight'
import SearchResultList from '../containers/SearchResult'
require("../style.css");

var img = require('../src/img/Ryoko.png');

const appContainer = {
	backgroundColor: '#e6e7e8',
	height: '100vh',
	color : "#414042"
}

const logo ={
	backgroundImage: 'url("src/img/Ryoko.svg")',
	margin: 'auto',
	height:100

}

const appContents = {
	backgroundColor: '#e6e7e8',
	float:'none',
	margin: 'auto',
	
}

class App extends Component  {

	constructor(props) {
	    super(props)
	    this.handleSubmit = this.handleSubmit.bind(this)
	}

	handleSubmit(origin, destination, date, passengers) {
		    this.props.dispatch(searchFlight(origin, destination, date, passengers))
	}
	componentWillReceiveProps(nextProps) {
	    if (nextProps.searchRequest !== this.props.searchRequest) {
	      const { dispatch, searchRequest } = nextProps
	      dispatch(fetchSearchIfNeeded(searchRequest))

	    }
	  }

	componentDidMount() {
	    const { dispatch, searchRequest } = this.props
	    dispatch(fetchSearchIfNeeded(searchRequest))
	 }

	render() {
		const { flight, isFetching, lastUpdated } = this.props
		return(
			  <div className="container-fluid" style={appContainer}>

			  	<center>
			  		<img  src="http://s33.postimg.org/a277jkwjj/Ryoko.png" height="90" style={{margin:30}}></img>
			  	</center>
			  	<div className='col-xs-6' style={appContents}>

				    <AddFlight onSubmit={this.handleSubmit} />
				 
				</div>


				<div className="col-xs-6" style={appContents}>
					
					<SearchResultList flights={flight}/>

				</div> 

				<div className="test">
				</div> 
			  </div>
		)
	}
}

App.propTypes = {
  searchRequest:PropTypes.shape({
  	origin:PropTypes.string.isRequired,
  	destination:PropTypes.string.isRequired,
  	date:PropTypes.string.isRequired,
  	passengers:PropTypes.string.isRequired,
  }).isRequired,
  flight: PropTypes.array,
  isFetching: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {
	const {searches, searchRequest} = state
	const {
	 isFetching,
	  lastUpdated,
	  results: flight
	} = searches || {
		isFetching:true,
		results:[] 
	} 
  return {
    searchRequest,
    flight,
    isFetching,
    lastUpdated
  }
}

export default connect(mapStateToProps)(App)




