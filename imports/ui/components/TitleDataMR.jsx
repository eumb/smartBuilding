 
import React,{ Component, PropTypes } from 'react';
import classNames from 'classnames';
import { createContainer } from 'meteor/react-meteor-data';
import {MeetingRoom} from '../../collections/collections.js';
import MRSensorValue from '../components/MRSensorValue.jsx';
import {Dev_5CCF7FEFBE9E} from '../../collections/collections.js';
import {Dev_5CCF7FA43AB8} from '../../collections/collections.js';


//5CCF7FA43AB8
//5CCF7FEFBE9E

class TitleDataMR extends React.Component {

renderMR1(sensorval) {
    return this.props.Dev_5CCF7FEFBE9E.map((sensorvalue) => (
      <MRSensorValue key={sensorvalue._id} sensorvalue={sensorvalue} sensor={sensorval} />
    ));
  }
renderMR2(sensorval) {
    return this.props.Dev_5CCF7FA43AB8.map((sensorvalue) => (
      <MRSensorValue key={sensorvalue._id} sensorvalue={sensorvalue} sensor={sensorval} />
    ));
  }


render() {

  return (
       
       <div className="row tile_count">
            <div className="row tile_count">

                <div className="col-md-6 col-sm-4 col-xs-6 tile_stats_count ">
                   {this.renderMR1('pres')}
                    <div className="col-md-6 col-sm-6 col-xs-6 centered">
                     <span className="count_top"><i className="wi wi-thermometer"></i> Temperature MR "Nikola Tesla"</span>
                     <div>  {this.renderMR1('temp')} <span className="count">°C</span></div>
                    </div>
                    <div className="col-md-6 col-sm-6 col-xs-6 centered">
                        <span className="count_top"><i className="wi  wi-humidity"></i> Humidity MR "Nikola Tesla"</span>
                        <div>  {this.renderMR1('humid')} <span className="count">%</span></div>
                    </div>
                </div>  
                <div className="col-md-6 col-sm-4 col-xs-6 tile_stats_count ">
                 {this.renderMR2('pres')}
                    <div className="col-md-6 col-sm-6 col-xs-6 centered">
                      <span className="count_top"><i className="wi wi-thermometer"></i> Temperature MR "Kilo"</span>
                    <div> {this.renderMR2('temp')} <span className="count">°C</span></div>
                    </div>
                   <div className="col-md-6 col-sm-6 col-xs-6 centered">
                     <span className="count_top"><i className="wi  wi-humidity"></i> Humidity MR "Kilo"</span>
                    <div>  {this.renderMR2('humid')} <span className="count">%</span></div>
                   </div>
                </div>
          </div>
      </div>

    );
  }
}

 TitleDataMR.propTypes = {

  Dev_5CCF7FA43AB8:PropTypes.array.isRequired,
  Dev_5CCF7FEFBE9E:PropTypes.array.isRequired,
/*  MR1HumidAverage: PropTypes.array.iMRequired,
  MR1TempAverage: PropTypes.array.iMRequired,
  MR2HumidAverage: PropTypes.array.iMRequired,
  MR2TempAverage: PropTypes.array.iMRequired,*/

};


export default createContainer(() => {
  Meteor.subscribe('MR');
  Meteor.subscribe('5CCF7FA43AB8');
  Meteor.subscribe('5CCF7FEFBE9E');
/*    Meteor.subscribe('MR1HumidAverage');
    Meteor.subscribe('MR1TempAverage');
    Meteor.subscribe('MR2HumidAverage');
    Meteor.subscribe('MR2TempAverage');
*/



  return { 
  
     Dev_5CCF7FEFBE9E:Dev_5CCF7FEFBE9E.find({}).fetch(),
     Dev_5CCF7FA43AB8:Dev_5CCF7FA43AB8.find({}).fetch(),


/*     MR1HumidAverage : MRHumidAverage.find().fetch(),
     MR1TempAverage : MRTempAverage.find().fetch(),
     MR2HumidAverage : MRHumidAverage.find().fetch(),
     MR2TempAverage : MRTempAverage.find().fetch(),*/

   
   
  };
}, TitleDataMR);