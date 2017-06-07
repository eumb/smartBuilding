import React from "react";
import classNames from 'classnames';
import ServerRoom from '../../collections/collections.js';

export default class AvgData extends React.Component {


	mapData(){
		//console.log(this.props.data)
		this.props.data.map(function(d) {
      		temps=d.temp;
      		//console.log(temps);
      		//console.log(temps)
      		return temps
      		
    	}); //modifica pentru fiecare props updates data
    	//console.log(this.props.data.temp);
    
}
	
	


	render() {
		this.mapData();
		
		/*var date = moment(this.props.beera.date).format("DD/MM/YYYY");	*/
		/*var temp = this.props.beera.beers > 1 ? "beers" : "beer";*/
 		//console.log(this.props.data.temp)
		return (
			   <div className="count">{this.props.data.temp}</div>
		);
	}

}	