import React,{ Component, PropTypes } from 'react';
import classNames from 'classnames';
import { SparklinesReferenceLine, Sparklines, SparklinesLine, SparklinesSpots } from 'react-sparklines';


export default class SmallGraphsSR extends React.Component {

 
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
         if (type==="dust"){
   return data=this.props.sensoraverage.map(function(d){
      //console.log(Math.round(d.averagevalue))
      return Math.round(d.averagevalue);
    })
    }
         if (type==="co2"){
   return data=this.props.sensoraverage.map(function(d){
      //console.log(Math.round(d.averagevalue))
      return Math.round(d.averagevalue);
    })
    }
  }


render() {




var style = {
      height:'100px'
    };  
  return (
                  <div className="sparkline22" style={style}>
                 
              <Sparklines data={this.renderTasks()} limit={7} width={200} height={85}>
                <SparklinesLine color="#1ABB9C" />
                    <SparklinesSpots />

                </Sparklines>
            <div className="daily_trend"> daily trend</div> 
                 
                  </div>

    );
  }
}

SmallGraphsSR.propTypes = {
  // This component gets the task to display through a React prop.
  // We can use propTypes to indicate it is required

  type:PropTypes.string.isRequired,
};