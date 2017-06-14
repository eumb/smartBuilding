 
import React,{ Component, PropTypes } from 'react';
import classNames from 'classnames';
import  { Sparklines } from 'react-sparklines';
import SmallGraphs from '../components/SmallGraphs.jsx';
import { createContainer } from 'meteor/react-meteor-data';
import {WorkSpace} from '../../collections/collections.js';
import AvgData from '../components/AvgData.jsx';
import SensorValue from '../components/SensorValue.jsx';
import {Dev_5CCF7FA43A8B} from '../../collections/collections.js';
import {Dev_5CCF7FEFB40E} from '../../collections/collections.js';


WSHumidAverage = new Mongo.Collection("WSHumidAverage");
WSTempAverage = new Mongo.Collection("WSTempAverage");
WSNoiseAverage = new Mongo.Collection("WSNoiseAverage");
WSLightAverage = new Mongo.Collection("WSLightAverage");
WSDustAverage = new Mongo.Collection("WSDustAverage");
WSCO2Average = new Mongo.Collection("WSCO2Average");

class TitleDataWS extends React.Component {

renderTasks(sensorval) {
    return this.props.ws.map((sensorvalue) => (
      <SensorValue key={sensorvalue._id} sensorvalue={sensorvalue} sensor={sensorval} />
    ));
  }

renderSensorsDust(sensorval) {
    return this.props.ws_dust.map((sensorvalue) => (
      <SensorValue key={sensorvalue._id} sensorvalue={sensorvalue} sensor={sensorval} />
    ));
  }
renderSensorsCO2(sensorval) {
  console.log(this.props.ws)
    return this.props.ws_co2.map((sensorvalue) => (
      <SensorValue key={sensorvalue._id} sensorvalue={sensorvalue} sensor={sensorval} />
    ));
  }

render() {

    temp="temp";
    humid="humid";

  return (
       
       <div className="row tile_count">
            <div className="row tile_count">
              <div className="col-md-2 col-sm-4 col-xs-6 tile_stats_count">
               <div className="col-md-6 col-sm-6 col-xs-6">
              <span className="count_top"><i className="wi wi-thermometer"></i> Office Temperature (°C)</span>
               {this.renderTasks('temp')}

            {/*  <AvgData data={this.props.WS}/>*/}
  
            {/*  <span className="count_bottom"><i className="green"><i className="fa fa-sort-asc"></i>34% </i> From last Week</span>*/}
                   </div>
                  <div className="col-md-6 tile">
                    <div  className=" count_top spaklines">

                  <SmallGraphs sensoraverage={this.props.WSTempAverage} type={"temp"} />
                 
                    </div>
                 </div>
            </div>
         
            <div className="col-md-2 col-sm-4 col-xs-6 tile_stats_count">
                 <div className="col-md-6 col-sm-6 col-xs-6">
                    <span className="count_top"><i className="wi  wi-humidity"></i> Office Humidity (%)</span>
                    {this.renderTasks('humid')}
               {/*     <span className="count_bottom"><i className="green"><i className="fa fa-sort-asc"></i>3% </i> Decreasing</span>*/}
                 </div>
                  <div className="col-md-6 col-sm-6 col-xs-6">
                   
   <div  className="count_top spaklines">  </div>
     <SmallGraphs sensoraverage={this.props.WSHumidAverage} type={"humid"} />
                 </div>
                
              
            </div>  
            <div className="col-md-2 col-sm-4 col-xs-6 tile_stats_count">
            <div className="col-md-6 col-sm-6 col-xs-6">
              <span className="count_top"><i className="wi wi-horizon-alt"></i> Office Light (lx)</span>
              <div className="count"> {this.renderTasks('light')}</div>
          {/*    <span className="count_bottom"><i className="green"><i className="fa fa-sort-asc"></i>34% </i> From last Week</span>*/}
           </div>
                  <div className="col-md-6 col-sm-6 col-xs-6">
               <SmallGraphs sensoraverage={this.props.WSLightAverage} type={"noise"} />
                 </div>
            </div>

          <div className="col-md-2 col-sm-4 col-xs-6 tile_stats_count">
            <div className="col-md-6 col-sm-6 col-xs-6">
              <span className="count_top"><i className="fa fa-bullhorn"></i> Office Noise (dB) </span>
             {this.renderTasks('noise')}
        {/*      <span className="count_bottom"><i className="green"><i className="fa fa-sort-asc"></i>34% </i> From last Week</span>*/}
              </div>
                  <div className="col-md-6 col-sm-6 col-xs-6">
                     <SmallGraphs sensoraverage={this.props.WSNoiseAverage} type={"noise"} />
                 </div>
            </div>
            <div className="col-md-2 col-sm-4 col-xs-6 tile_stats_count">
               <div className="col-md-6 col-sm-6 col-xs-6">
              <span className="count_top"><i className="wi wi-smog"></i> Office CO2  (ppm)</span>
             {this.renderSensorsCO2('co2')}
{/*              <span className="count_bottom"><i className="red"><i className="fa fa-sort-desc"></i>12% </i> From last Week</span>*/}
            </div>
                  <div className="col-md-6 col-sm-6 col-xs-6">
                  <SmallGraphs sensoraverage={this.props.WSCO2Average} type={"co2"} />
                 </div>
            </div>

             <div className="col-md-2 col-sm-4 col-xs-6 tile_stats_count">
              <div className="col-md-6 col-sm-6 col-xs-6">
              <span className="count_top"><i className="wi wi-dust"></i> Office Dust (µg/m3) </span>
              <div className="count"> {this.renderSensorsDust('dust')}</div>
{/*              <div className="count_bottom"><i className="green"><i className="fa fa-sort-asc"></i>34% </i> From last Week</div>*/}
               </div>
                  <div className="col-md-6 col-sm-6 col-xs-6">
                <SmallGraphs sensoraverage={this.props.WSDustAverage} type={"dust"} />
                 </div>
            </div>
    

          </div>
          </div>

    );
  }
}

 TitleDataWS.propTypes = {
  ws: PropTypes.array.isRequired,
  ws_dust: PropTypes.array.isRequired,
  ws_co2: PropTypes.array.isRequired,
  WSHumidAverage: PropTypes.array.isRequired,
  WSTempAverage: PropTypes.array.isRequired,
  WSNoiseAverage: PropTypes.array.isRequired,
  WSLightAverage: PropTypes.array.isRequired,
  WSDustAverage: PropTypes.array.isRequired,
    Dev_5CCF7FA43A8B: PropTypes.array.isRequired,
 Dev_5CCF7FEFB40E: PropTypes.array.isRequired,
};


