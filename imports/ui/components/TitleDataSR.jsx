 
import React,{ Component, PropTypes } from 'react';
import classNames from 'classnames';
import  { Sparklines } from 'react-sparklines';
import SmallGraphsSR from '../components/SmallGraphsSR.jsx';
import { createContainer } from 'meteor/react-meteor-data';
import {ServerRoom} from '../../collections/collections.js';
import AvgData from '../components/AvgData.jsx';
import SensorValue from '../components/SensorValue.jsx';



SRHumidAverage = new Mongo.Collection("SRHumidAverage");
SRTempAverage = new Mongo.Collection("SRTempAverage");
SRNoiseAverage = new Mongo.Collection("SRNoiseAverage");
SRDustAverage = new Mongo.Collection("SRDustAverage");


class TitleDataSR extends React.Component {

renderTasks(sensorval) {
    return this.props.sr.map((sensorvalue) => (
      <SensorValue key={sensorvalue._id} sensorvalue={sensorvalue} sensor={sensorval} />
    ));
  }
renderDust(sensorval) {
    return this.props.sr_dust.map((sensorvalue) => (
      <SensorValue key={sensorvalue._id} sensorvalue={sensorvalue} sensor={sensorval} />
    ));
  }

render() {


  return (
       
       <div className="row tile_count">
            <div className="row tile_count">
              <div className="col-md-3 col-sm-4 col-xs-6 tile_stats_count">
               <div className="col-md-6 col-sm-6 col-xs-6">
              <span className="count_top"><i className="fa fa-user"></i> Temperature (°C)</span>
               {this.renderTasks('temp')}
                 </div>
                  <div className="col-md-6 tile">
                    <div  className=" count_top spaklines">  
                  <SmallGraphsSR sensoraverage={this.props.srTempAverage} type={"temp"} />
                
                    </div> 
                 </div>
            </div>
         
            <div className="col-md-3 col-sm-4 col-xs-6 tile_stats_count">
                 <div className="col-md-6 col-sm-6 col-xs-6">
                    <span className="count_top"><i className="wi  wi-humidity"></i> Humidity (%)</span>
                    {this.renderTasks('humid')}
                 </div>
                  <div className="col-md-6 col-sm-6 col-xs-6">
                   
   <div  className="count_top spaklines">  </div>
     <SmallGraphsSR sensoraverage={this.props.srHumidAverage} type={"humid"} />
                 </div>
                
              
            </div>  
       

          <div className="col-md-3 col-sm-4 col-xs-6 tile_stats_count">
            <div className="col-md-6 col-sm-6 col-xs-6">
              <span className="count_top"><i className="fa fa-bullhorn"></i> Noise level (dB) </span>
             {this.renderTasks('noise')}
              </div>
                  <div className="col-md-6 col-sm-6 col-xs-6">
                     <SmallGraphsSR sensoraverage={this.props.srNoiseAverage} type={"noise"} />
                 </div>
            </div>
     

             <div className="col-md-3 col-sm-4 col-xs-6 tile_stats_count">
              <div className="col-md-6 col-sm-6 col-xs-6">
              <span className="count_top"><i className="wi wi-dust"></i> Dust level  (ppm) </span>
             {this.renderDust('dust')}
               </div>
                  <div className="col-md-6 col-sm-6 col-xs-6">
                  <SmallGraphsSR sensoraverage={this.props.srDustAverage} type={"dust"} />
                 </div>
            </div>
    

          </div>
          </div>

    );
  }
}

 TitleDataSR.propTypes = {
  sr: PropTypes.array.isRequired,
  sr_dust: PropTypes.array.isRequired,
   srHumidAverage: PropTypes.array.isRequired,
  srTempAverage: PropTypes.array.isRequired,
  srNoiseAverage: PropTypes.array.isRequired,
  srDustAverage:PropTypes.array.isRequired,
};


export default createContainer(() => {
  Meteor.subscribe('SR');

    Meteor.subscribe('SRHumidAverage');
     Meteor.subscribe('SRTempAverage');
      Meteor.subscribe('SRNoiseAverage');
      Meteor.subscribe('SRDustAverage');

  return { 
    sr : ServerRoom.find({DeviceID:"5CCF7FF0B17A"},{limit:1}).fetch(),
     sr_dust:ServerRoom.find({DeviceID:"5CCF7FF0B544"},{limit:1}).fetch(),
     srHumidAverage : SRHumidAverage.find().fetch(),
     srTempAverage : SRTempAverage.find().fetch(),
     srNoiseAverage : SRNoiseAverage.find().fetch(),
      srDustAverage:SRDustAverage.find().fetch(),
   
  };
}, TitleDataSR);