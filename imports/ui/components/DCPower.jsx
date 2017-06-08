import React,{ Component, PropTypes } from 'react';
import classNames from 'classnames';
import ReactDOM from "react-dom";

import { createContainer } from 'meteor/react-meteor-data';
import DCValues from '../components/DCValues.jsx';
import {PSC3_1} from '../../collections/collections.js';
import {PSC3_2} from '../../collections/collections.js';
import {Line} from 'react-chartjs';
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
  
  PSys=_.pluck(dataset, "PSys");
  xScale=_.pluck(dataset, "created_at");



for (i=0; i <xScale.length ;i++){
    timeScale.push(moment(xScale[i]).utcOffset(3).format("H:mm"));
  }

  //console.log(PSys);
  //console.log(timeScale);


}

mapData(dataset){

  this.generateChartData(dataset);
   
   var data = {
    labels: timeScale,
    datasets: [
        {
            label: 'PSys',
            fillColor: "rgba(225,241,238,0.5)",
            strokeColor: "rgba(220,220,220,1)",
            pointColor: "rgba(250,195,168,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data:PSys,
        }
    ],

};
//console.log(data);
    
    return data;
}


render() {


  var widthth = {
      width:'37%'
    };
  var widthtable={
    width:'100%'
  }

  var chartOptions= {

        multiTooltipTemplate: "<%= datasetLabel %> - <%= value %>"
 
  

 }

    return (
      <div>
        
                   <div className="row">
              <div className="col-md-5 col-sm-6 col-xs-12">
                <div className="x_panel">
                  
                    <div className="x_content">
                      <table className="" style={widthtable}>
                     <tbody>
                      <tr>
                     
                        <th>
                          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <p className="">Rectifier controller PSC3_1</p>
                          </div>
                        
                        </th>
                      </tr>
                      <tr>
                      <td>
                        <table className="tile_info">
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
                </div>
              </div> 
                   <div className="col-md-7 col-sm-6 col-xs-12">
             <div className="x_panel">
                    
                    <div className="x_content">
                       <Line data={this.mapData(this.props.PSC3_1_chart)} options={chartOptions} width="700" height="170" />
 </div>
                  </div>
               
              </div>
              </div>
              <div className="row">
             <div className="col-md-5 col-sm-6 col-xs-12">
                <div className="x_panel">
                  
                    <div className="x_content">
                      <table className="" style={widthtable}>
                     <tbody>
                      <tr>
                     
                        <th>
                          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            <p className="">Rectifier controler PSC3_2</p>
                          </div>
                      
                        </th>
                      </tr>
                      <tr>
                      <td>
                        <table className="tile_info">
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
                </div>
              </div> 
              <div className="col-md-7 col-sm-6 col-xs-12">
                <div className="x_panel">
                    
                    <div className="x_content">
                       <Line data={this.mapData(this.props.PSC3_2_chart)} width="700" height="170" />

                    </div>
                  </div>
              </div>

                    </div>     
          </div> 
      
  
    );
  }

} 


DCPower.propTypes = {
  
  PSC3_1: PropTypes.array.isRequired,
  PSC3_2: PropTypes.array.isRequired,
 
 
};


export default createContainer(() => {
 
  Meteor.subscribe('PSC3_1');
  Meteor.subscribe('PSC3_2');

  return { 
 
   PSC3_1: PSC3_1.find({},{limit:1}).fetch(),
   PSC3_2: PSC3_2.find({},{limit:1}).fetch(),
   PSC3_2_chart: PSC3_2.find({},{limit:20}).fetch(),
   PSC3_1_chart: PSC3_1.find({},{limit:20}).fetch(),


  };
}, DCPower);