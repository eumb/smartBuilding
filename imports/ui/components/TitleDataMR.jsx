 
import React,{ Component, PropTypes } from 'react';
import classNames from 'classnames';
import { createContainer } from 'meteor/react-meteor-data';
import {MeetingRoom} from '../../collections/collections.js';
import MRSensorValue from '../components/MRSensorValue.jsx';

//5CCF7FA43AB8
//5CCF7FEFBE9E

class TitleDataMR extends React.Component {

renderMR1(sensorval) {
    return this.props.MR1.map((sensorvalue) => (
      <MRSensorValue key={sensorvalue._id} sensorvalue={sensorvalue} sensor={sensorval} />
    ));
  }
renderMR2(sensorval) {
    return this.props.MR2.map((sensorvalue) => (
      <MRSensorValue key={sensorvalue._id} sensorvalue={sensorvalue} sensor={sensorval} />
    ));
  }


render() {

  return (
       
       <div className="row tile_count">
            <div className="row tile_count">

                <div className="col-md-6 col-sm-4 col-xs-6 tile_stats_count">
                   {this.renderMR1('pres')}
                    <div className="col-md-6 col-sm-6 col-xs-6">
                     <span className="count_top"><i className="fa fa-user"></i> Temperature Meeting Room 1</span>
                     <div>  {this.renderMR1('temp')} <span className="count">°C</span></div>
                    </div>
                    <div className="col-md-6 col-sm-6 col-xs-6">
                        <span className="count_top"><i className="fa fa-clock-o"></i> Humidity Meeting Room 1</span>
                        <div>  {this.renderMR1('humid')} <span className="count">%</span></div>*
                    </div>
                </div>  
                <div className="col-md-6 col-sm-4 col-xs-6 tile_stats_count">
                 {this.renderMR1('pres')}
                    <div className="col-md-6 col-sm-6 col-xs-6">
                      <span className="count_top"><i className="fa fa-user"></i> Temperature Meeting Room 2</span>
                    <div> {this.renderMR2('temp')} <span className="count">°C</span></div>
                    </div>
                   <div className="col-md-6 col-sm-6 col-xs-6">
                     <span className="count_top"><i className="fa fa-user"></i> Humidity Meeting Room 2</span>
                    <div>  {this.renderMR2('humid')} <span className="count">%</span></div>
                   </div>
                </div>
          </div>
      </div>

    );
  }
}

 TitleDataMR.propTypes = {
  MR1: PropTypes.array.isRequired,
  MR2: PropTypes.array.isRequired,

/*  MR1HumidAverage: PropTypes.array.iMRequired,
  MR1TempAverage: PropTypes.array.iMRequired,
  MR2HumidAverage: PropTypes.array.iMRequired,
  MR2TempAverage: PropTypes.array.iMRequired,*/

};


export default createContainer(() => {
  Meteor.subscribe('MR');

/*    Meteor.subscribe('MR1HumidAverage');
    Meteor.subscribe('MR1TempAverage');
    Meteor.subscribe('MR2HumidAverage');
    Meteor.subscribe('MR2TempAverage');
*/



  return { 
     MR1 : MeetingRoom.find({DeviceID:"5CCF7FEFBE9E"},{limit:1}).fetch(),

     MR2 : MeetingRoom.find({DeviceID:"5CCF7FA43AB8"},{limit:1}).fetch(),
/*     MR1HumidAverage : MRHumidAverage.find().fetch(),
     MR1TempAverage : MRTempAverage.find().fetch(),
     MR2HumidAverage : MRHumidAverage.find().fetch(),
     MR2TempAverage : MRTempAverage.find().fetch(),*/

   
   
  };
}, TitleDataMR);