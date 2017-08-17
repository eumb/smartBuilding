
import React,{ Component, PropTypes } from 'react';
import classNames from 'classnames';
import { createContainer } from 'meteor/react-meteor-data';
import {Line} from 'react-chartjs';


BIROURI_TD_ZONA_E_ID68_Average = new Mongo.Collection("BIROURI_TD_ZONA_E_ID68_Average");
BIROURI_TD_ZONA_F_ID69_Average = new Mongo.Collection("BIROURI_TD_ZONA_F_ID69_Average");
BIROURI_TD_ZONA_G_ID70_Average = new Mongo.Collection("BIROURI_TD_ZONA_G_ID70_Average");
BIROURI_TD_ZONA_H_ID71_Average = new Mongo.Collection("BIROURI_TD_ZONA_H_ID71_Average");
Iluminat_C_labs_ID80_Average = new Mongo.Collection("Iluminat_C_labs_ID80_Average");
Iluminat_D_labs_ID81_Average = new Mongo.Collection("Iluminat_D_labs_ID81_Average");
SOSIRE_TR4_ID56_Average = new Mongo.Collection("SOSIRE_TR4_ID56_Average");
MASURA_TGV_ID1_Average = new Mongo.Collection("MASURA_TGV_ID1_Average");
FN_NORMALI_ID8_Average = new Mongo.Collection("FN_NORMALI_ID8_Average");


