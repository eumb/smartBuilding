import React,{ Component, PropTypes } from 'react';
import classNames from 'classnames';
import ReactDOM from "react-dom";

import { createContainer } from 'meteor/react-meteor-data';
import DCValues from '../components/DCValues.jsx';
import {PSC3_1} from '../../collections/collections.js';
import {PSC3_2} from '../../collections/collections.js';
import {Line} from 'react-chartjs';


PSC3_1Average = new Mongo.Collection("PSC3_1Average");
PSC3_2Average = new Mongo.Collection("PSC3_2Average");

class DCPower extends React.Component {

//Meteor.Collection("PSC3_1");  //{ "_id" : ObjectId("59381ff0e95f2f2008a45b68"), "USys" : 53.4, "PSys" : 71267, "ILoad" : 1334.6, "IBatt" : 4.2, "IRect" : 1345.1, "created_at" : ISODate("2017-06-07T15:46:56.388Z") }
//Meteor.Collection("PSC3_2");// { "_id" : ObjectId("59381ff0e95f2f2008a45b68"), "USys" : 53.4, "PSys" : 71267, "ILoad" : 1334.6, "IBatt" : 4.2, "IRect" : 1345.1, "created_at" : ISODate("2017-06-07T15:46:56.388Z") }


PSC3_1(sensorval) {
    return this.props.PSC3_1.map((sensorvalue) => (
      <DCValues key={sensorvalue._id} sensorvalue={sensorvalue} sensor={sensorval} />
    ));
  }

PSC3_2(sensorval) {
    return this.props.PSC3_2.map((sensorvalue) => (
      <DCValues key={sensorvalue._id} sensorvalue={sensorvalue} sensor={sensorval} />
    ));
  }
generateChartData(dataset) {
  timeScale = [];
  PSys_kW=[];
  PSys=_.pluck(dataset, "averagevalue");
  xScale=_.pluck(dataset, "day");
  console.log(PSys)
  console.log(xScale)


for (i=0; i <xScale.length ;i++){
    timeScale.push(moment(xScale[i]).utcOffset(3).format("YY/MM/DD "));
  }
  for (i=0; i <xScale.length ;i++){
    PSys_kW.push(PSys[i]/1000);
  }


  //console.log(PSys);
  //console.log(timeScale);


}

mapData(dataset){

  this.generateChartData(dataset);
   
   var data = {
    labels: xScale,
    datasets: [
        {
            label: 'System Power daily average',
            backgroundColor: 'rgba(88,203,181,0.5)',
           /* radius: 0,*/
            data:PSys_kW,
        }
    ],

};
//console.log(data);
    
    return data;
}


render() {


  var widthth = {
      width:'70%'
    };
  var widthtable={
    width:'90%'
  }

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
        show: false
      }
     
    }],
    yAxes: [{
        scaleLabel: {
          display: true,
          labelString: 'kW',
      },
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



    return (
      <div className="dc_page">
          <div className="col-md-12 col-sm-12 col-xs-12 bg-white">
           
              <div className="col-md-5 col-sm-6 col-xs-12 bg-white">
                <table className="" style={widthtable}>
                    <tbody>
                      <tr>
                        <th>
                          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 bg-white">
                            <p className="power_title">Rectifier controller PSC3_1</p>
                          </div>
                        </th>
                      </tr>
                      <tr>
                      <td>
                        <table className="table table-hover">
                         <tbody>
                          {this.PSC3_1('USys')}
                          {this.PSC3_1('PSys')}
                          {this.PSC3_1('ILoad')}
                          {this.PSC3_1('IBatt')}
                          {this.PSC3_1('IRect')}

                        </tbody>
                        </table>
                      </td>
                      </tr>
                     </tbody>
                </table>
              </div>
              <div className="col-md-7 col-sm-6 col-xs-12 bg-white">
               
                  <Line data={this.mapData(this.props.PSC3_1_chart)} options={chartOptions} width="700" height="170" />
             
              </div>
            <div className="clearfix"></div>
          </div>  
            <div className="col-md-12 col-sm-12 col-xs-12">    <div className="divider"></div></div>
           
           <div className="col-md-12 col-sm-12 col-xs-12 bg-white">
                
                    <div className="col-md-5 col-sm-6 col-xs-12 bg-white">
                      <table  className="" style={widthtable}>
                       <tbody>
                        <tr>
                       
                          <th>
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 bg-white">
                              <p className="power_title">Rectifier controler PSC3_2</p>
                            </div>
                        
                          </th>
                        </tr>
                        <tr>
                        <td>
                          <table className="table table-hover">
                           <tbody>
                              {this.PSC3_2('USys')}
                            {this.PSC3_2('PSys')}
                            {this.PSC3_2('ILoad')}
                            {this.PSC3_2('IBatt')}
                            {this.PSC3_2('IRect')}
                          </tbody>
                          </table>
                        </td>
                        </tr>
                       </tbody>
                      </table>
                    </div> 

                    <div className="col-md-7 col-sm-6 col-xs-12 bg-white">
                      
                        <Line data={this.mapData(this.props.PSC3_2_chart)} options={chartOptions} width="700" height="170" />
                      
                    </div>
               
                <div className="clearfix"></div>
              </div>


          </div> 
      
  
    );
  }

} 


DCPower.propTypes = {
  
  PSC3_1: PropTypes.array.isRequired,
  PSC3_2: PropTypes.array.isRequired,
  PSC3_2_chart: PropTypes.array.isRequired,
  PSC3_1_chart: PropTypes.array.isRequired,
 
};


export default createContainer(() => {
 
  Meteor.subscribe('PSC3_1');
  Meteor.subscribe('PSC3_2');
  Meteor.subscribe('PSC3_1Average');
  Meteor.subscribe('PSC3_2Average');

  return { 
 
   PSC3_1: PSC3_1.find({},{limit:1}).fetch(),
   PSC3_2: PSC3_2.find({},{limit:1}).fetch(),
   PSC3_2_chart: PSC3_2Average.find({}).fetch(),
   PSC3_1_chart: PSC3_1Average.find({}).fetch(),


  };
}, DCPower);