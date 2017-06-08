
import React,{ Component, PropTypes } from 'react';
import classNames from 'classnames';
import { createContainer } from 'meteor/react-meteor-data';

import {MASURA_TGV_ID1} from '../../collections/collections.js';
import {HVAC_CLIME_WIFI_ID73} from '../../collections/collections.js';
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


generateChartDataHVAC() {
  timeScale = [];
  dataset=this.props.HvacPower;
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
            fillColor: "rgba(225,241,238,0.6)",
            strokeColor: "rgba(220,220,220,1)",
            pointColor: "rgba(250,195,168,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data:Active_Power_Sum_L1_L3,
        }
    ],

};

    return data;
}



mapDataHVAC(){

  this.generateChartDataHVAC();

   var data = {
    labels: timeScale,
    datasets: [
        {
            label: 'HVAC_CLIME_WIFI_ID73',
            backgroundColor: 'rgba(88,203,181,0.5)',
            strokeColor: "rgba(220,220,220,1)",
            pointColor: "rgba(250,195,168,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data:Active_Power_Sum_L1_L3,
        }
    ],

};

    return data;
}



render() {

 var chartOptions = {
  responsive: true,
  tooltips: {
    mode: 'label'
  },
  elements: {
    line: {
      fill: true
    }
  },
  scales: {
    xAxes: [{
      display: true,
      gridLines: {
        display: false
      },
      labels: {
        show: true
      }
    }],
    yAxes: [{
      type: 'linear',
      display: true,
      position: 'left',
      id: 'y-axis-1',
      gridLines: {
        display: false
      },
      labels: {
        show: true
      }
  
    }]
  }
}

 widthChart ={
   width:'100%'
 }


 widthChart ={
   width:'100%'
 }

  return (
    <div>
        <div className="row">
            <div className="col-md-12 col-sm-12 col-xs-12">
            {/*    <div className="row x_title">
                    <div className="col-md-6">
                      <h3> Electromotor <small>Power metering</small></h3>
                    </div>
                    <div className="col-md-6">

                    </div>
                  </div>*/}

                    <div className="col-md-4 col-sm-4 col-xs-12">
                     <div className="x_panel">
                      <div className="row">
                        <div className="align_right">
                          <h2>Platform Power </h2>


                        </div>
                        <div className="divider"></div>

                      </div>
                      <div className="row">
                        <div className="align_left">
                          <Line data={this.mapData()} options={chartOptions} width="500" height="280"/>
                        </div>
                      </div>
                      </div>
                     </div>  

                    <div className="col-md-4 col-sm-4 col-xs-12">
                     <div className="x_panel">
                      <div className="row">
                        <div className="align_right">
                          <h2>HVAC Air Conditioning Power </h2>


                        </div>
                        <div className="divider"></div>

                      </div>
                      <div className="row">
                        <div className="align_left">
                          <Line data={this.mapDataHVAC()} options={chartOptions}  width="500" height="280"/>
                        </div>
                      </div>
                      </div>
                     </div> 
                 


                        
                   

             
            </div>
           </div>
            </div>


      )}
}

 Power.propTypes = {
  platformPower: PropTypes.array.isRequired,
  HvacPower: PropTypes.array.isRequired,
};


export default createContainer(() => {
  Meteor.subscribe('MASURA_TGV_ID1'),
  Meteor.subscribe('HVAC_CLIME_WIFI_ID73');



  return {
    platformPowerlast : MASURA_TGV_ID1.find({},{limit:1}).fetch(),
    platformPower : MASURA_TGV_ID1.find({}).fetch(),
    HvacPower: HVAC_CLIME_WIFI_ID73.find({}).fetch(),

  };
}, Power);
