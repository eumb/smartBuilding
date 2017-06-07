import React,{ Component, PropTypes } from 'react';
import classNames from 'classnames';
import { Sparklines, SparklinesLine, SparklinesSpots } from 'react-sparklines';


export default class SmallGraphs extends React.Component {

 
 renderTasks() {

  type=this.props.type
  //console.log(type)
  //console.log(this.props.sensoraverage)

  if (type==="humid"){
   return data=this.props.sensoraverage.map(function(d){
      //console.log(Math.round(d.averagevalue))
      return Math.round(d.averagevalue);
    })
    }
   if (type==="temp"){
   return data=this.props.sensoraverage.map(function(d){
      //console.log(Math.round(d.averagevalue))
      return Math.round(d.averagevalue);
    })
    }
     if (type==="noise"){
   return data=this.props.sensoraverage.map(function(d){
      //console.log(Math.round(d.averagevalue))
      return Math.round(d.averagevalue);
    })
    }
  }


render() {




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

SmallGraphs.propTypes = {
  // This component gets the task to display through a React prop.
  // We can use propTypes to indicate it is required

  type:PropTypes.string.isRequired,
};