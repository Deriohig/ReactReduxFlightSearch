import React,  { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { searchFlight } from '../actions'
var Select = require('react-select');
require("../style.css");

const search = {
  width: '400px'
}

var options = [
    { value: 'one', label: 'One' },
    { value: 'two', label: 'Two' }
];

export default class AddFlight extends Component  {
  render(){

    let origin, destination, date, passengers;
    const {onSubmit} = this.props;

    let inputStyle = {
          color:"#414042",
          padding: 10,
          border: 'none',
          borderBottom:' solid 4px #2ecc71',
          transition: 'border 0.3s',
          display: 'inline-block',
          margin: 0,
          width: '100%',
          fontFamily: "'Oswald'",
          fontSize: 18,
          appearance: 'none',
          boxShadow: 'none',
          borderRadius: 'none'
    }

    let inputStyleFull = {
      color:"#414042",
          padding: 10,
          border: 'none',
          borderBottom:' solid 4px #2ecc71',
          transition: 'border 0.3s',
          display: 'inline-block',
          margin: 0,
          width: '100%',
          fontFamily: "'Oswald'",
          fontSize: 18,
          appearance: 'none',
          boxShadow: 'none',
          borderRadius: 'none'
    }

    const appContents = {
        backgroundColor: 'white',
        float:'none',
        margin: 'auto',
        marginTop:'100px',
        color:'white'
      }

    let formSpaceing = {
      color:"#414042",
      fontSize:14,
      padding: 10,
     
    }
    let padding = {
      
      paddingTop: 30,
      paddingBottom: 30
     
    }

    var labels = { 
      fontFamily: "'Oswald'",
      fontSize:18,

    }

    return (
      <div>

       <center>   <form style={padding} onSubmit={e => {
                                  e.preventDefault()
                                  if (!origin.value.trim()) {
                                    return
                                  }

                                  onSubmit(origin.value, destination.value, date.value, passengers.value)}
                                }
          >
          <div className="col-xs-12 clear-padding" style={formSpaceing}>
            <div className="col-xs-6 clear-padding" style={{padding:0, paddingRight:10}}>
              <div className="col-xs-12 clear-padding" style={{padding:0}}>
                 <label className="pull-left" style={labels}>Origin:</label> 
              </div>
              <div className="col-xs-12 clear-padding" style={{padding:0}}>
                <input style={inputStyle} ref={node => {
                   origin = node
                }} />
              </div>
            </div>
           
               <div className="col-xs-6" style={{padding:0, paddingLeft:10}}>
                  <div className="col-xs-12" style={{padding:0}}>
                     <label className="pull-left" style={labels} >Destination:</label>
                  </div>
                  <div className="col-xs-12" style={{padding:0}}>
                     <input style={inputStyle} ref={node => {
                       destination = node
                     }} />
                  </div>
                </div>
          </div>
          <div className="col-xs-12" style={formSpaceing}>
            <label className="pull-left" style={labels}>Date:</label><input style={inputStyleFull} ref={node => {
              date = node
            }} />
          </div>
          <div className="col-xs-12" style={formSpaceing}>
           <label className="pull-left " style={labels}> Passengers: </label><input style={inputStyleFull}  ref={node => {
              passengers = node
            }} />
          </div>
            <input type="image" height="60" src="http://s33.postimg.org/gib7nmnr3/image.png" alt="submit" style={{margin:15}}/>
            
          </form>
          </center>
      </div>
    )

  }
}
AddFlight.propTypes = {

  onSubmit: PropTypes.func.isRequired

}

