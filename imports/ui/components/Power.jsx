
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



for (i=xScale.length; i>0;i--){
    timeScale.push(moment(xScale[i]).utcOffset(3).format("H:mm"));
  }

  //console.log(Active_Power_Sum_L1_L3);
  //console.log(timeScale);


}


generateChartDataHVAC() {
  timeScale = [];
  dataset=this.props.HvacPower;
  Active_Power_Sum_L1_L3=_.pluck(dataset, "Active_Power_Sum_L1_L3");
  xScale=_.pluck(dataset, "created_at");



for (i=xScale.length; i>0;i--){
    timeScale.push(moment(xScale[i]).utcOffset(3).format("H:mm"));
  }

 //console.log(Active_Power_Sum_L1_L3);
 //console.log(timeScale);


}


generatePercentData(){
  timeScale = [];
  totalPower = [];
  resultedPercentPower =[];
  dataset=this.props.HvacPower;
  dataset2=this.props.platformPower;
  Active_Power_Sum_L1_L3_platform=_.pluck(dataset2, "Active_Power_Sum_L1_L3");
  Active_Power_Sum_L1_L3_hvac=_.pluck(dataset, "Active_Power_Sum_L1_L3");
  
  for (i=xScale.length; i>0;i--){
    timeScale.push(moment(xScale[i]).utcOffset(3).format("H:mm"));
  }

  for (i=0; i <xScale.length ;i++){
    totalPower.push(Active_Power_Sum_L1_L3_platform[i]+Active_Power_Sum_L1_L3_hvac[i]);
    resultedPercentPower.push((Active_Power_Sum_L1_L3_platform[i]/totalPower[i])*100);
  }
 //console.log(totalPower)
  //console.log(resultedPercentPower)
 // console.log(timeScale)

}

mapDataPercent(){
this.generatePercentData()

var data = {
    labels: timeScale,
    datasets: [
        {
            label: 'Platform Power Usage Effectiveness (24h)',
            backgroundColor: 'rgba(88,203,181,0.5)',
            radius: 0,
            lineTension:0,
            data:resultedPercentPower,
        }
    ],

};

    return data;

}

mapData(){

  this.generateChartData();

   var data = {
    labels: timeScale,
    datasets: [
        {
            label: 'Active Power Sum (L1:L3) (24h)',
          backgroundColor: 'rgba(88,203,181,0.5)',
            radius: 0,
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
            label: 'HVAC CLIME WIRELESS (24h)',
            backgroundColor: 'rgba(88,203,181,0.5)',
            radius: 0,
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
    enabled:true  
  },
  elements: {
    line: {
      fill: true
    }
  },
  scales: {
    xAxes: [{

      display: false,
      gridLines: {
        display: false
      },
      labels: {
        show: false
      },
      ticks: {
        max:2
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
        show: false
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
                 

                  <div className="col-md-4 col-sm-4 col-xs-12">
                     <div className="x_panel">
                      <div className="row">
                        <div className="align_right">
                          <h2>Platform Power Usage Effectiveness </h2>


                        </div>
                        <div className="divider"></div>

                      </div>
                      <div className="row">
                        <div className="align_left">
                          <Line data={this.mapDataPercent()} options={chartOptions}  width="500" height="280"/>
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
    platformPower : MASURA_TGV_ID1.find({},{sort: {'created_at' : -1},limit:1000}).fetch(),
    HvacPower: HVAC_CLIME_WIFI_ID73.find({},{sort: {'created_at' : -1},limit:1000}).fetch(),

  };
}, Power);
