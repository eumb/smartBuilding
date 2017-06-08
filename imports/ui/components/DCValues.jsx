import React, { Component, PropTypes } from 'react';
 
// Task component - represents a single todo item
export default class DCValues extends Component {
  render() {
  	sensortype=this.props.sensor;
  	//console.log(sensortype)
  	//console.log(this.props.sensorvalue)
    
  	if (sensortype==="USys"){

    return (
     <tr>
          <td>
            <p><i className="fa fa-square gray"></i>System Voltage </p>
          </td>
          <td> {this.props.sensorvalue.USys} <small> V</small></td>
        </tr> 
    );
  }
    if (sensortype==="PSys"){

    return (
     

         <tr>
          <td>
            <p><i className="fa fa-square gray"></i>System Power </p>
          </td>
          <td> {this.props.sensorvalue.PSys/1000} <small> kW</small></td>
        </tr> 
    
    );
	}

	if (sensortype==="ILoad"){

    return (
      <tr>
          <td>
            <p><i className="fa fa-square gray"></i>Load current</p>
          </td>
          <td> {this.props.sensorvalue.ILoad} <small> A</small></td>
        </tr>
     
     
    );
	}

	if (sensortype==="IBatt"){

    return (
       <tr>
          <td>
            <p><i className="fa fa-square gray"></i>Battery current </p>
          </td>
          <td> {this.props.sensorvalue.IBatt} <small> A</small></td>
        </tr>
    );
	}

    if (sensortype==="IRect"){

    return (
       <tr>
          <td>
            <p><i className="fa fa-square gray"></i>Rectifier current</p>
          </td>
          <td> {this.props.sensorvalue.IRect} <small> A</small></td>
        </tr>
    );
  }



  }
}
 
DCValues.propTypes = {
  // This component gets the task to display through a React prop.
  // We can use propTypes to indicate it is required
  sensorvalue: PropTypes.object.isRequired,
  sensor:PropTypes.string.isRequired,
};