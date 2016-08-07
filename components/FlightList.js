import React, { PropTypes, Component } from 'react'
import Flight from './Flight'

class FlightList extends Component{

  constructor(props) {
      super(props)
      this.renderListItems = this.renderListItems.bind(this)
  }


  renderListItems(){
    this.props.flights.map(function(flight){
      return(
         <Flight origin={this.props.flight.result.origin}/>
        )
    })
  }

  render(){

    console.log(this.props);

    let unorderedListStyle = {
      listStyleType: 'none',
      marginLeft:-50
    }

    console.log(this.props.flights.result.price)

    return(
             <ul style={unorderedListStyle}>
              
               <Flight isFetching={this.props.flights.isFetching} result={this.props.flights.result}/>

             </ul>
    )

  }

}

FlightList.propTypes = {
    flights: PropTypes.object.isRequired
}

export default FlightList
