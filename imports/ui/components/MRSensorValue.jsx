import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';


// Task component - represents a single todo item
export default class MRSensorValue extends Component {
  render() {
  	sensortype=this.props.sensor;
  	//console.log(sensortype)
  	//console.log(this.props.sensorvalue)
      var classes = classNames( this.props.className, {
        'selected': ( this.props.selected === this.props.className )
    } );

  	if (sensortype==="temp"){

    return (
      <span className="count">{this.props.sensorvalue.temp}</span>
    );
	}

	if (sensortype==="humid"){

    return (
      <span className="count">{this.props.sensorvalue.humid}</span>
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
    if (sensortype==="pres"){

      if (this.props.sensorvalue.pres!=0){
         return (
       
              <div className="ocupied col-md-6 col-sm-4 col-xs-6 tile_stats_count">
                     
              </div>        
        );
      }
    
    else if(this.props.sensorvalue.pres===0){
      return (
       <div className="vacant col-md-6 col-sm-4 col-xs-6 tile_stats_count">
                     
     </div>    
    );
  
    } 
  }

}

}

MRSensorValue.propTypes = {
  // This component gets the task to display through a React prop.
  // We can use propTypes to indicate it is required
  sensorvalue: PropTypes.object.isRequired,
  sensor:PropTypes.string.isRequired,
};