import React, { Component, PropTypes } from 'react';
 
// Task component - represents a single todo item 


export default class ACValues extends Component {
  render() {
  	sensortype=this.props.sensor;
  	//console.log(sensortype)
  	//console.log(this.props.sensorvalue)
    
  	if (sensortype==="Voltage_effective_L1"){

    return (
     <tr>
          <td>
            <p><i className="fa fa-square gray"></i>Voltage_effective_L1 </p>
          </td>
          <td> {this.props.sensorvalue.Voltage_effective_L1} V</td>
        </tr> 
    );
  }
    if (sensortype==="Voltage_effective_L2"){

    return (
     

         <tr>
          <td>
            <p><i className="fa fa-square gray"></i>Voltage_effective_L2 </p>
          </td>
          <td> {this.props.sensorvalue.Voltage_effective_L2} V</td>
        </tr> 
    
    );
	}

	if (sensortype==="Voltage_effective_L3"){

    return (
      <tr>
          <td>
            <p><i className="fa fa-square gray"></i>Voltage_effective_L3 </p>
          </td>
          <td> {this.props.sensorvalue.Voltage_effective_L3} V</td>
        </tr>
     
     
    );
	}

	if (sensortype==="Current_effective_L1"){

    return (
       <tr>
          <td>
            <p><i className="fa fa-square gray"></i>Current_effective_L1 </p>
          </td>
          <td> {this.props.sensorvalue.Current_effective_L1} Amp</td>
        </tr>
    );
	}

    if (sensortype==="Current_effective_L2"){

    return (
       <tr>
          <td>
            <p><i className="fa fa-square gray"></i>Current_effective_L2 </p>
          </td>
          <td> {this.props.sensorvalue.Current_effective_L2} Amp</td>
        </tr>
    );
  }

    if (sensortype==="Current_effective_L3"){

    return (
       <tr>
          <td>
            <p><i className="fa fa-square gray"></i>Current_effective_L3 </p>
          </td>
          <td> {this.props.sensorvalue.Current_effective_L3} Amp</td>
        </tr>
    );
  }


      if (sensortype==="Active_Power_Sum_L1_L3"){

    return (
       <tr>
          <td>
            <p><i className="fa fa-square gray"></i>Active_Power_Sum_L1_L3 </p>
          </td>
          <td> {this.props.sensorvalue.Active_Power_Sum_L1_L3} W</td>
        </tr>
    );
  }

      if (sensortype==="Reactive_power_fundamental_Sum_L1_L3"){

    return (
       <tr>
          <td>
            <p><i className="fa fa-square gray"></i>Reactive_power_fundamental_Sum_L1_L3 </p>
          </td>
          <td> {this.props.sensorvalue.Reactive_power_fundamental_Sum_L1_L3} W</td>
        </tr>
    );
  }

      if (sensortype==="Consumed_Active_Energy_Sum_L1_L3"){

    return (
       <tr>
          <td>
            <p><i className="fa fa-square gray"></i>Consumed_Active_Energy_Sum_L1_L3 </p>
          </td>
          <td> {this.props.sensorvalue.Consumed_Active_Energy_Sum_L1_L3} W</td>
        </tr>
    );
  }

      if (sensortype==="Reactive_Energy_Sum_L1_L3"){

    return (
       <tr>
          <td>
            <p><i className="fa fa-square gray"></i>Reactive_Energy_Sum_L1_L3 </p>
          </td>
          <td> {this.props.sensorvalue.Reactive_Energy_Sum_L1_L3}</td>
        </tr>
    );
  }

  }
}
 
ACValues.propTypes = {
  // This component gets the task to display through a React prop.
  // We can use propTypes to indicate it is required
  sensorvalue: PropTypes.object.isRequired,
  sensor:PropTypes.string.isRequired,
};