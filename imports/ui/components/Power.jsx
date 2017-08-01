
import React,{ Component, PropTypes } from 'react';
import classNames from 'classnames';
import { createContainer } from 'meteor/react-meteor-data';
import {Line} from 'react-chartjs';


MASURA_TGV_ID1Average = new Mongo.Collection("MASURA_TGV_ID1Average");
HVAC_CLIME_WIFI_ID73Average = new Mongo.Collection("HVAC_CLIME_WIFI_ID73Average");

class Power extends React.Component {



generateChartData() {
  timeScale = [];
  Active_Power_Sum_L1_L3_kW=[];
  dataset=this.props.platformPower;
  Active_Power_Sum_L1_L3=_.pluck(dataset, "averagevalue");
  xScale=_.pluck(dataset, "day");



for (i=xScale.length; i>0;i--){
    timeScale.push(moment(xScale[i]).utcOffset(3).format("H:mm"));
  }

for (i=0; i <xScale.length ;i++){
    Active_Power_Sum_L1_L3_kW.push(Active_Power_Sum_L1_L3[i]/1000);
  }

  //console.log(Active_Power_Sum_L1_L3);
  //console.log(timeScale);


}


generateChartDataHVAC() {
  timeScale = [];
  Active_Power_Sum_L1_L3_kW=[];
  dataset=this.props.HvacPower;
  Active_Power_Sum_L1_L3=_.pluck(dataset, "averagevalue");
  xScale=_.pluck(dataset, "day");



for (i=xScale.length; i>0;i--){
    timeScale.push(moment(xScale[i]).utcOffset(3).format("H:mm"));
  }
for (i=0; i <xScale.length ;i++){
    Active_Power_Sum_L1_L3_kW.push(Active_Power_Sum_L1_L3[i]/1000);
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
  Active_Power_Sum_L1_L3_platform=_.pluck(dataset2, "averagevalue");
  Active_Power_Sum_L1_L3_hvac=_.pluck(dataset, "averagevalue");
  
  for (i=xScale.length; i>=0;i--){
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
    labels: xScale,
    datasets: [
        {
            label: 'Power Usage Effectiveness (daily average)',
            backgroundColor: 'rgba(88,203,181,0.5)',
            //radius: 0,
            
            data:resultedPercentPower,
        }
    ],

};

    return data;

}

mapData(){

  this.generateChartData();

   var data = {
    labels: xScale,
    datasets: [
        {
            label: 'Active Power Sum (L1:L3) (daily average)',
          backgroundColor: 'rgba(88,203,181,0.5)',
           
            data:Active_Power_Sum_L1_L3_kW,
        }
    ],

};

    return data;
}



mapDataHVAC(){

  this.generateChartDataHVAC();

   var data = {
    labels: xScale,
    datasets: [
        {
            label: 'HVAC CLIME WIRELESS (daily average)',
            backgroundColor: 'rgba(88,203,181,0.5)',
          
            data:Active_Power_Sum_L1_L3_kW,
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

      display: true,
      scaleLabel: {
          display: true,
          labelString: 'Day',
      },
      gridLines: {
        display: false
      },
      labels: {
        show: true
      },
    
    }],
    yAxes: [{
      type: 'linear',
      display: true,
      scaleLabel: {
          display: true,
          labelString: 'kW',
      },

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


var chartOptions1 = {
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

      display: true,
      scaleLabel: {
          display: true,
          labelString: 'Day',
      },
      gridLines: {
        display: false
      },
      labels: {
        show: true
      },
    
    }],
    yAxes: [{
      type: 'linear',
      display: true,
      scaleLabel: {
          display: true,
          labelString: '%',
      },

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
                 

                  <div className="col-md-4 col-sm-4 col-xs-12">
                     <div className="x_panel">
                      <div className="row">
                        <div className="align_right">
                          <h2>Power Usage Effectiveness </h2>

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
  Meteor.subscribe('MASURA_TGV_ID1Average'),
  Meteor.subscribe('HVAC_CLIME_WIFI_ID73Average');



  return {
    
    platformPower : MASURA_TGV_ID1Average.find({},{sort: {'day' : 1}}).fetch(),
    HvacPower: HVAC_CLIME_WIFI_ID73Average.find({},{sort: {'day' : 1}}).fetch(),

  };
}, Power);
