 
import React,{ Component, PropTypes } from 'react';
import classNames from 'classnames';
import { createContainer } from 'meteor/react-meteor-data';

import {MASURA_TGV_ID1} from '../../collections/collections.js';
import PowerValue from '../components/PowerValue.jsx';

class Power extends React.Component {

renderTasks() {
    return this.props.platformPower	.map((platformPower) => (
      <PowerValue key={platformPower._id} platformPower={platformPower} />
    ));
  }



render() {



  return (
  			<div className="row">
            <div className="col-md-12 col-sm-12 col-xs-12">
            		<div className="row x_title">
                    <div className="col-md-6">
                      <h3> Electromotor <small>Power metering</small></h3>
                    </div>
                    <div className="col-md-6">
               
                    </div>
                  </div>

                  	<div className="col-md-4 col-sm-4 col-xs-12 bg-white">
                    <div className="row">
                      <div className="align_right">
                        <h2>Platform Power </h2>
                             
		     
                      </div>  
                      <div className="divider"></div>
                      {this.renderTasks()}
                    </div>
            	</div>
            </div>
           </div>
  	  )}
}

 Power.propTypes = {
  platformPower: PropTypes.array.isRequired,
};


export default createContainer(() => {
  Meteor.subscribe('MASURA_TGV_ID1');



  return { 
    platformPower : MASURA_TGV_ID1.find({}).fetch(),
   
  };
}, Power);