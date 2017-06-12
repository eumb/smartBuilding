import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';


// Task component - represents a single todo item
export default class WSSensorValue extends Component {
  render() {
  	sensortype=this.props.sensor;
  	//console.log(sensortype)
  	//console.log(this.props.sensorvalue)


  	if (sensortype==="temp"){

    return (
      <div className="count">{this.props.sensorvalue.temp}</div>
    );
	}

	if (sensortype==="humid"){

    return (
      <div className="count">{this.props.sensorvalue.humid}</div>
    );
	}

	if (sensortype==="noise"){

    return (
      <div className="count">{this.props.sensorvalue.noise}</div>
    );
	}
    if (sensortype==="light"){

    return (
      <div className="count">{this.props.sensorvalue.light}</div>
    );
  }
   if (sensortype==="dust"){

    return (
      <div className="count">{this.props.sensorvalue.dust}</div>
    );
  
  }  
      if (sensortype==="co2"){

    return (
      <div className="count">{this.props.sensorvalue.co2}</div>
    );
  
  }  

  }

}

 
WSSensorValue.propTypes = {
  // This component gets the task to display through a React prop.
  // We can use propTypes to indicate it is required
  sensorvalue: PropTypes.object.isRequired,
  sensor:PropTypes.string.isRequired,
};