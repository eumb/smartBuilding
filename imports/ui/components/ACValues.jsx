import React, { Component, PropTypes } from 'react';
 
// Task component - represents a single todo item 


export default class ACValues extends Component {
    
  roundToTwo(num) {    
    return +(Math.round(num + "e+2")  + "e-2");
  }

  render() {
  	sensortype=this.props.sensor;
  	//console.log(sensortype)
  	//console.log(this.props.sensorvalue)
    
    if (sensortype==="updated"){
    date=moment(this.props.sensorvalue.created_at).utcOffset(+3);
    //console.log(this.props.sensorvalue.created_at)
    //console.log(date)
    return (
      <p> <strong> Updated at: </strong>{this.props.sensorvalue.created_at.toString()}</p>
    );
  }
  	if (sensortype==="Voltage_effective_L1"){

    return (
     <tr>
          <td>
            <p><i className="fa fa-square gray"></i> Voltage effective L1 </p>
          </td>
          <td> {this.props.sensorvalue.Voltage_effective_L1}<small> V</small></td>
        </tr> 
    );
  }
    if (sensortype==="Voltage_effective_L2"){

    return (
     

         <tr>
          <td>
            <p><i className="fa fa-square gray"></i> Voltage effective L2 </p>
          </td>
          <td> {this.props.sensorvalue.Voltage_effective_L2}<small> V</small></td>
        </tr> 
    
    );
	}

	if (sensortype==="Voltage_effective_L3"){

    return (
      <tr>
          <td>
            <p><i className="fa fa-square gray"></i> Voltage effective L3 </p>
          </td>
          <td> {this.props.sensorvalue.Voltage_effective_L3}<small> V</small></td>
        </tr>
     
     
    );
	}

	if (sensortype==="Current_effective_L1"){

    return (
       <tr>
          <td>
            <p><i className="fa fa-square gray"></i> Current effective L1 </p>
          </td>
          <td> {this.props.sensorvalue.Current_effective_L1}<small> A</small></td>
        </tr>
    );
	}

    if (sensortype==="Current_effective_L2"){

    return (
       <tr>
          <td>
            <p><i className="fa fa-square gray"></i> Current effective L2 </p>
          </td>
          <td> {this.props.sensorvalue.Current_effective_L2}<small> A</small></td>
        </tr>
    );
  }

    if (sensortype==="Current_effective_L3"){

    return (
       <tr>
          <td>
            <p><i className="fa fa-square gray"></i> Current effective L3 </p>
          </td>
          <td> {this.props.sensorvalue.Current_effective_L3}<small> A</small></td>
        </tr>
    );
  }


      if (sensortype==="Active_Power_Sum_L1_L3"){

    return (
       <tr>
          <td>
            <p><i className="fa fa-square gray"></i> Active Power Sum (L1:L3) </p>
          </td>
          <td> {this.roundToTwo(this.props.sensorvalue.Active_Power_Sum_L1_L3/1000)}<small> kW</small></td>
        </tr>
    );
  }

      if (sensortype==="Reactive_power_fundamental_Sum_L1_L3"){

    return (
       <tr>
          <td>
            <p><i className="fa fa-square gray"></i> Reactive power fundamental Sum (L1:L3) </p>
          </td>
          <td> {this.roundToTwo(this.props.sensorvalue.Reactive_power_fundamental_Sum_L1_L3/1000)}<small> kvar</small></td>
        </tr>
    );
  }

      if (sensortype==="Consumed_Active_Energy_Sum_L1_L3"){

    return (
       <tr>
          <td>
            <p><i className="fa fa-square gray"></i> Consumed Active Energy Sum (L1:L3) </p>
          </td>
          <td> {this.roundToTwo(this.props.sensorvalue.Consumed_Active_Energy_Sum_L1_L3/1000)}<small> kWh</small></td>
        </tr>
    );
  }

      if (sensortype==="Reactive_Energy_Sum_L1_L3"){

    return (
       <tr>
          <td>
            <p><i className="fa fa-square gray"></i> Reactive Energy Sum (L1:L3) </p>
          </td>
          <td> {this.roundToTwo(this.props.sensorvalue.Reactive_Energy_Sum_L1_L3/1000)}<small> kVArh</small></td>
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