class Power extends React.Component {



/*generateChartData() {
  timeScale = [];
  Active_Power_Sum_L1_L3_kW=[];
  dataset=this.props.platformPower;
  Active_Power_Sum_L1_L3=_.pluck(dataset, "averagevalue");
  xScale=_.pluck(dataset, "date");



for (i=xScale.length; i>0;i--){
    timeScale.push(moment(xScale[i]).utcOffset(3).format("H:mm"));
  }

for (i=0; i <xScale.length ;i++){
    Active_Power_Sum_L1_L3_kW.push(Active_Power_Sum_L1_L3[i]/1000);
  }

  //console.log(Active_Power_Sum_L1_L3);
  //console.log(timeScale);


}*/


/*generateChartDataHVAC() {
  timeScale = [];
  Active_Power_Sum_L1_L3_kW=[];
  dataset=this.props.SOSIRE_TR4_ID56_Average;
  //console.log(dataset);
  Active_Power_Sum_L1_L3=_.pluck(dataset, "averagevalue");
  xScale=_.pluck(dataset, "date");



for (i=xScale.length; i>0;i--){
    timeScale.push(moment(xScale[i]).utcOffset(3).format("H:mm"));
  }
for (i=0; i <xScale.length ;i++){
    Active_Power_Sum_L1_L3_kW.push(Active_Power_Sum_L1_L3[i]/1000);
  }

 //console.log(Active_Power_Sum_L1_L3);
 //console.log(timeScale);


}*/


/*generateItPlatformData(){
  timeScale = [];
  totalItPower_kW = [];
  
  dataset1=this.props.MASURA_TGV_ID1_Average;

  //console.log(dataset1);

  dataset2=this.props.FN_NORMALI_ID8_Average;
  dataset3=this.props.BIROURI_TD_ZONA_E_ID68_Average;
  dataset4=this.props.BIROURI_TD_ZONA_F_ID69_Average;
  dataset5=this.props.BIROURI_TD_ZONA_G_ID70_Average;
  dataset6=this.props.BIROURI_TD_ZONA_H_ID71_Average;
  dataset7=this.props.Iluminat_C_labs_ID80_Average;
  dataset8=this.props.Iluminat_D_labs_ID81_Average;

  xScale=_.pluck(dataset8, "date");
  Active_Power_Sum_L1_L3_MASURA_TGV_ID1_Average=_.pluck(dataset1, "averagevalue");
  Active_Power_Sum_L1_L3_FN_NORMALI_ID8_Average=_.pluck(dataset2, "averagevalue");
  Active_Power_Sum_L1_L3_BIROURI_TD_ZONA_E_ID68_Average=_.pluck(dataset3, "averagevalue");
  Active_Power_Sum_L1_L3_BIROURI_TD_ZONA_F_ID69_Average=_.pluck(dataset4, "averagevalue");
  Active_Power_Sum_L1_L3_BIROURI_TD_ZONA_G_ID70_Average=_.pluck(dataset5, "averagevalue");
  Active_Power_Sum_L1_L3_BIROURI_TD_ZONA_H_ID71_Average=_.pluck(dataset6, "averagevalue");
  Active_Power_Sum_L1_L3_Iluminat_C_labs_ID80_Average=_.pluck(dataset7, "averagevalue");
  Active_Power_Sum_L1_L3_Iluminat_D_labs_ID81_Average=_.pluck(dataset8, "averagevalue");


  console.log(Active_Power_Sum_L1_L3_MASURA_TGV_ID1_Average)
  console.log(Active_Power_Sum_L1_L3_FN_NORMALI_ID8_Average)
  console.log(Active_Power_Sum_L1_L3_BIROURI_TD_ZONA_E_ID68_Average)
  console.log(Active_Power_Sum_L1_L3_BIROURI_TD_ZONA_F_ID69_Average)
  console.log(Active_Power_Sum_L1_L3_BIROURI_TD_ZONA_G_ID70_Average)
  console.log(Active_Power_Sum_L1_L3_BIROURI_TD_ZONA_H_ID71_Average)
  console.log(Active_Power_Sum_L1_L3_Iluminat_C_labs_ID80_Average)
  console.log(Active_Power_Sum_L1_L3_Iluminat_D_labs_ID81_Average)
  
  for (i=xScale.length; i>=0;i--){
    timeScale.push(moment(xScale[i]).utcOffset(3).format("H:mm"));
  }

  for (i=0; i <xScale.length ;i++){
    totalItPower_kW.push(Active_Power_Sum_L1_L3_MASURA_TGV_ID1_Average[i]+Active_Power_Sum_L1_L3_FN_NORMALI_ID8_Average[i] + 
      Active_Power_Sum_L1_L3_BIROURI_TD_ZONA_E_ID68_Average[i]+ Active_Power_Sum_L1_L3_BIROURI_TD_ZONA_F_ID69_Average[i]+
      Active_Power_Sum_L1_L3_BIROURI_TD_ZONA_G_ID70_Average[i]+Active_Power_Sum_L1_L3_BIROURI_TD_ZONA_H_ID71_Average[i]+
      Active_Power_Sum_L1_L3_Iluminat_C_labs_ID80_Average[i]+Active_Power_Sum_L1_L3_Iluminat_D_labs_ID81_Average[i])/1000;

    //resultedPercentPower.push((Active_Power_Sum_L1_L3_platform[i]/totalPower[i])*100);
  }
 console.log(totalItPower_kW)
  //console.log(resultedPercentPower)
 // console.log(timeScale)

}*/


generateData(){


  totalItPower_kW = [];
  resultedPue=[];
  HVACPower_kW=[]

  dataset1=this.props.MASURA_TGV_ID1_Average;
  dataset2=this.props.FN_NORMALI_ID8_Average;
  dataset3=this.props.BIROURI_TD_ZONA_E_ID68_Average;
  dataset4=this.props.BIROURI_TD_ZONA_F_ID69_Average;
  dataset5=this.props.BIROURI_TD_ZONA_G_ID70_Average;
  dataset6=this.props.BIROURI_TD_ZONA_H_ID71_Average;
  dataset7=this.props.Iluminat_C_labs_ID80_Average;
  dataset8=this.props.Iluminat_D_labs_ID81_Average;
  dataset9=this.props.SOSIRE_TR4_ID56_Average;
  xScale=_.pluck(dataset8, "date");
  Active_Power_Sum_L1_L3_MASURA_TGV_ID1_Average=_.pluck(dataset1, "averagevalue");
  Active_Power_Sum_L1_L3_FN_NORMALI_ID8_Average=_.pluck(dataset2, "averagevalue");
  Active_Power_Sum_L1_L3_BIROURI_TD_ZONA_E_ID68_Average=_.pluck(dataset3, "averagevalue");
  Active_Power_Sum_L1_L3_BIROURI_TD_ZONA_F_ID69_Average=_.pluck(dataset4, "averagevalue");
  Active_Power_Sum_L1_L3_BIROURI_TD_ZONA_G_ID70_Average=_.pluck(dataset5, "averagevalue");
  Active_Power_Sum_L1_L3_BIROURI_TD_ZONA_H_ID71_Average=_.pluck(dataset6, "averagevalue");
  Active_Power_Sum_L1_L3_Iluminat_C_labs_ID80_Average=_.pluck(dataset7, "averagevalue");
  Active_Power_Sum_L1_L3_Iluminat_D_labs_ID81_Average=_.pluck(dataset8, "averagevalue");
  Active_Power_Sum_L1_L3_SOSIRE_TR4_ID56_Average=_.pluck(dataset9, "averagevalue");

/*  console.log(Active_Power_Sum_L1_L3_MASURA_TGV_ID1_Average)
  console.log(Active_Power_Sum_L1_L3_FN_NORMALI_ID8_Average)
  console.log(Active_Power_Sum_L1_L3_BIROURI_TD_ZONA_E_ID68_Average)
  console.log(Active_Power_Sum_L1_L3_BIROURI_TD_ZONA_F_ID69_Average)
  console.log(Active_Power_Sum_L1_L3_BIROURI_TD_ZONA_G_ID70_Average)
  console.log(Active_Power_Sum_L1_L3_BIROURI_TD_ZONA_H_ID71_Average)
  console.log(Active_Power_Sum_L1_L3_Iluminat_C_labs_ID80_Average)
  console.log(Active_Power_Sum_L1_L3_Iluminat_D_labs_ID81_Average)*/
  

  xScale_fixed = xScale.splice( 0,xScale.length-1 );
  
  for (i=0; i <xScale_fixed.length ;i++){
    totalItPower_kW.push(Active_Power_Sum_L1_L3_MASURA_TGV_ID1_Average[i]+Active_Power_Sum_L1_L3_FN_NORMALI_ID8_Average[i] + 
      Active_Power_Sum_L1_L3_BIROURI_TD_ZONA_E_ID68_Average[i]+ Active_Power_Sum_L1_L3_BIROURI_TD_ZONA_F_ID69_Average[i]+
      Active_Power_Sum_L1_L3_BIROURI_TD_ZONA_G_ID70_Average[i]+Active_Power_Sum_L1_L3_BIROURI_TD_ZONA_H_ID71_Average[i]+
      Active_Power_Sum_L1_L3_Iluminat_C_labs_ID80_Average[i]+Active_Power_Sum_L1_L3_Iluminat_D_labs_ID81_Average[i])/1000;

    resultedPue.push((totalItPower_kW[i]+Active_Power_Sum_L1_L3_SOSIRE_TR4_ID56_Average[i])/totalItPower_kW[i]);
    HVACPower_kW.push(Active_Power_Sum_L1_L3_SOSIRE_TR4_ID56_Average[i]/1000);

  }
  //console.log(totalItPower_kW)

  console.log(resultedPue)
  console.log(HVACPower_kW)
  console.log(xScale)
  console.log(xScale_fixed);

}



mapDataPue(){
this.generateData()

var data = {
    labels: xScale_fixed,
    datasets: [
        {
            label: 'Power Usage Effectiveness (daily average)',
            backgroundColor: 'rgba(88,203,181,0.5)',
            //radius: 0,
            
            data:resultedPue,
        }
    ],

};

    return data;

}

mapDataItPlatform(){

  this.generateData();

   var data = {
    labels: xScale_fixed,
    datasets: [
        {
            label: 'IT Platform Power(daily average)',
          backgroundColor: 'rgba(88,203,181,0.5)',
           
            data:totalItPower_kW,
        }
    ],

};

    return data;
}



mapDataHVAC(){

  this.generateData();

   var data = {
    labels: xScale_fixed,
    datasets: [
        {
            label: 'HVAC Power (daily average)',
            backgroundColor: 'rgba(88,203,181,0.5)',
          
            data:HVACPower_kW,
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
      type: 'time',
      display:true,
      scaleLabel: {
          display: true,
          labelString: 'Date',
      },
      gridLines: {
        display: false
      },
      labels: {
        show: true
      },
      time: {
             displayFormats: {
            'millisecond': 'MMM DD',
            'second': 'MMM DD',
            'minute': 'MMM DD',
            'hour': 'MMM DD',
              'day': 'MMM DD',
            'week':'MMM DD',
       
          
          },unit:'day'
      }
  
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
      type: 'time',
      display: true,
      scaleLabel: {
          display: true,
          labelString: 'Date',
      },
      gridLines: {
        display: false
      },
      labels: {
        show: true
      },
      time: {
               displayFormats: {
            'millisecond': 'MMM DD',
            'second': 'MMM DD',
            'minute': 'MMM DD',
            'hour': 'MMM DD',
            'day': 'MMM DD',
            'week':'MMM DD',
          
          },unit:'day',
      }
  
    }],
    yAxes: [{
      type: 'linear',
      display: true,
      scaleLabel: {
          display: true,
          labelString: '',
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
                          <h2>IT Platform Power </h2>


                        </div>
                        <div className="divider"></div>

                      </div>
                      <div className="row">
                        <div className="align_left">
                        <Line data={this.mapDataItPlatform()} options={chartOptions} width="500" height="280"/>
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
                         <Line data={this.mapDataPue()} options={chartOptions1}  width="500" height="280"/>
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
 };


export default createContainer(() => {
  Meteor.subscribe('BIROURI_TD_ZONA_E_ID68_Average'),
  Meteor.subscribe('BIROURI_TD_ZONA_F_ID69_Average');
  Meteor.subscribe('BIROURI_TD_ZONA_G_ID70_Average'),
  Meteor.subscribe('BIROURI_TD_ZONA_H_ID71_Average');
  Meteor.subscribe('Iluminat_C_labs_ID80_Average'),
  Meteor.subscribe('Iluminat_D_labs_ID81_Average');
  Meteor.subscribe('SOSIRE_TR4_ID56_Average');
  Meteor.subscribe('FN_NORMALI_ID8_Average');
  Meteor.subscribe('MASURA_TGV_ID1_Average');  

  return {
    
    BIROURI_TD_ZONA_E_ID68_Average : BIROURI_TD_ZONA_E_ID68_Average.find({},{sort: {'day' : 1}}).fetch(),
    BIROURI_TD_ZONA_F_ID69_Average : BIROURI_TD_ZONA_F_ID69_Average.find({},{sort: {'day' : 1}}).fetch(),
    BIROURI_TD_ZONA_G_ID70_Average : BIROURI_TD_ZONA_G_ID70_Average.find({},{sort: {'day' : 1}}).fetch(),
    BIROURI_TD_ZONA_H_ID71_Average : BIROURI_TD_ZONA_H_ID71_Average.find({},{sort: {'day' : 1}}).fetch(),
    Iluminat_C_labs_ID80_Average : Iluminat_C_labs_ID80_Average.find({},{sort: {'day' : 1}}).fetch(),
    Iluminat_D_labs_ID81_Average : Iluminat_D_labs_ID81_Average.find({},{sort: {'day' : 1}}).fetch(),
    SOSIRE_TR4_ID56_Average : SOSIRE_TR4_ID56_Average.find({},{sort: {'day' : 1}}).fetch(),
    FN_NORMALI_ID8_Average : FN_NORMALI_ID8_Average.find({},{sort: {'day' : 1}}).fetch(),
    MASURA_TGV_ID1_Average : MASURA_TGV_ID1_Average.find({},{sort: {'day' : 1}}).fetch(),
  };
}, Power);