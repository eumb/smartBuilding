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
    if (this.props.sensorvalue.humid <30){
      return (
      <div>
      <div className="count yellow">{this.props.sensorvalue.humid}</div>
       <span><strong>Comfortable: 30%-60%</strong></span> 
       </div>
    );
    } 
    if (this.props.sensorvalue.humid > 60){
            return (
      <div>
      <div className="count red">{this.props.sensorvalue.humid}</div>
       <span><strong>Comfortable:</strong></span><div>30%-60%</div> 
       </div>
    );
    } else {

                return (
      <div>
      <div className="count green">{this.props.sensorvalue.humid}</div>
       <span><strong>Comfortable:</strong></span><div><strong>30%-60%</strong></div> 
       </div>
    );
    }
    
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