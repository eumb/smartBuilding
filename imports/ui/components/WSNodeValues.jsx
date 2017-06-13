import React, { Component, PropTypes } from 'react';
 
// Task component - represents a single todo item
export default class WSNodeValues extends Component {
  
  render() {

  	sensortype=this.props.sensor;
  	//console.log(sensortype)
  	//console.log(this.props.sensorvalue)
    
  	if (sensortype==="device"){

    return (
      <div className="count">{this.props.sensorvalue.DeviceID}</div>
    );
  }
    if (sensortype==="temp"){

    return (
     

         <tr>
          <td>
            <p><i className="fa fa-square red"></i> Temperature </p>
          </td>
          <td> {this.props.sensorvalue.temp} °C</td>
        </tr> 
    
    );
	}

    if (sensortype==="pres"){

    return (
     

         <tr>
          <td>
            <p><i className="fa fa-square yellow"></i> Presence percentage </p>
          </td>
          <td> {this.props.sensorvalue.pres} %</td>
        </tr> 
    
    );
  }

	if (sensortype==="humid"){

    return (
      <tr>
          <td>
            <p><i className="fa fa-square blue"></i> Humidity </p>
          </td>
          <td> {this.props.sensorvalue.humid} %</td>
        </tr>
     
     
    );
	}



	if (sensortype==="noise"){

    return (
       <tr>
          <td>
            <p><i className="fa fa-square purple"></i> Noise </p>
          </td>
          <td> {this.props.sensorvalue.noise} dB</td>
        </tr>
    );
	}

    if (sensortype==="co2"){

    return (
       <tr>
          <td>
            <p><i className="fa fa-square black"></i> CO2 </p>
          </td>
          <td> {this.props.sensorvalue.co2} ppm</td>
        </tr>
    );
  }

     if (sensortype==="light"){

    return (
       <tr>
          <td>
            <p><i className="fa fa-square green"></i> Light </p>
          </td>
          <td> {this.props.sensorvalue.light} lx</td>
        </tr>
    );
  }

     if (sensortype==="dust"){

    return (
       <tr>
          <td>
            <p><i className="fa fa-square gray"></i> Dust </p>
          </td>
          <td> {this.props.sensorvalue.dust} µg/m3</td>
        </tr>
    );
  }

    if (sensortype==="updated"){
    let date=moment(this.props.sensorvalue.created_at).format('MM/DD/YYYY HH:MM');
    //console.log(date)
    return (
      <p> updated at: {date}</p>
    );
  }



  }
}
 
WSNodeValues.propTypes = {
  // This component gets the task to display through a React prop.
  // We can use propTypes to indicate it is required
  sensorvalue: PropTypes.object.isRequired,
  sensor:PropTypes.string.isRequired,
};