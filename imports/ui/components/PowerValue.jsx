import React, { Component, PropTypes } from 'react';
 
// Task component - represents a single todo item
export default class PowerValue extends Component {
  render() {
  	return (
      <div className="count">{this.props.platformPower.Active_Power_Sum_L1_L3}</div>
    );
	
  }
}
 
PowerValue.propTypes = {
  // This component gets the task to display through a React prop.
  // We can use propTypes to indicate it is required
  platformPower: PropTypes.object.isRequired,
  
};