import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';


// Task component - represents a single todo item
export default class WSSensorValue extends Component {
  render() {
  	sensortype=this.props.sensor;
  	//console.log(sensortype)
  	//console.log(this.props.sensorvalue)


  	if (sensortype==="temp"){

     if (this.props.sensorvalue.temp <20){
      return (
      <div>
      <div className="count red">{this.props.sensorvalue.temp}<span className="unit red"> °C </span></div>
      <span><strong>Comfortable:</strong></span><div>25 °C</div> 
       </div>
    );
    } 
    if (this.props.sensorvalue.temp > 30){
            return (
      <div>
      <div className="count red">{this.props.sensorvalue.temp}<span className="unit red"> °C </span></div>
       <span><strong>Comfortable:</strong></span><div>25 °C</div> 
       </div>
    );
    } else {

                return (
      <div>
      <div className="count green">{this.props.sensorvalue.temp}<span className="unit green"> °C </span></div>
       <span><strong>Comfortable:</strong></span><div><strong>25 °C</strong></div> 
       </div>
    );
    }
	}

	if (sensortype==="humid"){
    if (this.props.sensorvalue.humid <30){
      return (
      <div>
      <div className="count red">{this.props.sensorvalue.humid} <span className="unit red"> %</span> </div>
        <span><strong>Comfortable:</strong></span><div>30%-60%</div> 
       </div>
    );
    } 
    if (this.props.sensorvalue.humid > 60){
            return (
      <div>
      <div className="count red">{this.props.sensorvalue.humid} <span className="unit red"> % </span> </div>
       <span><strong>Comfortable:</strong></span><div>30%-60%</div> 
       </div>
    );
    } else {

                return (
      <div>
      <div className="count green">{this.props.sensorvalue.humid} <span className="unit green"> % </span> </div>
       <span><strong>Comfortable:</strong></span><div><strong>30%-60%</strong></div> 
       </div>
    );
    }
    
	}

	if (sensortype==="noise"){
    if (this.props.sensorvalue.noise < 70){
    return (
      <div>
      <div className="count green ">{this.props.sensorvalue.noise} <span className="unit green"> dB</span>  </div>

         <span><strong>Comfortable:</strong></span><div><strong> Less than 70 dB</strong></div> 
      </div>
    );
	  } 
    if(this.props.sensorvalue.noise >= 70){
       return (
      <div>
      <div className="count red">{this.props.sensorvalue.noise} <span className="unit red"> dB </span>  </div>
          <span><strong>Comfortable:</strong></span><div><strong>Less than 70 dB</strong></div>
      </div>
    ); 
     }

  }
  if (sensortype==="light"){
   
    if (this.props.sensorvalue.light < 300){
            return (
      <div>
      <div className="count red">{this.props.sensorvalue.light} <span className="unit red"> lx</span>  </div>
       <span><strong>Comfortable:</strong></span><div> ~ 400 lx</div> 
       </div>
    );
    } else {

                return (
      <div>
      <div className="count green">{this.props.sensorvalue.light} <span className="unit green"> lx</span>  </div>
       <span><strong>Comfortable:</strong></span><div><strong> ~ 400 lx</strong></div> 
       </div>
    );
    }  

  }
   if (sensortype==="dust"){
    if (this.props.sensorvalue.dust <=10){
      return (
      <div>
      <div className="count green">{this.props.sensorvalue.dust} <span className="unit green"> µg/m3</span>  </div>
      <span><strong>Normal:</strong></span><div><strong>35 µg/m3</strong></div> 
       </div>
    );
    } 
    if (this.props.sensorvalue.dust > 10){
            return (
      <div>
      <div className="count red">{this.props.sensorvalue.dust} <span className="unit red"> µg/m3 </span>  </div>
       <span><strong>Normal:</strong></span><div>35 µg/m3</div> 
       </div>
    );
    } 
  
  }  
  
  if (sensortype==="co2"){

 if (this.props.sensorvalue.co2 > 1000){
    return (
      <div>
      <div className="count red">{this.props.sensorvalue.co2} <span className="unit red"> ppm</span>  </div>

         <span><strong>Comfortable:</strong></span><div><strong>Less than 1000 ppm</strong></div> 
      </div>
    );
    } 
    if(this.props.sensorvalue.co2 <=1000){
       return (
      <div>
      <div className="count green">{this.props.sensorvalue.co2} <span className="unit green"> ppm </span>  </div>
          <span><strong>Comfortable:</strong></span><div><strong>Less than 1000 ppm</strong></div>
      </div>
    );
    }

  }

}

}
WSSensorValue.propTypes = {
  // This component gets the task to display through a React prop.
  // We can use propTypes to indicate it is required
  sensorvalue: PropTypes.object.isRequired,
  sensor:PropTypes.string.isRequired,
};