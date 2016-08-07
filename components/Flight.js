import React, { PropTypes, Component} from 'react'
var moment = require('moment');


export default class Flight extends Component {

  render(){


    let parsedDepartureTime = moment(this.props.result.departureTime).format("h:mm a");
    console.log(parsedDepartureTime);
    let parsedFlightLength = Math.round(this.props.result.flightDuration / 60); 
    let parsedArrivalTime= moment(this.props.result.arrivalTime).format("h:mm a");


    if(!this.props.isFetching){
    return(
        <li> 
          <div className="col-xs-9">
          
                <div className="col-xs-4 pull-left">
                  <h4>{this.props.result.flightCarrier} {this.props.result.flightNumber}</h4>
                  <h5>{this.props.result.origin}</h5>
                  <h3>{parsedDepartureTime}</h3>
                </div>

                <div className="col-xs-4 ">          
                  
                  <br/><br/>
                  <center><span> <hr style={{borderColor:"#414042"}}/> </span></center>
                </div>

                <div className="col-xs-4 pull-right" style = {{textAlign:'right'}}>
                  <h4>{parsedFlightLength} Hours</h4>
                  <h5>{this.props.result.destination}</h5>
                  <h3> {parsedArrivalTime}</h3>
                </div>
          </div>


          <div className="col-xs-3">
          <br/>
            <h2>{this.props.result.price}</h2>
          </div>

        </li>
    )
  }
  else{
  return ( 
          <li>
            <div className="col-xs-9">

              <h3> Fetching results </h3>
                  
            </div>
          </li>

        )
}
} 

}

Flight.propTypes = {
  result: PropTypes.object
}

export default Flight