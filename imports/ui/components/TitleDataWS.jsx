 
import React,{ Component, PropTypes } from 'react';
import classNames from 'classnames';
import  { Sparklines } from 'react-sparklines';
import SmallGraphs from '../components/SmallGraphs.jsx';
import { createContainer } from 'meteor/react-meteor-data';
import {WorkSpace} from '../../collections/collections.js';
import AvgData from '../components/AvgData.jsx';
import SensorValue from '../components/SensorValue.jsx';



WSHumidAverage = new Mongo.Collection("WSHumidAverage");
WSTempAverage = new Mongo.Collection("WSTempAverage");
WSNoiseAverage = new Mongo.Collection("WSNoiseAverage");



class TitleDataWS extends React.Component {

renderTasks(sensorval) {
    return this.props.ws.map((sensorvalue) => (
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
              <span className="count_top"><i className="fa fa-user"></i> Temperature (C)</span>
               {this.renderTasks('temp')}

            {/*  <AvgData data={this.props.WS}/>*/}
  
              <span className="count_bottom"><i className="green"><i className="fa fa-sort-asc"></i>34% </i> From last Week</span>
                   </div>
                  <div className="col-md-6 tile">
                    <div  className=" count_top spaklines">  
                  <SmallGraphs sensoraverage={this.props.WSTempAverage} type={"temp"} />
                
                    </div> 
                 </div>
            </div>
         
            <div className="col-md-2 col-sm-4 col-xs-6 tile_stats_count">
                 <div className="col-md-6 col-sm-6 col-xs-6">
                    <span className="count_top"><i className="fa fa-clock-o"></i> Humidity (%)</span>
                    {this.renderTasks('humid')}
                    <span className="count_bottom"><i className="green"><i className="fa fa-sort-asc"></i>3% </i> Decreasing</span>
                 </div>
                  <div className="col-md-6 col-sm-6 col-xs-6">
                   
   <div  className="count_top spaklines">  </div>
     <SmallGraphs sensoraverage={this.props.WSHumidAverage} type={"humid"} />
                 </div>
                
              
            </div>  
            <div className="col-md-2 col-sm-4 col-xs-6 tile_stats_count">
            <div className="col-md-6 col-sm-6 col-xs-6">
              <span className="count_top"><i className="fa fa-user"></i> Light (lmn)</span>
              <div className="count green"> {this.renderTasks('light')}</div>
              <span className="count_bottom"><i className="green"><i className="fa fa-sort-asc"></i>34% </i> From last Week</span>
           </div>
                  <div className="col-md-6 col-sm-6 col-xs-6">
               {/* <div  className=" count_top spaklines">  <SmallGraphs /></div> */}
                 </div>
            </div>

          <div className="col-md-2 col-sm-4 col-xs-6 tile_stats_count">
            <div className="col-md-6 col-sm-6 col-xs-6">
              <span className="count_top"><i className="fa fa-user"></i> Noise level (dB) </span>
             {this.renderTasks('noise')}
              <span className="count_bottom"><i className="green"><i className="fa fa-sort-asc"></i>34% </i> From last Week</span>
              </div>
                  <div className="col-md-6 col-sm-6 col-xs-6">
                     <SmallGraphs sensoraverage={this.props.WSNoiseAverage} type={"noise"} />
                 </div>
            </div>
            <div className="col-md-2 col-sm-4 col-xs-6 tile_stats_count">
               <div className="col-md-6 col-sm-6 col-xs-6">
              <span className="count_top"><i className="fa fa-user"></i> CO2 level</span>
              <div className="count">23</div>
              <span className="count_bottom"><i className="red"><i className="fa fa-sort-desc"></i>12% </i> From last Week</span>
            </div>
                  <div className="col-md-6 col-sm-6 col-xs-6">
                   {/* <div  className=" count_top spaklines">  <SmallGraphs /></div> */}
                 </div>
            </div>

             <div className="col-md-2 col-sm-4 col-xs-6 tile_stats_count">
              <div className="col-md-6 col-sm-6 col-xs-6">
              <span className="count_top"><i className="fa fa-user"></i> Dust level  (ppm) </span>
              <div className="count"> {this.renderTasks('dust')}</div>
              <div className="count_bottom"><i className="green"><i className="fa fa-sort-asc"></i>34% </i> From last Week</div>
               </div>
                  <div className="col-md-6 col-sm-6 col-xs-6">
                   {/* <div  className=" count spaklines">  <SmallGraphs /></div> */}
                 </div>
            </div>
    

          </div>
          </div>

    );
  }
}

 TitleDataWS.propTypes = {
  ws: PropTypes.array.isRequired,
   WSHumidAverage: PropTypes.array.isRequired,
  WSTempAverage: PropTypes.array.isRequired,
  WSNoiseAverage: PropTypes.array.isRequired,
};


export default createContainer(() => {
  Meteor.subscribe('WS');

    Meteor.subscribe('WSHumidAverage');
     Meteor.subscribe('WSTempAverage');
      Meteor.subscribe('WSNoiseAverage');


  return { 
    ws : WorkSpace.find({DeviceID:"5CCF7FEFB40E"},{limit:1}).fetch(),
     WSHumidAverage : WSHumidAverage.find().fetch(),
     WSTempAverage : WSTempAverage.find().fetch(),
      WSNoiseAverage : WSNoiseAverage.find().fetch(),
   
   
  };
}, TitleDataWS);