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
            <p><i className="fa fa-square gray"></i>USys </p>
          </td>
          <td> {this.props.sensorvalue.USys}V</td>
        </tr> 
    );
  }
    if (sensortype==="PSys"){

    return (
     

         <tr>
          <td>
            <p><i className="fa fa-square gray"></i>PSys </p>
          </td>
          <td> {this.props.sensorvalue.PSys}Watt</td>
        </tr> 
    
    );
	}

	if (sensortype==="ILoad"){

    return (
      <tr>
          <td>
            <p><i className="fa fa-square gray"></i>ILoad </p>
          </td>
          <td> {this.props.sensorvalue.ILoad}Amp</td>
        </tr>
     
     
    );
	}

	if (sensortype==="IBatt"){

    return (
       <tr>
          <td>
            <p><i className="fa fa-square gray"></i>IBatt </p>
          </td>
          <td> {this.props.sensorvalue.IBatt}Amp</td>
        </tr>
    );
	}

    if (sensortype==="IRect"){

    return (
       <tr>
          <td>
            <p><i className="fa fa-square gray"></i>IRect </p>
          </td>
          <td> {this.props.sensorvalue.IRect}Amp</td>
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