export default createContainer(() => {
  Meteor.subscribe('WS');

    Meteor.subscribe('WSHumidAverage');
     Meteor.subscribe('WSTempAverage');
      Meteor.subscribe('WSNoiseAverage');
        Meteor.subscribe('WSLightAverage');
Meteor.subscribe('WSDustAverage');
Meteor.subscribe('WSCO2Average');
  Meteor.subscribe('5CCF7FA43A8B');
  Meteor.subscribe('5CCF7FEFB40E');

  return { 
    ws : Dev_5CCF7FA43A8B.find({},{limit:1}).fetch(),
    ws_dust : Dev_5CCF7FEFB40E.find({},{limit:1}).fetch(),
    ws_co2 : WorkSpace.find({DeviceID:"5CCF7FA43A8B"},{limit:1}).fetch(),
     WSHumidAverage : WSHumidAverage.find().fetch(),
     WSTempAverage : WSTempAverage.find().fetch(),
      WSNoiseAverage : WSNoiseAverage.find().fetch(),
      WSLightAverage : WSLightAverage.find().fetch(),
   WSDustAverage: WSDustAverage.find().fetch(),
   WSCO2Average:WSCO2Average.find().fetch(),
   Dev_5CCF7FA43A8B: Dev_5CCF7FA43A8B.find({},{limit:1}).fetch(),
   Dev_5CCF7FEFB40E: Dev_5CCF7FEFB40E.find({},{limit:1}).fetch(),

  };
}, TitleDataWS);