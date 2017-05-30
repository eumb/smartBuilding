import React,{ Component, PropTypes } from 'react';
import classNames from 'classnames';
import { Sparklines, SparklinesLine, SparklinesSpots } from 'react-sparklines';
import SensorValue from '../components/SensorValue.jsx';
import { createContainer } from 'meteor/react-meteor-data';

ServerRoomAverage = new Mongo.Collection("SRaverage");





class SmallGraphs extends React.Component {

 renderTasks() {
  console.log(this.props.sraverage)

   return data=this.props.sraverage.map(function(d){
      
      return d.temp;
    })

  }
render() {



//console.log(data)


var style = {
     	height:'80px'
    };
  return (
   	              <div className="sparkline22 graph" style={style}>
                 
              <Sparklines data={this.renderTasks()} width={140} height={80}>
                <SparklinesLine color="#1ABB9C" />
                    <SparklinesSpots />
                </Sparklines>
                 
                  </div>

    );
  }
}

export default createContainer(() => {

  Meteor.subscribe('SRaverage');


  return { 
    sraverage : ServerRoomAverage.find({}).fetch(),
   
  };
}, SmallGraphs);
