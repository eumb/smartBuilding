 
import React,{ Component, PropTypes } from 'react';
import classNames from 'classnames';
import  { Sparklines } from 'react-sparklines';
import SmallGraphs from '../components/SmallGraphs.jsx';
import { createContainer } from 'meteor/react-meteor-data';
import {ServerRoom} from '../../collections/collections.js';
import AvgData from '../components/AvgData.jsx';
import SensorValue from '../components/SensorValue.jsx';



MRHumidAverage = new Mongo.Collection("MRHumidAverage");
MRTempAverage = new Mongo.Collection("MRTempAverage");
MRNoiseAverage = new Mongo.Collection("MRNoiseAverage");



class TitleDataMR extends React.Component {

renderTasks(sensorval) {
    return this.props.MR.map((sensorvalue) => (
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

            {/*  <AvgData data={this.props.MR}/>*/}
  
              <span className="count_bottom"><i className="green"><i className="fa fa-sort-asc"></i>34% </i> From last Week</span>
                   </div>
                  <div className="col-md-6 tile">
                    <div  className=" count_top spaklines">  
                  <SmallGraphs sensoraverage={this.props.MRTempAverage} type={"temp"} />
                
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
     <SmallGraphs sensoraverage={this.props.MRHumidAverage} type={"humid"} />
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
                     <SmallGraphs sensoraverage={this.props.MRNoiseAverage} type={"noise"} />
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

 TitleDataMR.propTypes = {
  MR: PropTypes.array.iMRequired,
   MRHumidAverage: PropTypes.array.iMRequired,
  MRTempAverage: PropTypes.array.iMRequired,
  MRNoiseAverage: PropTypes.array.iMRequired,
};


export default createContainer(() => {
  Meteor.subscribe('MR');

    Meteor.subscribe('MRHumidAverage');
     Meteor.subscribe('MRTempAverage');
      Meteor.subscribe('MRNoiseAverage');


  return { 
    MR : ServerRoom.find({}).fetch(),
     MRHumidAverage : MRHumidAverage.find().fetch(),
     MRTempAverage : MRTempAverage.find().fetch(),
      MRNoiseAverage : MRNoiseAverage.find().fetch(),
   
   
  };
}, TitleDataMR);