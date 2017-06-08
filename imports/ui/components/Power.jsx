 
import React,{ Component, PropTypes } from 'react';
import classNames from 'classnames';
import { createContainer } from 'meteor/react-meteor-data';

import {MASURA_TGV_ID1} from '../../collections/collections.js';
import PowerValue from '../components/PowerValue.jsx';

import {Line} from 'react-chartjs';

class Power extends React.Component {

renderTasks() {
    return this.props.platformPowerlast.map((platformPower) => (
      <PowerValue key={platformPower._id} platformPower={platformPower} />
    ));
  }

generateChartData() {
  timeScale = [];
  dataset=this.props.platformPower;
  Active_Power_Sum_L1_L3=_.pluck(dataset, "Active_Power_Sum_L1_L3");
  xScale=_.pluck(dataset, "created_at");



for (i=0; i <xScale.length ;i++){
    timeScale.push(moment(xScale[i]).utcOffset(3).format("H:mm"));
  }

  console.log(Active_Power_Sum_L1_L3);
  console.log(timeScale);


}

mapData(){

  this.generateChartData();
   
   var data = {
    labels: timeScale,
    datasets: [
        {
            label: 'Active_Power_Sum_L1_L3',
            fillColor: "rgba(250,195,168,0.5)",
            strokeColor: "rgba(220,220,220,1)",
            pointColor: "rgba(250,195,168,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data:Active_Power_Sum_L1_L3,
        }
    ],

};
//console.log(data);
    
    return data;
}


render() {

 var chartOptions= {


        scales: {
            xAxes: [{
                time: {
                    unit: 'hour'
                }
            }]
        }
  

 }

 widthChart ={
   width:'100%'
 }

  return (
  			<div className="row">
            <div className="col-md-12 col-sm-12 col-xs-12">
            {/*		<div className="row x_title">
                    <div className="col-md-6">
                      <h3> Electromotor <small>Power metering</small></h3>
                    </div>
                    <div className="col-md-6">
               
                    </div>
                  </div>*/}

                  	<div className="col-md-4 col-sm-4 col-xs-12 bg-white">
                    <div className="row">
                      <div className="align_right">
                        <h2>Platform Power </h2>
                             
		     
                      </div>  
                      <div className="divider"></div>
                    
                    </div>
                  {/*  <div className="row">
                      <Line data={this.mapData()} width="500" height="280"/>
                    </div>*/}
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
    platformPowerlast : MASURA_TGV_ID1.find({},{limit:1}).fetch(),
    platformPower : MASURA_TGV_ID1.find({},{limit:10}).fetch(),
   
  };
}, Power);