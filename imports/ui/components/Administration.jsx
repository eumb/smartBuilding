import React,{ Component, PropTypes } from 'react';
import classNames from 'classnames';
import BeerForm from '../components/BeerForm.jsx';
import {Beers} from '../../collections/collections.js';
import BeerList from '../components/BeerList.jsx';
import { createContainer } from 'meteor/react-meteor-data';
import BarChart from '../components/BarChart.jsx';

class Administration extends React.Component {

/*	getMeteorData() {
	   console.log(Beers.find({}).fetch())
	    return {
	      
	      beers: Beers.find({}).fetch()

	    }
  	}
*/

  mapData() {     
   
    var data = [
      { qty: 0, xLabel: "Sun" }, 
      { qty: 0, xLabel: "Mon" },
      { qty: 0, xLabel: "Tue" },
      { qty: 0, xLabel: "Wed" },
      { qty: 0, xLabel: "Thu" },
      { qty: 0, xLabel: "Fri" },
      { qty: 0, xLabel: "Sat" },
    ];
    this.props.beers.map(function(d) {
      data[moment(d.date).weekday()].qty += d.beers;
    }); //modifica pentru fiecare props updates data
    console.log(data);
    
    return data;
  }

  render() {

  return (
   		<div className="row">
   		 <div className="col-md-4">
          <BeerForm />
          <BeerList  beer={this.props.beers}/>  {/*pass an array as props to the Beerlist so it can be maped and then passed 
          individually to BeerItem for li construction*/}
        </div>
        <div className="col-md-offset-2 col-md-6">          
          <BarChart data={this.mapData()} width="480" height="320"/>
        </div>

       </div>

    );
  }
}

 Administration.propTypes = {
  beers: PropTypes.array.isRequired,
};


export default createContainer(() => {
  
  return { 
    beers : Beers.find({}).fetch(),
   
  };
}, Administration);